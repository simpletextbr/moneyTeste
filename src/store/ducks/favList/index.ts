import { Reducer } from 'redux'
import { FavListState, FavListTypes } from './types'

const initialState:FavListState = {
  data: []
}

const reducer:Reducer<FavListState> = (state = initialState, action) => {
  switch (action.type){
  case FavListTypes.ADD_TO_FAVORITE_LIST:
    return { ...state, data: [ ...state.data, action.payload.data ] }
  case FavListTypes.LOAD_FAVORITES:
    return { ...state, data: [ ...state.data ] }
  default:
    return state
  }
}

export default reducer
