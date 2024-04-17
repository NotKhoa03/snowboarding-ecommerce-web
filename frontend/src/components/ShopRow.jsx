import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col } from 'react-bootstrap'
const ShopRow = () => {
    const items = ['Boots', 'Snowboards', 'Outerwear', 'Bindings']
  return (
    <Row>
    {items.map((item, index) => (
      <Col key={index} xs={6} md={3}>
        <Link to={`/filter/${item}`}>
            <div className="image-container product-card shop">
              <img src={`/images/${item}.jpg`} alt={item} className="img-fluid square" />
              <p className="image-text">Shop {item}</p>
            </div>
        </Link>
      </Col>
    ))}
  </Row>
  )
}

export default ShopRow