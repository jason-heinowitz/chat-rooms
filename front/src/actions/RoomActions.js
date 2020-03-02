import * as types from '../constants/RoomReducerTypes';

export const joinSuccess = () => ({
  type: types.JOIN_ROOM_SUCCESS,
});

export const joinDenied = (reason) => ({
  type: types.JOIN_ROOM_DENIED,
  paylod: reason,
});

export const joinFailed = (reason) => ({
  type: types.JOIN_ROOM_FAILED,
  payload: reason,
});
