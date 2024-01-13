import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistCombineReducers, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER }
    from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkedReducer } from "../features/checked/checkedSlice";

const persistConfig = {
    storage: AsyncStorage,
    key: 'root'
}

export const store = configureStore({
    reducer: persistCombineReducers(persistConfig, {
        checked: checkedReducer
    }),
    middleware: (getDefaultMiddleware) => 
        // this is recommended by Redux Toolkit
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
                ]
            }
        })
});

export const persistor = persistStore(store);
