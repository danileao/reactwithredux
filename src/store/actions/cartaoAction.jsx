import * as ActionType from '../const/ActionType';

export const fetchCardById = id => ({
  type: ActionType.FETCH_CARD_ID_REQUEST,
  payload: { id },
});

export const fetchCardByIdSuccess = data => ({
  type: ActionType.FETCH_CARD_ID_SUCCESS,
  payload: { data },
});
