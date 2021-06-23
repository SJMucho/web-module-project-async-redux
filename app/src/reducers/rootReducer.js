import { combineReducers } from "redux";
import { picReducer } from "./picReducer";
import { cardReducer } from "./cardReducer";

const rootReducer = combineReducers({ picReducer, cardReducer });

export default rootReducer;
