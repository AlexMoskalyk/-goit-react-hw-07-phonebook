// import { combineReducers } from "redux";===REDUX
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";

// import { composeWithDevTools } from "redux-devtools-extension";===REDUX
import contactsReducer from "./contacts/contacts-reducer";

//======================toolkit=======================
// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  // middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);
//========================redux==========================
// const store = createStore(rootReducer, composeWithDevTools());
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
const data = { store };

export default data;
