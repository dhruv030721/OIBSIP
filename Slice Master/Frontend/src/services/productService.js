import axios from 'axios';

export class ProductService {
    async GetItem() {
        try {
            const response = await axios.get('/api/v1/getitems')

            return { message: response.data.message, data: response.data.items }
        } catch (error) {
            throw error;
        }
    }

    

    async GetIngredients() {
        try {

            const response = await axios.get('/api/v1/getingredients')

            return { message: response.data.message, data: response.data.ingredients }


        } catch (error) {
            throw error;
        }
    }

}

const productService = new ProductService();

export default productService;