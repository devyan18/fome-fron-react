import ReactDOM from 'react-dom/client'
import './styles/bootstrap.min.css'

import socket from 'socket.io-client'

import { BrowserRouter } from 'react-router-dom'
import { RouterManager } from './router.jsx'

const io = socket('http://localhost:4000')


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterManager io={io}/>
  </BrowserRouter>,
)
