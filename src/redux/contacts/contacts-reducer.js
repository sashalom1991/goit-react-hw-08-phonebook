import { createReducer} from '@reduxjs/toolkit';
import actions from './contacts-action';

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});
