import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { IQuote } from '../../store/ducks/quote/types'
import { loadRequest } from '../../store/ducks/quote/actions'
import { addToFavoriteList } from '../../store/ducks/favList/actions'
import { HashLoader } from 'react-spinners'

import Scroll from './scroll'
import SearchGraphic from './searchGraphic'
import * as S from './styles'

interface StateProps{
  quote: IQuote[]
  searchList: IQuote[]
  favList: IQuote[]
  error: boolean
  quoteLoad(search:string): void
  favorite(data:IQuote):void
}

interface DispatchProps{
  quoteLoad(search:string): void
}

type State = {input: string, left:number}

type Props = StateProps & DispatchProps

class Dashboard extends Component<Props, State> {
  componentDidMount (){
    const { quoteLoad } = this.props

    quoteLoad('MSFT')

  }

  render () {

    const { quote, error, quoteLoad, favorite, searchList } = this.props

    const loaded = quote.length === 0 ? true : false

    return (
      loaded === true ?
        <S.Load>
          <HashLoader color="#0047bb" loading={true} size={50} />
        </S.Load> :
        quote.map((qt, index) => (
          <S.Main key={index}>
            <SearchGraphic
              error={error}
              qt={qt}
              quote={quote}
              favorite={favorite}
              quoteSearch={quoteLoad}
            />
            <Scroll searchList={searchList} quote={quoteLoad} favorite={favorite}/>
          </S.Main>
        ))
    )
  }
}

const mapStateToProps = (state:ApplicationState) => ({
  quote: state.quote.data,
  error: state.quote.error,
  searchList: state.searchList.data,
  favList: state.favoriteList.data,
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  quoteLoad: (search:string) => dispatch(loadRequest(search)),
  favorite: (data:IQuote) => dispatch(addToFavoriteList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
