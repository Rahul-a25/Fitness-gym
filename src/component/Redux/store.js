import { applyMiddleware, legacy_createStore } from "redux";
import myreducer from "./reducer";
import logger from "redux-logger";
const mystore=legacy_createStore(myreducer,applyMiddleware(logger))
export default mystore


// import { legacy_createStore ,applyMiddleware} from "redux";
// import logger from "redux-logger";
// import MyReducer from "../Reducer/myreducer";
// const MyReduxStore=legacy_createStore(MyReducer,applyMiddleware(logger))
// export default MyReduxStore