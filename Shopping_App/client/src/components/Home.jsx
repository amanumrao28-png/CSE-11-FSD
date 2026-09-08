import React from 'react'
import Item from './Item'

const Home = () => {
      const itemData=[
        {
            image:"",title:"ReactJs",price:645
        },
        {
            image:"",title:"NodeJs",price:545
        },  
        {
            image:"",title:"Python",price:745
        },
      ]
  return (
    <div className='home'>
        {
            itemData.map((item,index)=>{
                return <Item key={index} image={item.image} title={item.title} price={item.price}/>
            })
        }
    </div>
  )
}

export default Home