import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductCard from '../component/card';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)  

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
       console.log("products",response.data)
      setProducts(response.data)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setError(error)
      setLoading(false)
    })
   }


  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4 mb-4'>
    
  {loading ? <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
    <Spinner animation="border" role="status" style={{ width: '4rem', height: '4rem' }}>
      <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div> : 
     products.map((item) => ( 
  <ProductCard product={item} showActions={true}   />
   ))}
    </div>
  )
}

export default Home