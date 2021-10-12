import { createStore, Store } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { incrementAction, multiplyAction } from './counter/counter.actions';

const store: Store = createStore(counterReducer);

store.subscribe(() => {
    console.log('subs =>', store.getState());
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(multiplyAction);
