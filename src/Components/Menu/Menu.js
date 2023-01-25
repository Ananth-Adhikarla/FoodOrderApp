import React from 'react'
import Card from '../UI/Card'
import './Menu.css'
import MenuItems from './MenuItems'

const Menu = () => {
  const COFFEE_MENU = [
    {
      id: '1',
      title: 'Cappuccino',
      desc: 'Perfect balance of espresso, steamed milk and foam.',
      price: 7.99
    },
    {
      id: '2',
      title: 'Espresso',
      desc: 'Concentrated form of coffee served in small, strong shots.',
      price: 4.29
    },
    {
      id: '3',
      title: 'Iced Coffee',
      desc: 'Cold version of your favourite coffee.',
      price: 5.99
    },
    {
      id: '4',
      title: 'Cold Milk',
      desc: 'Great beverage to keep your body hydrated. Cold milk is packed with electrolytes that can help your body combat dehydration.',
      price: 3.0
    }
  ]

  return (
    <Card>
      {COFFEE_MENU.map(menu => {
        return (
          <MenuItems
            key={menu.id}
            id={menu.id}
            title={menu.title}
            desc={menu.desc}
            price={menu.price}
          />
        )
      })}
    </Card>
  )
}

export default Menu
