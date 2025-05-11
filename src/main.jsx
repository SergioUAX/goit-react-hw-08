import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './components/App/App';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>      
        <App />
    </Provider>
  </StrictMode>,
)
