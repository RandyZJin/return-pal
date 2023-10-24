import { useMemo, type PropsWithChildren, createContext } from 'react'

export type ReturnProcessStep = {
  id: string
  name: string
  component: JSX.Element
}

export type ReturnProcessContextType = {
  steps: ReturnProcessStep[]
}

export const ReturnProcessContext = createContext<ReturnProcessContextType>(
  {} as ReturnProcessContextType
)

export default function ReturnProcessContextProvider({
  children,
  steps,
}: PropsWithChildren<ReturnProcessContextType>) {
  const returnProcessContextValue = useMemo(() => steps, [steps])

  return (
    <ReturnProcessContext.Provider value={{ steps: returnProcessContextValue }}>
      {children}
    </ReturnProcessContext.Provider>
  )
}
