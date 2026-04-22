import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './Container.jsx'
import './styles/index.css'

createRoot(document.body).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)
