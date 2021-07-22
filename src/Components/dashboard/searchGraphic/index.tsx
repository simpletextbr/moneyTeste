import React, { useState } from 'react'
import {
  AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Line
} from 'recharts'

import ReactTooltip from 'react-tooltip'
import { IQuote } from '../../../store/ducks/quote/types'

import { iconDashboard, iconGraphDown, iconGraphUp } from '../../../assets'
import { AiOutlineStar } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import * as S from './styles'

interface ISearchGraphic{
  error:boolean
  qt:IQuote
  quote: IQuote[]
  quoteSearch: (search:string) => void
  favorite: (data: IQuote) => void
}

function SearchGraphic ({ error, qt, quote, quoteSearch, favorite }:ISearchGraphic):JSX.Element {

  const [ search, setSearch ] = useState(String)

  const clearFields = () => {
    setSearch('')
  }

  const hanleSearch = (search:string) => {
    quoteSearch(search)
    clearFields()
  }

  const quoteToPrices = quote.map(qt => qt.prices)

  const yAxisTickFormatter = (value:number) => `$ ${value}`

  function CustomTooltip ({ payload, active }:any){
    if (active) {
      return (
        <S.Tooltip>
          <p>{`$${payload[ 0 ].value}`}</p>
        </S.Tooltip>

      )
    }

    return null
  }

  const database = quote.length === 0 ? [] : quoteToPrices[ 0 ]

  return (
    <React.Fragment>
      <S.Title>
        <img src={iconDashboard} alt="Icone no Dashboard" />
        <p>Dashboard</p>
      </S.Title>
      <S.Search unknow={error}>
        <input
          type="search"
          placeholder="Buscar empresas"
          value={search.toUpperCase().trim()}
          onChange={event => setSearch(event.target.value)}
        />
        <FiSearch size={20} color="#FFFFFF" onClick={() => hanleSearch(search)} />
        {error === true &&
              <p className="error">Por favor digite um nome válido</p>
        }
      </S.Search>
      <S.Graphic status={qt.change}>
        <div className="data">
          <div className="enterprise">
            <div className="fav">
              <AiOutlineStar data-tip="Adicionar aos favoritos" size={20} onClick={() => favorite(qt)} />
              <ReactTooltip textColor="#FFF" backgroundColor="#0047bb" />
            </div>
            <div className="name">
              <p className="symbol">{qt.symbol}</p>
              <p className="name">{qt.companyName}</p>
            </div>
          </div>
          <div className="latest">
            <div className="price">
              {quote[ 0 ].change > 0 ?
                (<><img src={iconGraphUp} alt="icone do grafico subindo" /><p>${qt.latestPrice.toFixed(2)}</p></>) :
                (<><img src={iconGraphDown} alt="icone do grafico subindo" /><p>{qt.latestPrice.toFixed(2)}</p></>)
              }
            </div>
            <div className="changes">
              <p>${qt.change}</p>
              <p>({qt.changePercent ? qt.changePercent.toFixed(2) : qt.changePercent}%)</p>
            </div>
          </div>
        </div>
        <AreaChart width={700} height={274} data={database}>
          <Area type="monotone" dataKey="Valor" stroke="#0047bb" fill="rgba(0, 71, 187, 0.1)"/>
          <Line type="monotone" dataKey="name" stroke="#0047bb" />
          <CartesianGrid stroke="#EEE" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={yAxisTickFormatter}/>
          <Tooltip content={<CustomTooltip />} key="Valor"/>
        </AreaChart>
      </S.Graphic>
    </React.Fragment>
  )
}

export default SearchGraphic
