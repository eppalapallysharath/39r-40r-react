import React,{useContext} from 'react'
import { CartContext } from '../contextApi/ContextApi'
import { data } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

export const CartData = () => {
    const { cart, setCart } = useContext(CartContext)

    const handleDelete= (id)=>{
        const newCart = cart.filter(v => v.id !==id )
        setCart(newCart)
    }

  return (
    <div>{cart.length > 0 ? cart.map(cartItem => <Card key={cartItem.id} style={{ width:"25rem" }} className='d-flex flex-row'>
        <div>
            <Card.Img src={cartItem.image} className='w-25 h-100' />
        </div>
        <div>
            <Card.Title>{cartItem.Title}</Card.Title>
            <Card.Text>price {cartItem.price}</Card.Text>
            <Button onClick={()=>handleDelete(cartItem.id)}>Remove</Button>
        </div>
    </Card>) : <p className='h4'> Your cart is empty</p>}</div>
  )
}
