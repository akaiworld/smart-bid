import { createStore } from "redux";
import { combineReducers } from "redux";

import transactions from "./reducers/transactions/transactions";

export default createStore(
	combineReducers({
		transactions,
	})
);