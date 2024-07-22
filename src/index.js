import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
//import { createStore } from 'redux'
import { Provider } from "react-redux";
import Counter from './components/Counter'
import reducers from './reducers'
 
const store = configureStore({
  reducer:reducers
});

const container = document.getElementById('root');
const root = createRoot(container); 
const renderApp = () => {root.render(
  <StrictMode>
    <Provider store={store}>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </Provider>
  </StrictMode>
  );
};
renderApp();
store.subscribe(renderApp);