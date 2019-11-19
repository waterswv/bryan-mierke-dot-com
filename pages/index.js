import React from 'react'
import Nav from '../components/nav'
import { Chat } from '../components/chat'

export default () => (
  <div>
    <Nav />
    <div className="hero">
      <h1 className="title">Bryan Mierke circa 1983</h1>
      <Chat />
    </div>
  </div>
)
