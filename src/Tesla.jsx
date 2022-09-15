import React from 'react'
import Header from'./Header'
import Section from'./Section'
import Footer from './Footer' 

function Tesla() {
  return (
    <>
    <Header name = {'kuch or'}/>
    <Section title={'Model A'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'model-3.jpg'}/>
    
    <Section title={'Model B'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'model-s.jpg'}/>
    

    <Section title={'Model C'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'model-x.jpg'}/>
    

    <Section title={'Model D'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'model-y.jpg'}/>
    

    <Section title={'Model E'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'solar-panel.jpg'}/>
    

    <Section title={'Model F'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'solar-roof.jpg'}/>
    

    <Section title={'Accessories'} tag={'Order online for touchless delivery'} button1={'custom order'} button2={'Existing Inventory'} img={'accessories.jpg'}/>
    
    <Section dis />
    <Footer />
    
    </>
    
  )
}

export default Tesla
