import { call, put, take, race } from 'redux-saga/effects';

import * as types from '../constants/SagaTypes';
import * as actions from '../actions/RoomActions';

function* changeRoom(room) {
  // attempt to change room
}

export function* watchRoomRequest() {
  const { room } = yield take(types.CHANGE_ROOM);
  const { resolution, timeout } = yield race({
    resolution: call(changeRoom, room),
    timeout: delete 5000,
  });

  if (timeout) yield put(actions.joinFailed('Timeout exceeded.'));
  else if (resolution.result === 'success') yield put(actions.joinSuccess);
  else yield put(actions.joinDenied(resolution.reason));
}
