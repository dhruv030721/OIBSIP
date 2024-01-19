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

    async addOrder({orderId,name,orderItem,amount,date,time}){
        try {

            const body = {orderId,name,orderItem,amount,date,time};

            const response = await axios.post('/api/v1/addOrder',body)

            return {message : response.data.message}

        } catch (error) {
            throw error;
        }
    }
}

const productService = new ProductService();

export default productService;