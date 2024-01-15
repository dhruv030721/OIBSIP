import axios from 'axios';

export class ProductService {
    async getitem() {
        try {
            const response = await axios.get('/api/v1/getitems')

            // console.log(response)

            return { message: response.data.message, data: response.data.items }
        } catch (error) {
            throw error;
        }
    }
}

const productService = new ProductService();

export default productService;