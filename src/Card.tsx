import React from 'react'
import { CardContainer } from './styles'

type ColumnProps = {
  text: string
}

export const Card: React.FC<ColumnProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>
}
