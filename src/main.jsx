import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import { WishContextProvider } from './ContextApi/WishContextProvider.jsx'
import { CartContextProvider } from './ContextApi/CartContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishContextProvider>
   <CartContextProvider>
    <App ></App>
    </CartContextProvider>
    </WishContextProvider>
  </React.StrictMode>,
)
