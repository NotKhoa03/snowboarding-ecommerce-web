import { useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Meta from '../components/Meta'
import { useGetProductDetailsQuery, useCreateReviewMutation } from '../slices/productApiSlice'
import { addToCart } from '../slices/cartSlice'

const ProductScreen = () => {
    const { id: productId } = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [selectedSize, setSelectedSize] = useState('')

    const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId)

    const [createReview, { isLoading: loadingProductReview}] = useCreateReviewMutation()

    const { userInfo } = useSelector(state => state.auth)

    const addToCartHandler = () => {
        dispatch(addToCart({...product, qty, selectedSize}));
        navigate('/cart');
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await createReview({ productId, rating, comment }).unwrap()
            setRating(0)
            setComment('')
            refetch()
            toast.success('Review Submitted')
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }


  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        
    
        {isLoading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{ error?.data?.message || error.error }</Message>
        ) : (
            <>
            <Meta title={product.name} description={product.description} />
             <Row>
             <Col md={6}>
                 <Image src={product.image} alt={product.name} fluid />
             </Col>
             <Col md={3}>
                 <ListGroup variant='flush'>
                     <ListGroup.Item>
                         <h3>{product.name}</h3>
                     </ListGroup.Item>

                     <ListGroup.Item>
                        <Row>
                        <Col>Size:</Col>
                        <Col>
                        <div className="size-button-container">
                            {product.sizes.map((sizeInfo) => (
                            <Button
                                key={sizeInfo.size}
                                onClick={() => setSelectedSize(sizeInfo)}
                                className={`size-button ${selectedSize.size === sizeInfo.size ? 'selected' : ''}`}
                                disabled={sizeInfo.stock === 0}
                            >
                                {sizeInfo.size}
                            </Button>
                            ))}
                        </div>
                        </Col>
                        </Row>
                    </ListGroup.Item>
                     <ListGroup.Item>
                         <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                     </ListGroup.Item>
                     <ListGroup.Item>
                         Price: ${product.price}
                     </ListGroup.Item>
                     <ListGroup.Item>
                         Description: {product.description}
                     </ListGroup.Item>
                 </ListGroup>
             </Col>
             <Col md={3}>
                 <Card>
                     <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Price:</Col>
                                 <Col>
                                     <strong>${product.price}</strong>
                                 </Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Status:</Col>
                                 <Col>
                                     {selectedSize.qty > 0 ? `${selectedSize.qty} left!` : 'Out of Stock'}
                                 </Col>
                             </Row>
                         </ListGroup.Item>
                         {selectedSize.qty > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                            {[...Array(selectedSize.qty).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                         )}
                         <ListGroup.Item>
                             <Button className='btn-block' type='button' disabled={selectedSize.qty === 0} onClick={addToCartHandler}>
                                 Add To Cart
                             </Button>
                         </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
         </Row>
         <Row className='review'>
            <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && <Message>No Reviews</Message>}
                <ListGroup variant='flush'>
                    {product.reviews.map(review => (
                        <ListGroup.Item key={review._id}>
                            <strong>{review.name}</strong>
                            <Rating value={review.rating} />
                            <p>{review.createdAt.substring(0, 10)}</p>
                            <p>{review.comment}</p>
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item>
                        <h2>Write a Customer Review</h2>
                        {loadingProductReview && <Loader />}
                        {userInfo ? (
                            <Form onSubmit={submitHandler} style={{ width: '100%'
                            }}>
                                <Form.Group controlId='rating' className='my-2'>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control as='select' value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                                        <option value=''>Select...</option>
                                        <option value='1'>1 - Poor</option>
                                        <option value='2'>2 - Fair</option>
                                        <option value='3'>3 - Good</option>
                                        <option value='4'>4 - Very Good</option>
                                        <option value='5'>5 - Excellent</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='comment'>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Button type='submit' variant='primary'>Submit</Button>
                            </Form>
                        ) : (
                            <Message>Please <Link to='/login'>sign in</Link> to write a review</Message>
                        )}
                    </ListGroup.Item>

                </ListGroup>
            </Col>
         </Row>
         </>
        ) }
       
    </>
  )
}

export default ProductScreen