import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import {userReducer} from './user';
import {columnReducer} from './column';
import {prayerReducer} from './prayer';

const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  prayer: prayerReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
