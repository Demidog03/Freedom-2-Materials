import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import classes from './ShopPage.module.css'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { getCategoriesThunk, getProductsThunk, getProductsByCategoryThunk } from '../../store/thunks/productsThunk';
import { useAppDispatch, useAppSelector } from '../../main';

const ShopPage = () => {
    const dispatch = useAppDispatch()
    const { products, productsLoading, categories, selectedCategory } = useAppSelector(state => state.products)

    // mount - первый рендер
    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    async function getProducts() {
        dispatch(getProductsThunk())
    }

    function logout() {
        dispatch({ type: 'auth/logout' })
    }

    async function getCategories() {
        dispatch(getCategoriesThunk())
    }

    async function getProductsByCategory(category: string) {
        dispatch(getProductsByCategoryThunk(category))
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
            {categories.length > 0 && (
                <DropdownButton id="dropdown-item-button" title={selectedCategory} style={{ marginBottom: 20 }}>
                    {categories.map(category => (
                        <Dropdown.Item as="button" onClick={() => getProductsByCategory(category)}>{category}</Dropdown.Item>
                    ))}
                </DropdownButton>
            )}
            <div className={classes.productsGrid}>
                {products.map(product =>
                    <ShopCard id={product.id} title={product.title} category={product.category} description={product.description} imageSrc={product.image} price={product.price} />
                )}
            </div>
        </div>
    );
}

export default ShopPage;
