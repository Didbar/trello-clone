import React, { useRef } from 'react'
import { useAppState } from './AppStateContext'
import { useItemDrag } from './hooks/useItemDrag'
import { useDrop } from 'react-dnd'

import { Card } from './Card'
import { AddNewItem } from './AddNewItem'
import { ColumnContainer, ColumnTitle } from './styles'
import { DragItem } from './DragItem'
import { isHidden } from './utils/isHidden'

type ColumnProps = {
  text: string
  index: number
  id: string
  isPreview?: boolean
}

export const Column: React.FC<ColumnProps> = ({ text, index, id, isPreview }) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } })
      item.index = hoverIndex
    }
  })

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text })
  drag(drop(ref))

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}>
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
