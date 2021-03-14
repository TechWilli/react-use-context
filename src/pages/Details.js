import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { UserContext } from '../contexts/UserContext'

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

const ClearValue = styled.span`
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
  color: #DC0000;
`

const Details = () => {

  const { username, clearUsername } = useContext(UserContext)

  const history = useHistory()

  const goBackToHome = () => history.push('/')

  return (
    <div style={{ maxWidth: '35rem' }}>
      <h1>{username ? username : 'Nenhum input capturado...'}</h1>

      {username && <div style={{ marginTop: '1rem' }}>
        <ClearValue onClick={clearUsername}>limpar username</ClearValue>
      </div>}


      <Button onClick={goBackToHome} >Voltar</Button>
    </div>
  )
}

export default Details
