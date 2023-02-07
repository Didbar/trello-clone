import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import styled from 'styled-components'
const Button = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
`
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Button>Click me</Button>
  </React.StrictMode>
)
