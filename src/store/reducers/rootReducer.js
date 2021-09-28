import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import screenReducer from "./screenReducer";

const rootReducer = combineReducers({
    screen: screenReducer,
    company: companyReducer
});

export default rootReducer;
