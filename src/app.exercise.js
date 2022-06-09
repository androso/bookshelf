/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
import * as auth from 'auth-provider'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'
import {client} from 'utils/api-client'

async function getUser() {
  let user = null

  const token = await auth.getToken()
  if (token) {
    const data = await client('me', {token})
    user = data.user
  }

  return user
}

function App() {
  const [user, setUser] = React.useState(null)
  const login = async formData => {
    const user = await auth.login(formData)
    setUser(user)
  }
  const register = async formData => {
    const user = await auth.register(formData)
    setUser(user)
  }
  const logout = async () => {
    await auth.logout()
    setUser(null)
  }

  React.useEffect(() => {
    getUser().then(u => setUser(u))
  }, [])

  return user ? (
    <AuthenticatedApp logout={logout} user={user} />
  ) : (
    <UnauthenticatedApp login={login} register={register} />
  )
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
