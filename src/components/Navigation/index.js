import React from 'react'
import { Link } from 'react-router-dom'

import * as Routes from '../../constants/routes'

const {SIGN_IN, HOME, ACCOUNT, ADMIN, LANDING} = Routes
function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to={SIGN_IN}>Sign in</Link>
        </li>
        <li>
          <Link to={LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ADMIN}>Admin</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
