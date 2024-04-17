import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Message from './Message'
import { useGetTopProductsQuery } from '../slices/productApiSlice'

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery()
  const [index, setIndex] = useState(0);
  
  const backgrounds = ['url(/images/carousel/bg1.jpg)',  'url(/images/carousel/bg4.png)', 'url(/images/carousel/bg2.jpg)']

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return isLoading ? <></>: error ? <Message variant='danger'>{error?.data?.message || error.error}</Message> : (
    <Carousel activeIndex={index} onSelect={handleSelect} pause='hover' className='carousel-container mb-4' style={{ backgroundImage: backgrounds[index % backgrounds.length]}}>
        {products.map(product => (
            <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} style={{ height: '400px', width:'50%', objectFit: 'cover'}} />
                <Carousel.Caption className='carousel-caption'>
                <h5>{product.name} (${product.price})</h5>
                </Carousel.Caption>
            </Link>
            </Carousel.Item>
        ))}
    </Carousel>

  )

}

export default ProductCarousel