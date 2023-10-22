import ReactDOM from 'react-dom/client'
import socket from 'socket.io-client'

import { BrowserRouter } from 'react-router-dom'
import RouterManager from './router'
import UserProvider from './providers/UserProvider'

import { SERVER_URL } from './utilities/constants'

const io = socket(SERVER_URL)

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <RouterManager io={io}/>
    </BrowserRouter>
  </UserProvider>
)
