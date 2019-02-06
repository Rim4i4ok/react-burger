import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        
        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Rim',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '2345',
                    country: 'Japan'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,                    
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false,                    
                });
            });
    }

    render () {

        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your name" />
                <input type="text" className={classes.Input} name="email" placeholder="Your email" />
                <input type="text" className={classes.Input} name="street" placeholder="Your street" />
                <input type="text" className={classes.Input} name="postal" placeholder="Postal Code" />
                <Button 
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;