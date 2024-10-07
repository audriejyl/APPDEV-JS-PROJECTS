import {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import ListofFruits from './List0fFruits'


function App(){
  //array of fruits => fruit.objects
  const fruits = [
    {id: 1, name: "apple",color: "red"},
    {id: 2, name: "bannana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape",color: "purple"},
    {id: 5, name: "kiwi",color: "green"}

  ]

  const desserts = [
    {id: 1, name: "cake",color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]
  /*Descending order/reverse alphabetical order
  fruits.sort((a, b) => b.name.localeCompare(a.name))
  fruits.sort((a, b) => b.name.localeCompare(b.name))
  const redFruits = fruits.filter*/

  return(
    <>
      <Header/>
      {fruits.length > 0 ?(<ListofFruits items = {fruits} category= "My Favorite Fruits"/>) : (<p> I do not like fruits</p>)}
      {desserts.length > 0 ?(<ListofFruits items = {desserts} category= "My Favorite Deserts"/>) : (<p> I do not like Desserts.</p>)}
      <Footer/>
    </>
  )
}
export default App