import React from 'react'
import styled  from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
      title='Model S'
      description='Order Online for Touchless Delivery'
      lftBtntext='Custom Order'
      rgtBtntext='Existing Inventory'
      bgImg='model-s.jpg'/>
      <Section
      title='Model 3'
      description='Order Online for Touchless Delivery'
      lftBtntext='Custom Order'
      rgtBtntext='Existing Inventory'
      bgImg='model-3.jpg'/>
      <Section
      title='Model X'
      description='Order Online for Touchless Delivery'
      lftBtntext='Custom Order'
      rgtBtntext='Existing Inventory'
      bgImg='model-x.jpg'/>
      <Section
      title='Model Y'
      description='Order Online for Touchless Delivery'
      lftBtntext='Custom Order'
      rgtBtntext='Existing Inventory'
      bgImg='model-y.jpg'/>
      <Section
      title='Lowest Cost Solar Panel in America'
      description='Money-back guarentee'
      lftBtntext='Order Now'
      rgtBtntext='Learn More'
      bgImg='solar-panel.jpg'/>
      <Section
      title='Solar for New Roofs'
      description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
      lftBtntext='Order Now'
      rgtBtntext='Learn More'
      bgImg='solar-roof.jpg'/>
      <Section
      title='Accessories'
      description=''
      lftBtntext='Shop Now'
      rgtBtntext=''
      bgImg='Accessories.jpg'/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
    

`