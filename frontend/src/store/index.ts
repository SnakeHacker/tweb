import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
});

export type AppState = ReturnType<typeof rootReducer>;
export default createStore(
    rootReducer,
)