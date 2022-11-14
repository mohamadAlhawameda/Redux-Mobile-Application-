import {Provider} from 'react-redux';
import store from './redux/store'
import * as React from "react"; 
import CompApp from './component//compApp';


const App = () => {
  return (
    <Provider store={store}>
      <CompApp/>
    </Provider>
  );
}

export default App; 