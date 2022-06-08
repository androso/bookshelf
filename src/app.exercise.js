/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
import * as auth from 'auth-provider'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'

function App() {
  const [user, setUser] = React.useState(null)
  const login = async formData => {
    const user = await auth.login(formData)
    setUser(user)
  }
  const register = async formData => {
    console.log(formData)
    const user = await auth.register(formData)
    setUser(user)
  }
  const logout = async () => {
    await auth.logout()
    setUser(null)
  }

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
