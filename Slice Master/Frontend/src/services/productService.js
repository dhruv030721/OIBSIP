/* eslint-disable no-useless-catch */
import axios from 'axios';
import config from "../../config/config.js"

export class ProductService {
    async GetItem() {
        try {
            const response = await axios.get(config.backendUrl + '/api/v1/getitems')

            return { message: response.data.message, data: response.data.items }
        } catch (error) {
            throw error;
        }
    }



    async GetIngredients() {
        try {

            const response = await axios.get(config.backendUrl + '/api/v1/getingredients')

            return { message: response.data.message, data: response.data.ingredients }


        } catch (error) {
            throw error;
        }
    }

    async addOrder({ orderId, name, orderItem, amount, date, time }) {
        try {

            const body = { orderId, name, orderItem, amount, date, time };

            const response = await axios.post(config.backendUrl + '/api/v1/addOrder', body)

            return { message: response.data.message }

        } catch (error) {
            throw error;
        }
    }

    async GetOneItem(id) {
        try {

            const response = await axios.get(config.backendUrl + `/api/v1/getoneitem/${id}`);

            return { data: response.data.item }

        } catch (error) {
            throw error;
        }
    }

}

const productService = new ProductService();

export default productService;