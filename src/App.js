import React, {useEffect, useState} from 'react'

const useLogger = value => {
  useEffect(() => {
    console.log('Value changed', value)
  }, [value])
}

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: { value, onChange },
    value,
    clear
  }
}

export const App = () => {
  const input = useInput('')

  // const [name, setName] = useState()
  // const [lastName, setLastName] = useState()

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }

  // const lastNameHandler = event => {
  //   setLastName(event.target.value)
  // }

  // useLogger(name)
  useLogger(input.value)

  return (
    <div className={'container pt-3'}>
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear()}>Clear</button>
      {/*<input type="text" value={input.value} onChange={input.onChange} />*/}
      {/*<input type="text" value={name} onChange={changeHandler} />*/}
      {/*<input type="text" value={lastName} onChange={lastNameHandler} />*/}
      <hr />
      {/*<h1>{name} {lastName}</h1>*/}
      {/*<h1>{name}</h1>*/}
      <h1>{input.value}</h1>
    </div>
  )
}

