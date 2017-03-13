import { pickImage } from '../components/Camera';

export const SET_ALCOHOL = 'newBrew/SET_ALCOHOL';
export const SET_BREW_NAME = 'newBrew/SET_BREW_NAME';
export const SET_BREW_TYPE = 'newBrew/SET_BREW_TYPE';
export const SET_BREWERY = 'newBrew/SET_BREWERY';
export const SET_IMAGE = 'newBrew/SET_IMAGE';
export const SET_RATING = 'newBrew/SET_RATING';
export const RESET_FORM = 'newBrew/RESET_FORM';

export const setAlcohol = alcohol => ({
  type: SET_ALCOHOL,
  alcohol
});

export const setBrewName = brewName => ({
  type: SET_BREW_NAME,
  brewName
});

export const setBrewType = brewType => ({
  type: SET_BREW_TYPE,
  brewType
});

export const setBrewery = brewery => ({
  type: SET_BREWERY,
  brewery
});

export const setImage = image => ({
  type: SET_IMAGE,
  image
});

export const setRating = rating => ({
  type: SET_RATING,
  rating
});

export const resetForm = () => ({
  type: RESET_FORM
});
