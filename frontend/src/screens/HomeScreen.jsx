import { Row, Col } from 'react-bootstrap'
import React, { useEffect, useRef } from 'react';
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

  //Fade in effect for products
  const productRefs = useRef([]);
  productRefs.current = new Array(data?.products?.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    productRefs.current.forEach((ref, index) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      productRefs.current.forEach((ref, index) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [data]);

  return (
    <>
      {!keyword && !category ? <ProductCarousel /> : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)}
      
        { isLoading ? (
          <Loader />
        ) : error ? (
        <Message variant='danger'>{ error?.data?.message || error.error }
        </Message>) : (<>
       
        <h1 className='screen-title'>{!category ? 'Latest Products' : category}</h1>
        <Row> 
            {data?.products?.map((product, index) => (
                <Col key ={product.id} sm={12} md={6} lg={4} xl={4} style={{opacity: '0'}} ref={(el) => productRefs.current[index] = el}>
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