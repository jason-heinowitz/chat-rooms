import * as types from '../constants/RoomReducerTypes';

const initialState = {
  currentRoom: 'Global',
};

const RoomReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default RoomReducer;
