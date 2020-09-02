import React, { useState, useRef, useEffect } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const nameInputRef = useRef(null)
  useEffect(() => {
    nameInputRef.current.focus()
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, password)
  }
  return (
    <div className="App">
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          ref={nameInputRef}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="password"
          required
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
