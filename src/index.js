import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import '@coreui/coreui/dist/css/coreui.min.css'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
)
