import React from 'react'
import { CardContainer } from './styles'

type ColumnProps = {
  text: string
  index: number
}

export const Card: React.FC<ColumnProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>
}
