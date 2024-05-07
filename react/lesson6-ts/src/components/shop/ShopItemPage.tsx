import React, { useEffect } from 'react';
import classes from './ShopPage.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import ShopCard from './ShopCard';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../store/thunks/productsThunk';

const ShopItemPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedProduct, selectedProductLoading } = useSelector(state => state.products)

    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        dispatch(getProductThunk(params.id))
    }

    function navigateToShop() {
        navigate('/shop')
    }

    if (selectedProductLoading) {
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
            {selectedProduct
                ? <ShopCard id={selectedProduct.id} title={selectedProduct.title} category={selectedProduct.category} description={selectedProduct.description} imageSrc={selectedProduct.image} price={selectedProduct.price} />
                : <h2>Товар не найдет</h2>
            }
        </div>
    );
}

export default ShopItemPage;
