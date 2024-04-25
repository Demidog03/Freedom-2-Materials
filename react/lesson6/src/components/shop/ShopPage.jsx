import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import ShopCard from './ShopCard';
import classes from './ShopPage.module.css'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../contexts/AuthContext';

const ShopPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [productsLoading, setProductsLoading] = useState(false)
    const { setIsLoggedIn } = useContext(AuthContext)

    // mount - первый рендер
    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {
            setProductsLoading(true)
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts(res.data)
        } catch (err) {
            console.log(err);
        }
        finally {
            setProductsLoading(false)
        }
    }

    function logout() {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    if (productsLoading) {
        return (
            <div className={classes.spinnerContainer}>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>Все Товары:</h1>
                <Button variant="danger" onClick={logout}>Выйти</Button>
            </div>
            <div className={classes.productsGrid}>
                {products.map(product =>
                    <ShopCard id={product.id} title={product.title} category={product.category} description={product.description} imageSrc={product.image} price={product.price} />
                )}
            </div>
        </div>
    );
}

export default ShopPage;
