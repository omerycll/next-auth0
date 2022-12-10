import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {!isAuthenticated ? (
        <>
          <div>
            <button onClick={() => loginWithRedirect()}>Sign in</button>
          </div>
        </>
      ) : (
        <>
          <button onClick={() => logout()}>Sign out</button>
        </>
      )}
    </div>
  )
}

export default Home