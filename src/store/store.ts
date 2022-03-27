import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import {
  userReducer,
  columnReducer,
  prayerReducer,
  commentReducer,
} from './reducers';

const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  prayer: prayerReducer,
  comment: commentReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
