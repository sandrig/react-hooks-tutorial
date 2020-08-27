import React from 'react'
import { useAlert } from "./alert/AlertContext";

export const Main = () => {
  // const toggle = useAlertToggle()
  const { toggle } = useAlert()

  return (
    <>
      <h1>Hello in the example with Context</h1>
      <button onClick={toggle} className="btn btn-success">Show alert</button>
    </>
  )
}
