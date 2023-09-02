import { createStore, applyMiddleware } from "redux";
// 数据持久化工具
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware: any[] = [thunk];

// 判断是否是正式环境
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const persistConfig = {
  // 存储的名称
  key: "BASE_ROOT",
  // 存储方式
  storage: storage,
  // 某个reducer,不持久化
  // blacklist: ['development'],
  // 需要持久化的模块
  whitelist: ["counter", "currentTheme", "token"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default createStore(persistedReducer, applyMiddleware(...middleware));
