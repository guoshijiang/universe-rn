/**
 * desc：store flow
 * author：XBC
 * date： 2020/4/7 3:49 下午
 */
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';
import * as actions from '../actions/todo';

const persistConfig = {
    // storage key
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
    const applyMiddlewares = applyMiddleware(thunk,
        // createLogger
    );
    const store = createStore(persistedReducer, applyMiddlewares);
    let persistor = persistStore(store);
    return {store, persistor};
}
