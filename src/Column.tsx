import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = {
  text: string
  children?: React.ReactNode
}

export const Column: React.FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}
