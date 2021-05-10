import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>

  );
}

export default App;
