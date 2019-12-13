import React from 'react'
import { Nav } from './NavBar'

const withNavbar = Component => {
  class withNavBar extends React.Component {
    static getInitialProps (ctx) {
      if (Component.getInitialProps) {
        return Component.getInitialProps(ctx)
      }
      return {}
    }
    render () {
      return (
        <div className='bg-gray-100 flex h-screen'>
          <Nav />
          <Component />
        </div>
      )
    }
  }
  return withNavBar
}

export default withNavbar
