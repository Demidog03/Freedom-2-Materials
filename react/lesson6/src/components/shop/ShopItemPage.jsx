import React, { useState, useEffect } from 'react';
import classes from './ShopPage.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ShopCard from './ShopCard';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button';

const ShopItemPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [productLoading, setProductLoading] = useState(false)

    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        try {
            setProductLoading(true)
            const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            setProduct(res.data)
        } catch (err) {
            console.log(err);
        }
        finally {
            setProductLoading(false)
        }
    }

    function navigateToShop() {
        navigate('/shop')
    }

    if (productLoading) {
        return (
            <div className={classes.spinnerContainer}>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <Button variant="link" onClick={navigateToShop}>Вернуться</Button>
            <h1>Товар с id: {params.id}</h1>
            {product
                ? <ShopCard id={product.id} title={product.title} category={product.category} description={product.description} imageSrc={product.image} price={product.price} />
                : <h2>Товар не найдет</h2>
            }
        </div>
    );
}

export default ShopItemPage;
