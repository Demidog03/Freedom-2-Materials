import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import classes from './ShopPage.module.css'
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ id, imageSrc, category, title, description, price }) => {
    const navigate = useNavigate()
    function navigateToProductPage() {
        navigate(`/shop/${id}`)
    }
    return (
        <Card>
            <Card.Img variant="top" src={imageSrc} height={171} style={{ objectFit: 'contain' }} />
            <Card.Body className={classes.cardBody}>
                <Badge style={{ marginBottom: '10px' }} bg="info">{category}</Badge>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0, 120)}...
                </Card.Text>
                <p>Цена: <b>{price}$</b></p>
                <Button style={{ marginTop: 'auto' }} variant="primary" onClick={navigateToProductPage}>Посмотреть</Button>
            </Card.Body>
        </Card>
    );
}

export default ShopCard;
