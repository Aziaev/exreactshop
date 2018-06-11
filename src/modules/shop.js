import { initialState } from '../constants';

export const DAY = 'DAY';
export const MONTH = 'MONTH';
export const YEAR = 'YEAR';
export const RESET = 'RESET';

const ADD = 'ADD';
const DELETE = 'DELETE';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log(JSON.stringify(action));
    case MONTH:
      console.log(JSON.stringify(action));
    default:
      return state;
  }
}

export const updateCart = (fieldName,  itemId) => {
  console.log(`updatecart`);
  return dispatch => {
    switch (fieldName) {
      case ADD:
        return dispatch({
          type: ADD,
          itemId: itemId
        });
      case DELETE:
        return dispatch({
          type: DELETE,
          itemId: itemId
        });
    }
  };
};
