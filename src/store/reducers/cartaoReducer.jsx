import * as ActionType from '../const/ActionType';

const INITIAL_STATE = {};

export default function cards(state = INITIAL_STATE, action) {
  // console.log('here act');
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case ActionType.FETCH_CARD_ID_SUCCESS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
