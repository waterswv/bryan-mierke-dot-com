import React from 'react'
import withNavBar from '../components/withNavBar'
import Code from '../components/Code'
let codes = ['cards-animation-example-chftk', 'dazzling-smoke-l7ghw', 'contact-component-nqqky', 'dazzling-smoke-l7ghw', 'cards-animation-example-chftk', 'dazzling-smoke-l7ghw',]
const AboutPage = () => (
  <div className='w-11/12 bg-white-100 flex flex-wrap overflow-y-auto'>
    {codes.map(code => <Code key={code} id={code} />)}
  </div>
)

export default withNavBar(AboutPage)
