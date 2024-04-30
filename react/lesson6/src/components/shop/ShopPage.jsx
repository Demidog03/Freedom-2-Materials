import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import ShopCard from './ShopCard';
import classes from './ShopPage.module.css'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux';

const ShopPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [productsLoading, setProductsLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Категории')
    const dispatch = useDispatch()

    // mount - первый рендер
    useEffect(() => {
        getProducts()
        getCategories()
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
        dispatch({ type: 'auth/logout' })
    }

    async function getCategories() {
        try {
            const res = await axios.get('https://fakestoreapi.com/products/categories')
            setCategories(res.data)
        } catch {

        } finally {

        }
    }

    async function getProductsByCategory(category) {
        setSelectedCategory(category)
        try {
            setProductsLoading(true)
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            setProducts(res.data)
        } catch (err) {
            console.log(err);
        }
        finally {
            setProductsLoading(false)
        }
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
