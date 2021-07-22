import React, { Component } from 'react'
import * as S from './styles'

import { logo, iconHome } from '../../assets'

interface IPage{
  page:string
}

class Navbar extends Component<IPage, {}> {

  render (){
    return (
      <S.Main>
        <S.Logo>
          <img src={logo} alt="Logo da Bloomberg Brasil" />
        </S.Logo>
        <S.Navbar>
          <S.Home border={this.props.page}>
            <div className="border" />
            <img src={iconHome} alt="Icone da pagina inicial" />
          </S.Home>
        </S.Navbar>
      </S.Main>
    )
  }
}

export default Navbar
