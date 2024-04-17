import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { Button } from 'react-bootstrap'

const Product = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState({})
  return (
    <Card className='my-3 p-3 product-card' >
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top'/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div' className='product-title' >
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
            <Link to={`/product/${product._id}`}>
                <div className="size-button-container">
                    {product.sizes.map((sizeInfo) => (
                        <Button
                            key={sizeInfo.size}
                            onClick={() => setSelectedSize(sizeInfo)}
                            className={`size-button ${selectedSize.size === sizeInfo.size ? 'selected' : ''}`}
                            disabled={sizeInfo.stock === 0}
                            style={{ fontSize: '15px' }}
                        >
                            {sizeInfo.size}
                        </Button>
                    ))}
                </div>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default Product