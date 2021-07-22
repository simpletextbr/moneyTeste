import React from 'react'

import * as S from './styles'

import { Navbar, UserSide, Dashboard } from '../../Components'

function Home ():JSX.Element {
  return (
    <S.Main>
      <Navbar page="home" />
      <Dashboard />
      <UserSide />
    </S.Main>
  )
}

export default Home
