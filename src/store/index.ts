import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { QuoteState } from './ducks/quote/types'
import { FavListState } from './ducks/favList/types'
import { SearchListState } from './ducks/searchList/types'

import rootReducer from './ducks/rootReducers'
import rootSaga from './ducks/rootSagas'

export interface ApplicationState {
  quote: QuoteState;
  searchList: SearchListState;
  favoriteList: FavListState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState, any> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store

