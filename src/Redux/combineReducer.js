import { contactReducer } from './contactsSlice';
import { filterSlice } from './filterSlice';

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  contacts: contactReducer,
});
