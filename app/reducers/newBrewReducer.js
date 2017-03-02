import {
  SET_ALCOHOL,
  SET_BREW_NAME,
  SET_BREW_TYPE,
  SET_BREWERY,
  SET_IMAGE,
  SET_RATING
} from '../actions/newBrew';

const initialState = {
  alcohol: 4.7,
  brewery: 'Hansa',
  brewName: '',
  brewType: '',
  image: '',
  rating: 3
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALCOHOL:
      return {
        ...state,
        alcohol: action.alcohol
      };
    case SET_BREW_NAME:
      return {
        ...state,
        brewName: action.brewName
      };
    case SET_BREW_TYPE:
      return {
        ...state,
        brewType: action.brewType
      };
    case SET_BREWERY:
      return {
        ...state,
        brewery: action.brewery
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.image
      };
    case SET_RATING:
      return {
        ...state,
        rating: action.rating
      };
    default:
      return state;
  }
}
