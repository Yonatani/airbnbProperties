import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import PropertiesFeedContainer from './components/propertiesFeed/PropertiesFeedContainer';
import configureStore from './store/configureStore';
const store = configureStore();

const App = () => ( 
  <Provider store={store}>
    <MuiThemeProvider>
      <PropertiesFeedContainer />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
