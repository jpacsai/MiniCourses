import { combineReducers } from 'react';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
    users: UserReducer
});