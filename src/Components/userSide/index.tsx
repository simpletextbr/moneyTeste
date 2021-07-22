import React, { Component } from 'react'
import * as S from './styles'

import { RiArrowDownSFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import { iconNoPhoto, iconGraphDown, iconGraphUp, iconTrash } from '../../assets'
import { ApplicationState } from '../../store'
import { IQuote } from '../../store/ducks/quote/types'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import * as FavActions from '../../store/ducks/favList/actions'

interface StateProops{
  favList: IQuote[]
  loadFavorites(): void
}

interface DispatchProps{
  favList: IQuote[]
}

type Props = StateProops & DispatchProps

class UserSide extends Component<Props> {
  render () {
    const { favList, loadFavorites } = this.props

    const handleDelete = (index:number) => {
      favList.splice(index, 1)
      loadFavorites()
    }

    return (
      <S.Main>
        <S.Title>
          <div className="box">
            <img src={iconNoPhoto} alt="foto de perfil" />
            <p>João da Silva Almeida Magalhães</p>
            <RiArrowDownSFill size={20} />
          </div>
        </S.Title>
        <S.FavList>
          <div className="title">
            <AiFillStar size={20} />
            <p>Empresas favoritas</p>
          </div>
          {favList.map((list:any, index) => (
            <div className="box" key={index}>
              <S.Fav key={index} status={list.change}>
                <div className="card" key={index} >
                  <div className="left">
                    <div className="logo">
                      <img src={list.logotipo} alt={`logotipo da empresa ${list.companyName}`} />
                    </div>
                    <div className="name">
                      <p className="symbol">{list.symbol}</p>
                      <p className="name">{list.companyName}</p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="changes">
                      {list.change > 0 ?
                        (<><p>+{list.changePercent ? list.changePercent.toFixed(2) : list.changePercent}%</p><img src={iconGraphUp} alt="icone do grafico subindo" /></>) :
                        (<><p>{list.changePercent ? list.changePercent.toFixed(2) : list.changePercent}%</p><img src={iconGraphDown} alt="icone do grafico subindo" /></>)
                      }
                    </div>
                  </div>
                </div>
              </S.Fav>
              <img className="deletar" src={iconTrash} alt="icone de Lixeira" onClick={() => handleDelete(index)} />
            </div>
          ))}
        </S.FavList>
      </S.Main>
    )
  }
}

const mapStateToProps = (state:ApplicationState) => ({
  favList: state.favoriteList.data
})

const matDispatchToProps = (dispatch:Dispatch) => bindActionCreators(FavActions, dispatch)

export default connect(mapStateToProps, matDispatchToProps)(UserSide)
