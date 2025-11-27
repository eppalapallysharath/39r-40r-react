import React from 'react'
import { ProductsList } from '../components/ProductsList'
import { Card } from 'react-bootstrap'

export const HomePage = () => {
  return (
    <div>
      <div>
        <p className='h3 text-center'>Products List</p>
      </div>
     <ProductsList/>
    </div>
  )
}
