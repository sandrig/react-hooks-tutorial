import React from 'react'
import { Main } from './Main'
import { Alert } from './alert/Alert'
import { AlertProvider } from './alert/AlertContext'

export const App = () => {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  )
}

