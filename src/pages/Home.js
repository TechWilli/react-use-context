import React, { useRef, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { UserContext } from '../contexts/UserContext'

const Input = styled.input`
  width: 35rem;
  height: 4.5rem;
  background-color: white;
  border: 2px solid #0099ff;
  border-radius: 3px;
  margin: 1rem 0;
  padding: .85rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: box-shadow 200ms;

  &:focus {
    box-shadow: 0 0 0 5px #0099ff2f;
  }
`

const Button = styled.button`
  width: 35rem;
  height: 4.5rem;
  background-color: #0099ff;
  border-radius: 5px;
  margin: 1rem 0;
  padding: .85rem;
  font-size: 2rem;
  transition: background-color 200ms ease-in;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: #244DA5;
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 5px #0099ff2f;
  }
`

const Home = () => {

  const inputRef = useRef(null)
  const { username, setUsername } = useContext(UserContext)

  const handleUsernameChange = ({ target }) => setUsername(target.value)

  const history = useHistory()

  const goToDetails = () => history.push('/details')

  useEffect(() => {

    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h1>Digite aqui seu melhor username:</h1>

      <Input
        name="username"
        ref={inputRef}
        value={username}
        onChange={handleUsernameChange}
      />

      <p style={{ fontSize: '1.5rem', marginTop: '3rem' }}>Ver username reativo em outra rota:</p>

      <Button onClick={goToDetails} >IR PARA DETALHES</Button>
    </div>
  )
}

export default Home
