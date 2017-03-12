import { ADD_BREW, REMOVE_BREW } from '../actions/brewList';

// Initial state is loaded from Firebase on mount
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREW:
      return [
        ...state,
        action.brew
      ];
    case REMOVE_BREW:
      return state.brews.filter(brew => {
        return brew.brewName !== action.brewName;
      });
    default:
      return state;
  }
}
