import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxc/Auxc';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount () {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });

                return request;
            });
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error: error
                });  
                
                console.log(error);
            });
        }

        componentWillUnmount () {
            // console.log('Will Unmount', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedError = () =>{
            this.setState({
                error: null
            });
        }

        render () {
            return (
                <Aux>
                    <Modal
                        modalClosed={this.errorConfirmedError} 
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>      
            );
        }
    }
}

export default withErrorHandler;