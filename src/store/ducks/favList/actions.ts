import { action } from 'typesafe-actions'
import { FavListTypes } from './types'
import { IQuote } from '../quote/types'

export const addToFavoriteList = (data: IQuote) => action(FavListTypes.ADD_TO_FAVORITE_LIST, { data })
export const loadFavorites = () => action(FavListTypes.LOAD_FAVORITES)
