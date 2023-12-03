import {contactsReducer} from './Reducers';
import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
export const store = configureStore({
  reducer: {
    contactsReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(thunkMiddleware);
  },
});
