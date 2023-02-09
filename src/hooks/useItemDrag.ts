import { DragItem } from './../DragItem'
import { useAppState } from './../AppStateContext'
import { useDrag } from 'react-dnd'

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: item
      })
      return item
    },
    end: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined })
  })
  return { drag }
}
