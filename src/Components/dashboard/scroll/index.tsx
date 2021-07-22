import React, { useState } from 'react'
import { IQuote } from '../../../store/ducks/quote/types'

import * as S from './styles'

import { iconExchange, iconGraphDown, iconGraphUp } from '../../../assets'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'

interface IScroll{
  searchList: IQuote[]
  quote: (search:string) => void
  favorite:(data: IQuote) => void
}

function Scroll ({ searchList, quote, favorite }:IScroll):JSX.Element {
  const [ left, setLeft ] = useState(0)

  let largura = searchList.length * 300
  let larLimit = (searchList.length * (-300) + 600)

  function moveToRight (){

    if (largura < 770){
      setLeft(0)
    } else {

      if (left === larLimit){
        setLeft(larLimit)
      } else if (left >= larLimit){
        setLeft(left - 300)
      }
    }
  }

  function moveToleft (){
    let scroll = left + 300
    if (scroll > 0){
      scroll = 0
    }

    setLeft(scroll)

  }

  return (
    <S.Recently>
      <div className="title">
        <div className="left">
          <img src={iconExchange} alt="icone de bolsa de valores" />
          <p>Empresas recentes</p>
        </div>
        <div className="right">
          <FiChevronLeft size={20} onClick={() => moveToleft()}/>
          <FiChevronRight size={20} onClick={() => moveToRight()}/>
        </div>
      </div>
      <S.Cards id="cards" style={{
        marginLeft: left,
        width: (searchList.length * 320)
      }}>
        {searchList.map((list:any, index) => (
          <S.Card key={index} status={list.change} >
            <div className="left">
              <div className="fav">
                <AiOutlineStar size={20} onClick={() => favorite(list)} />
              </div>
              <div className="logo">
                <img src={list.logotipo} alt={`logotipo da empresa ${list.companyName}`} />
              </div>
              <div className="name" onClick={() => quote(list.symbol)}>
                <p className="symbol">{list.symbol}</p>
                <p className="name">{list.companyName}</p>
              </div>
            </div>
            <div className="right">
              <div className="changes">
                {list.changePercent > 0 ?
                  (<><p>+{list.changePercent.toFixed(2)}%</p><img src={iconGraphUp} alt="icone do grafico subindo" /></>) :
                  (<><p>-{list.changePercent.toFixed(2)}%</p><img src={iconGraphDown} alt="icone do grafico subindo" /></>)
                }
              </div>
            </div>
          </S.Card>
        ))}
      </S.Cards>
    </S.Recently>
  )
}

export default Scroll

