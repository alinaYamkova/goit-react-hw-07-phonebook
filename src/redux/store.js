import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import contactsReducer from "./contacts/contacts-reducer";

// удаляем persistStore

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: 
    { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
  }), logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// // реалізує запис в LocalStorage
// const persistor = persistStore(store);


export default  store;