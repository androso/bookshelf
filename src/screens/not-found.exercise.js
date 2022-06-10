/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Link} from 'components/lib'

function NotFoundScreen() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here.
        <hr />
        <Link to={'/'}>Go Home</Link>
      </div>
    </div>
  )
}

export {NotFoundScreen}
