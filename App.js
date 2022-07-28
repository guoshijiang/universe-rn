import React from 'react';
import {Provider} from 'react-redux';
import configureStore from "./app/store";
import Mobile from "./mobile";
import {PersistGate} from 'redux-persist/integration/react'
// import '../shim';
import "./app/resources";

const {store, persistor} = configureStore();

function App() {
  return (
      <Provider store={store}>
          <PersistGate loding={null} persistor={persistor}>
              <Mobile/>
          </PersistGate>
      </Provider>
  );
}

export default App;
