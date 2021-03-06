// Transaction ProgressAlert actions
export const SET_FILTER = "SET_FILTER";
export const RIMBLE_ADD_PROGRESSALERT = "RIMBLE_ADD_PROGRESSALERT";
export const RIMBLE_TOGGLE_PROGRESSALERT = "RIMBLE_TOGGLE_PROGRESSALERT";
export const RIMBLE_SET_PROGRESSALERT_STATUS =
  "RIMBLE_SET_PROGRESSALERT_STATUS";
export const RIMBLE_SET_PROGRESSALERT_TX_HASH =
  "RIMBLE_SET_PROGRESSALERT_TX_HASH";
export const RIMBLE_UPDATE_PROGRESSALERT_CONTENT =
  "RIMBLE_UPDATE_PROGRESSALERT_CONTENT";
export const RIMBLE_UPDATE_PROGRESSALERT_TOKEN =
  "RIMBLE_UPDATE_PROGRESSALERT_TOKEN";
export const RIMBLE_UPDATE_PROGRESSALERT_REMAININGTIME =
  "RIMBLE_UPDATE_PROGRESSALERT_REMAININGTIME";
export const RIMBLE_UPDATE_PROGRESSALERT_TXFEE =
  "RIMBLE_UPDATE_PROGRESSALERT_TXFEE";

// Transaction Modal actions
export const RIMBLE_TOGGLE_NETWORK_MODAL = "RIMBLE_TOGGLE_NETWORK_MODAL";
export const RIMBLE_TOGGLE_TX_START_MODAL = "RIMBLE_TOGGLE_TX_START_MODAL";
export const RIMBLE_TOGGLE_TX_PENDING_MODAL = "RIMBLE_TOGGLE_TX_PENDING_MODAL";
export const RIMBLE_TOGGLE_TX_SUCCESS_MODAL = "RIMBLE_TOGGLE_TX_SUCCESS_MODAL";
export const RIMBLE_TOGGLE_TX_ERROR_MODAL = "RIMBLE_TOGGLE_TX_ERROR_MODAL";
export const RIMBLE_TOGGLE_TX_LOW_BALANCE_MODAL =
  "RIMBLE_TOGGLE_TX_LOW_BALANCE_MODAL";
export const RIMBLE_TOGGLE_TX_ACTIVITY_MODAL =
  "RIMBLE_TOGGLE_TX_ACTIVITY_MODAL";

// Functions to maintain state
export const RIMBLE_SET_CURRENT_TX_ID = "RIMBLE_SET_CURRENT_TX_ID";

// Function to fix race-conditions with drizzle
export const RIMBLE_ENABLE_BUY_BUTTON = "RIMBLE_ENABLE_BUY_BUTTON";

// External data
export const RIMBLE_FETCH_ETH_PRICE = "RIMBLE_FETCH_ETH_PRICE";
export const RIMBLE_RECEIVED_ETH_PRICE = "RIMBLE_RECEIVED_ETH_PRICE";
export const RIMBLE_CALL_TX_GAS_PRICE = "RIMBLE_CALL_TX_GAS_PRICE";
export const RIMBLE_RECEIVED_TX_GAS_PRICE = "RIMBLE_RECEIVED_TX_GAS_PRICE";

export const RIMBLE_FETCH_GAS_STATION_RECENT_TX =
  "RIMBLE_FETCH_GAS_STATION_RECENT_TX";
export const RIMBLE_RECEIVE_TX_TIME_ESTIMATE =
  "RIMBLE_RECEIVE_TX_TIME_ESTIMATE";
export const RIMBLE_ERROR_GAS_STATION_RECENT_TX =
  "RIMBLE_ERROR_GAS_STATION_RECENT_TX";

export const RIMBLE_FETCH_AVG_TX_GAS_AND_TIME =
  "RIMBLE_FETCH_AVG_TX_GAS_AND_TIME";
export const RIMBLE_RECEIVE_AVG_TX_GAS_AND_TIME =
  "RIMBLE_RECEIVE_AVG_TX_GAS_AND_TIME";
export const RIMBLE_ERROR_AVG_TX_GAS_AND_TIME =
  "RIMBLE_ERROR_AVG_TX_GAS_AND_TIME";

export const RIMBLE_CALL_ESTIMATE_TX_GAS = "RIMBLE_CALL_ESTIMATE_TX_GAS";
export const RIMBLE_RECEIVE_ESTIMATE_TX_GAS = "RIMBLE_RECEIVE_ESTIMATE_TX_GAS";
export const RIMBLE_ERROR_ESTIMATE_TX_GAS = "RIMBLE_ERROR_ESTIMATE_TX_GAS";
