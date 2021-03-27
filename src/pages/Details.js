import React, { useContext } from 'react'
import { useHistory, Redirect } from 'react-router'
import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthContext'
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
  const { auth: authorization, setAuth } = useContext(AuthContext)

  console.log('auth details', authorization)

  const history = useHistory()

  const goBackToHome = () => {
    history.push('/')
    setAuth(false)

  }

  if (!authorization) return <Redirect to="/" />

  return (
    <div style={{ maxWidth: '35rem' }}>
      <h1>{username ? username : 'Nenhum input capturado...'}</h1>

      {username && <div style={{ marginTop: '1rem' }}>
        <ClearValue onClick={clearUsername}>limpar username</ClearValue>
      </div>}

      <Button onClick={goBackToHome} >Voltar</Button>

      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
        O state foi compartilhado via contexto entre rotas
      </p>
    </div>
  )
}

export default Details
