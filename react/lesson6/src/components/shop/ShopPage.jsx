import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import ShopCard from './ShopCard';
import classes from './ShopPage.module.css'
import Spinner from 'react-bootstrap/Spinner';

const ShopPage = () => {
    const [products, setProducts] = useState([])
    const [productsLoading, setProductsLoading] = useState(false)

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

    console.log(products);

    if (productsLoading) {
        return (
            <div className={classes.spinnerContainer}>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <h1>Все Товары:</h1>
            <div className={classes.productsGrid}>
                {products.map(product =>
                    <ShopCard id={product.id} title={product.title} category={product.category} description={product.description} imageSrc={product.image} price={product.price} />
                )}
            </div>
        </div>
    );
}

export default ShopPage;
