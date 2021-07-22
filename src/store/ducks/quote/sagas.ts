import { call, put } from 'redux-saga/effects'

import api from '../../../services/api'
import env from 'react-dotenv'
import { IQuote } from './types'
import { loadSucess, loadFailure } from './actions'
import { addToSearchList } from '../searchList/actions'

export function * load (action:any):Generator{
  const data = action.payload.search
  let quote:any
  let logo:any
  let intraday:any

  try {
    quote = yield call(api.get, `/stock/${data}/quote?token=${env.SECRET}`)
    logo = yield call(api.get, `/stock/${data}/logo?token=${env.SECRET}`)
    intraday = yield call(api.get, `/stock/${data}/intraday-prices?chartInterval=40&&token=${env.SECRET}`)

    const Arrayintraday = intraday.data.map((it:any) => ({ name: it.minute, Valor: it.average.toFixed(2) }))

    const graphic:IQuote = {
      symbol: quote.data.symbol,
      companyName: quote.data.companyName,
      openTime: quote.data.iexOpenTime,
      open: quote.data.iexOpen,
      closeTime: quote.data.iexCloseTime,
      close: quote.data.iexClose,
      latestPrice: quote.data.latestPrice,
      change: quote.data.change,
      changePercent: quote.data.changePercent,
      logotipo: logo.data.url,
      prices: Arrayintraday,
    }

    const Data:IQuote[] = [ graphic ]

    yield put(addToSearchList(graphic))
    yield put(loadSucess(Data))
  } catch (error) {
    yield put(loadFailure())
  }
}
