
import axios from 'axios'

class ProductDataService {

    retrieveAllProducts(username) {
        return axios.get(`http://localhost:8080/users/${username}/products`)
    }

    deleteProduct(username, id) {
        return axios.delete(`http://localhost:8080/users/${username}/products/${id}`)
    }

    // in API, this is findById()
    retrieveProduct(username, id) {
        return axios.get(`http://localhost:8080/users/${username}/products/${id}`)
    }


    // parameters include a product object which contains the information of the newly updated product, giving you the values of what needs to be updated.
    updateProduct(username, id, product) {
        return axios.put(`http://localhost:8080/users/${username}/products/${id}`, product)
    }

    createProduct(username, product) {
        return axios.post(`http://localhost:8080/users/${username}/products`, product)
    }
}

export default new ProductDataService