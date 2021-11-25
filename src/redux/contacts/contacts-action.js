
import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/filterContact');

const action = {
    changeFilter
}

export default action;