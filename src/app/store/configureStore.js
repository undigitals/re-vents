import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore=(preloadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer   
    );

    // redux hot module set up
    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer)
            })
        }
    }
    return store;
}

/* createStore API is taking 3 args which are rootReducer(which combines 2 reducers currently),
 preloadedState(which is initial state), composedEnhancer(Enhancer, which is used for ehancing the store capabitilities 
 with extra tools like middlewares, time travel, etc)
 */