import React from 'react'

import GlobalStyles from './styles/globalStyles'
import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css'

function App ():JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App
