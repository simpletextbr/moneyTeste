import { Reducer } from 'redux'
import { SearchListState, SearchListTypes } from './types'

const initialState:SearchListState = {
  data: []
}

const reducer:Reducer<SearchListState> = (state = initialState, action) => {
  switch (action.type){
  case SearchListTypes.ADD_TO_SEARCH_LIST:
    return { ...state, data: [ action.payload.data, ...state.data ] }
  default:
    return state
  }
}

export default reducer
