import { combineReducers } from 'redux';
import RoomReducer from './RoomReducer';
import LoginReducer from './LoginReducer';

const reducers = combineReducers({
  room: RoomReducer,
  login: LoginReducer,
});

export default reducers;
