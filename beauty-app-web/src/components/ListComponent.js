import React, { Component } from 'react'
import ProductDataService from '../api/ProductDataService'
import AuthenticationService from './AuthenticationService';
import axios from 'axios'


class ListComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            products: [],
            message: null         
        }
    }

    refreshProducts = () => {
        let username = AuthenticationService.getLoggedInUsername()

        // ProductDataService.retrieveAllProducts(username)

        axios.get(`http://localhost:8080/users/${username}/products`)
            .then(res => {this.setState({products: res.data})})
    }

    componentDidMount() {
        this.refreshProducts()
    }

    deleteProductClicked = id => {
        let username = AuthenticationService.getLoggedInUsername()
        // ProductDataService.deleteProduct(username, id)

        axios.delete(`http://localhost:8080/users/${username}/products/${id}`)
            .then(res => {
                this.setState({message: `Delete of Product is Successful`})
                this.refreshProducts()
            })
    }

    updateProductClicked = id => {
        // console.log('update')
        let username = AuthenticationService.getLoggedInUsername()
        // ProductDataService.deleteProduct(username, id)

        // after update is clicked, go to this page
        this.props.history.push(`/users/${username}/products/${id}`)
    }

    addProductClicked = () => {
        // console.log('add')
        let username = AuthenticationService.getLoggedInUsername()
        this.props.history.push(`/users/${username}/products/-1`)
    }


    render() {
        return (
        <div className="username">
            {/* <div>Welcome, {this.props.match.params.username}</div> */}
            <div className="alert alert-success">{this.state.message}</div>

            <div className="container">
                <h2>Skincare</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Comment</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.comment}</td>
                                <td><button
                                    className="btn btn-successful"
                                    onClick={() => this.updateProductClicked(product.id)}>Update</button></td>
                                <td><button 
                                    className="btn btn-warning"
                                    onClick={() => this.deleteProductClicked(product.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="row">
                    <button className="btn btn-success" onClick={this.addProductClicked}>Add</button>

                </div>
            </div>
            

            {/* form */}
            {/* <div>
                <form className="form">
                    <input 
                    type="text" 
                    placeholder="Enter product name" 
                    value={this.state.products.name} 
                    onChange={this.handleInput}/>

                    <select 
                    value={this.state.products.category} 
                    onChange={this.handleSubmit}>
                        <option>Add to category</option>
                        <option value="skincare">Skin Care</option>
                        <option value="makeup">Makeup</option>
                        <option value="bodycare">Body Care</option>
                        <option value="beautytool">Beauty Tool</option>
                    </select>
                </form>
            </div> */}

            {/* <TagComponent/> */}

        </div>
        // matching <Route path="/welcome/:name" component={WelcomeComponent}/>, so that the name show up in url also shows up on page.
        )
    }
}

export default ListComponent