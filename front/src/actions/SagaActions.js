import * as types from '../constants/SagaTypes';

export const login = ({ username, password }) => ({
  type: types.LOGIN,
  username: username,
  password: password,
});

export const changeRoom = ({ targetRoom }) => ({
  type: types.CHANGE_ROOM,
  room: targetRoom,
});

export const logout = () => ({
  type: types.LOGOUT,
});
