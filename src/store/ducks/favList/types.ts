import { IQuote } from '../quote/types'

export enum FavListTypes {
  ADD_TO_FAVORITE_LIST = '@favList/ADD_FAVORITE_LIST',
  LOAD_FAVORITES = '@favList/LOAD_FAVORITES',
}

export interface FavListState {
 readonly data: IQuote[];
}
