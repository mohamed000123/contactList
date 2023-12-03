import {get_contacts} from './actionsTypes';
const initialState = {
  contacts: [],
};
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_contacts:
      return {...state, contacts: action.payload};
    default:
      return state;
  }
};
