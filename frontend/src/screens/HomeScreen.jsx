import { Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import ShopRow from '../components/ShopRow'
import { useGetProductsQuery } from '../slices/productApiSlice'



const HomeScreen = () => {
  //Pagination to show which page we are on
  const { pageNumber, keyword, category } = useParams()
  const { data, isLoading, error} = useGetProductsQuery({keyword, pageNumber, category})

  return (
    <>
      {!keyword && !category ? <ProductCarousel /> : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)}
      
        { isLoading ? (
          <Loader />
        ) : error ? (
        <Message variant='danger'>{ error?.data?.message || error.error }
        </Message>) : (<>
       
        <h1>{!category ? 'Latest Products' : category}</h1>
        <Row> 
            {data.products.map(product => (
                <Col key ={product.id} sm={12} md={6} lg={4} xl={4}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
        <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword: ''} />
        </>) }
        {!category ? <ShopRow /> : ''}
    </>
  )
}

export default HomeScreen