import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getProductos() {
        return apiClient.get('/api/lista');
    },
    setProducto(producto) {
        return apiClient.post('/api/producto',producto)
    },
    deleteProducto(codigo) {
        return apiClient.delete('/api/producto', {codigo: codigo})
    },
    putProducto(producto) {
        return apiClient.put('/api/producto',producto);
    }
}