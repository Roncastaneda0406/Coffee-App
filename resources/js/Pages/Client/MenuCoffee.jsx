import HeaderMain from '@/Components/HeaderMain'
import React from 'react'
import Card from './CardCoffee/card'

const coffees = [
  {
    id: 1,
    name: 'Cappuccino',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 2,
    name: 'Iced Latte',
    image: 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 3,
    name: 'Mocha',
    image: 'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 4,
    name: 'Espresso',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 5,
    name: 'Americano',
    image: 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 6,
    name: 'Latte',
    image: 'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 7,
    name: 'Macchiato',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  },
  {
    id: 8,
    name: 'Flat White',
    image: 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop'
  }
]

function MenuCoffee() {
  return (
    <div>
      <HeaderMain />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-x-12 gap-y-8">
          {coffees.map((coffee) => (
            <Card
              key={coffee.id}
              name={coffee.name}
              image={coffee.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default MenuCoffee