import { all, takeLatest } from 'redux-saga/effects'

import { QuoteTypes } from './quote/types'

import { load } from './quote/sagas'

export default function * rootSaga ():Generator{
  return yield all([
    takeLatest(QuoteTypes.LOAD_REQUEST, load)
  ])
}
