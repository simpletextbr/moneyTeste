import { combineReducers } from 'redux'

import quote from './quote'
import searchList from './searchList'
import favoriteList from './favList'

export default combineReducers({
  quote,
  searchList,
  favoriteList,
})
