
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-mup1qqhdazbx0vo1.us.auth0.com"
    clientId="siKAAW1hKNVmfN2ciIhVgPaYrrwPWgBK"
    authorizationParams={{
      redirect_uri: "https://syedaamnarafi.github.io/tastyburgers/"
    }}
  >
    <App />
  </Auth0Provider>,
  
)
