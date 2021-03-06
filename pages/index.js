import React from 'react'
import { Chat } from '../components/Chat'
import withNavBar from '../components/withNavBar'

const Home = () => (
  <div className='w-11/12 bg-white-100'>
    <Chat />
  </div>
)

export default withNavBar(Home)
