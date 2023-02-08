import React from 'react'
import { useAppState } from './AppStateContext'

import { Card } from './Card'
import { AddNewItem } from './AddNewItem'
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = {
  text: string
  index: number
  id: string
}

export const Column: React.FC<ColumnProps> = ({ text, index, id }) => {
  const { state, dispatch } = useAppState()
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={(text) => dispatch({ type: 'ADD_TASK', payload: { text, listId: id } })}
        dark
      />
    </ColumnContainer>
  )
}
