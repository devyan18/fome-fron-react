import ReactDOM from 'react-dom/client'
import socket from 'socket.io-client'

import { BrowserRouter } from 'react-router-dom'
import { RouterManager } from './router.jsx'
import { UserProvider } from './providers/UserProvider.jsx'

const io = socket('http://localhost:4000')

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <RouterManager io={io}/>
    </BrowserRouter>
  </UserProvider>
)
