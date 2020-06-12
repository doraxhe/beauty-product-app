import React, {Component} from 'react'
import { Formik, Form, Field } from 'formik'
import ProductDataService from '../api/ProductDataService'
import AuthenticationService from './AuthenticationService'
import axios from 'axios'

class ProductComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            price: '',
            description: '',
            comment: ''
        }
    }

    // values represents the modified/to-be-submitted information
    handleSave = () => {
        
        let username = AuthenticationService.getLoggedInUsername()

        let product = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            comment: this.state.comment
        }

        if(this.state.id === -1) {
            ProductDataService.createProduct(username, product)
                .then(() => this.props.history.push(`/users/${username}/products`))
        }
        else {
            ProductDataService.updateProduct(username, this.state.id, product)
                // by clicking submit/save, the product gets updated (in above part), and then page will be redirected to /products (in following part)
                .then(() => this.props.history.push(`/users/${username}/products`))
        }       
    }

    handleCancel = e => {
        let username = AuthenticationService.getLoggedInUsername()

        e.preventDefault();

        this.setState({
            name: '',
            amount: '',
            category: '',
            description: ''
        })

        this.props.history.push(`/users/${username}/products`)
    }

    // validate

    componentDidMount() {

        if(this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUsername()
        
        // retrieve info of to-be-updated product and put these original info into edit box
        ProductDataService.retrieveProduct(username, this.state.id)
            .then(res => this.setState({
                name: res.data.name,
                price: res.data.price,
                description: res.data.description,
                comment: res.data.comment
            }))
    }

    handleEdit = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // destructuring: let name = this.state.name   etc
        // let {name, price, description, comment} = this.state

        return (
            <div>
                <h3>Update a Product</h3>
                <div>
                    <form onSubmit={this.handleSave}>
                        <label>Name
                            <input type="text" value={this.state.name} name="name" onChange={this.handleEdit} />
                        </label>
                        <br/>
                        <label>Price
                            <input type="text" value={this.state.price} name="price" onChange={this.handleEdit} />
                        </label>
                        <br/>
                        <label>Description
                            <input type="text" value={this.state.description} name="description" onChange={this.handleEdit} />
                        </label>
                        <br/>
                        <label>Comment
                            <input type="text" value={this.state.comment} name="comment" onChange={this.handleEdit} />
                        </label>
                    </form>

                    <button type="submit" className="btn btn-success" onClick = {this.handleSave}>Save</button>
                    <button type="submit" className="btn btn-success" onClick = {this.handleCancel}>Cancel</button>
                </div>
            </div>
        )


         
        // return (
        //     <div>
        //         <h3>Update a Product</h3>
        //         <div className="container">
        //             <Formik 
        //                 initialValues = {{name, price, description, comment}}
        //                 onSubmit = {this.handleSubmit}
        //                 enableReinitialize = {true} // keeps initial values in textbox
        //                 // validate = {this.validate}
        //             >
        //             {/* initialValues = {{ }}, outside {} means this is a javascript code, inside {} means I want to create objects in it
                        
        //             initialValues = {{name, price, description, comment}} is equal to following bcs key and value are the same word
        //                 {{name: name,
        //                 price: price,
        //                 description: description,
        //                 comment: comment}} */}
                    
        //                 {(props) => {
        //                         return (
        //                             <div>
        //                                 <Form>
        //                                     <fieldset className="form-group">
        //                                         <label>Name</label>
        //                                         <Field className="form-control" type="text" name="name" />
        //                                     </fieldset>
        //                                     <fieldset className="form-group">
        //                                         <label>Price</label>
        //                                         <Field className="form-control" type="text" name="price" />
        //                                     </fieldset>
        //                                     <fieldset className="form-group">
        //                                         <label>Description</label>
        //                                         <Field className="form-control" type="text" name="description" />
        //                                     </fieldset>
        //                                     <fieldset className="form-group">
        //                                         <label>Comment</label>
        //                                         <Field className="form-control" type="textf" name="comment" />
        //                                     </fieldset>
        //                                 </Form>

        //                                 <button type="submit" className="btn btn-success" onClick = {this.handleSubmit}>Save</button>
        //                             </div>
        //                         )
        //                 }}
        //             </Formik>
        //         </div>
        //     </div>            
        // )
    }
}

export default ProductComponent