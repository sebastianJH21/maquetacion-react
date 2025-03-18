import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './Container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
    <Container rotate={true} />
  </StrictMode>,
)
