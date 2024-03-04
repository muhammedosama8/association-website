import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import { thunk } from 'redux-thunk';
import { SocialReducer } from './reducers/SocialReducer';
const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    social: SocialReducer
});


export const store = createStore(reducers,  composeEnhancers(middleware));
