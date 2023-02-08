import React, { createContext, useReducer, useContext } from 'react'

type Task = {
  id: string
  text: string
}
type List = {
  id: string
  text: string
  tasks: Task[]
}
export type AppState = {
  lists: List[]
}
type AppStateContextProps = {
  state: AppState
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: '0', text: 'Generate app scaffold' }]
    },
    {
      id: '1',
      text: 'In PRogress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }]
    }
  ]
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  )
}
