import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
}

const purchaseOrderSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCAHSE_INIT: return updateObject(state, { purchased: false });
    case actionTypes.PURCAHSE_BURGER_START: return updateObject(state, { purchased: true });
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return updateObject(state, { loading: false });
    case actionTypes.FETCH_ORDERS_START: return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS: return purchaseOrderSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL: return updateObject(state, { loading: false });
    default: return state;
  }
}

export default reducer;