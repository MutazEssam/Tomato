import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
        <h1>Explore our menu</h1>
        <p className='Explore-Menu-Text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore rerum alias expedita rem deserunt, voluptatum doloremque, modi vitae repellendus saepe aspernatur odit, sed voluptates eaque quos reiciendis laborum illo tempora.</p>
        <div className="Explore-Menu-List">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Explore-Menu-List-Item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
                    
            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu