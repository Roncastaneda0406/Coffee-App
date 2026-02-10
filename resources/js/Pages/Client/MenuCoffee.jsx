import HeaderMain from '@/Components/HeaderMain'
import React from 'react'
import Card from './CardCoffee/card'

const coffees = [
  {
    id: 1,
    name: 'Cappuccino',
    description: 'Rich espresso with steamed milk foam.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'Iced Latte',
    description: 'Smooth espresso over ice with cold milk.',
    image: 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk.',
    image: 'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'Espresso',
    description: 'Pure and bold coffee shot.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 5,
    name: 'Americano',
    description: 'Espresso with hot water for smoothness.',
    image: 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Espresso with steamed milk and foam.',
    image: 'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 7,
    name: 'Macchiato',
    description: 'Espresso marked with milk foam.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 8,
    name: 'Flat White',
    description: 'Smooth microfoam over espresso.',
    image: 'https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  }
]

function MenuCoffee() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderMain />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((coffee) => (
            <Card
              key={coffee.id}
              title={coffee.name}
              description={coffee.description}
              image={coffee.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default MenuCoffee