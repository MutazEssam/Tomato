import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  // Filter food list based on category
  const filteredList = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category)

  return (
    <div className='FoodDisplay' id='FoodDisplay'>
      <h2>Top Dishes You Like</h2>

      <div className="food-grid">
        {filteredList.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} EGP</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
