import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Comp,{Helloworld} from "./App"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp/>
    <Helloworld/>
  </StrictMode>,
)
