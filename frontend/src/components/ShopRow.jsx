import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ShopRow = () => {
  const items = ['Boots', 'Snowboards', 'Outerwear', 'Bindings'];
  const itemRefs = useRef([]);
  itemRefs.current = new Array(items.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-fade-in-right');
          }
        });
      },
      {
        root: null,
        rootMargin: '-100px',
        threshold: 0.1
      }
    );

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Row>
      {items.map((item, index) => (
        <Col key={index} xs={6} md={3} style={{opacity: '0'}} ref={(el) => itemRefs.current[index] = el}>
          <Link to={`/filter/${item}`}>
            <div className="image-container product-card shop">
              <img src={`/images/${item}.jpg`} alt={item} className="img-fluid square" />
              <p className="image-text">Shop {item}</p>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ShopRow;