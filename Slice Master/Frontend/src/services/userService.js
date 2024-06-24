/* eslint-disable no-useless-catch */
import axios from 'axios'
import config from "../../config/config.js"

export class UserService {

    async forgotPassword({ email }) {
        try {

            const body = { email }

            const response = await axios.post(config.backendUrl + '/api/v1/forgotpassword', body)

            return { message: response.data.message }


        } catch (error) {
            throw error;
        }
    }

    async otpVerification(data, email) {
        try {
            const body = {
                email,
                otp: data.otp
            }

            console.log(body)

            const response = await axios.post(config.backendUrl + '/api/v1/otpverification', body)

            return { message: response.data.message }
        } catch (error) {
            throw error;
        }
    }

    async passwordChange({ password }, email) {
        try {
            const body = {
                email,
                password
            }

            const response = await axios.post(config.backendUrl + '/api/v1/updatePassword', body)

            return { message: response.data.message }

        } catch (error) {
            throw error;
        }
    }

    async contactUs(data) {
        try {

            const body = {
                name: data.name,
                email: data.email,
                message: data.message
            }

            const response = await axios.post(config.backendUrl + "/api/v1/contactus", body);

            return { message: response.data.message }


        } catch (error) {
            throw error;
        }
    }

}


const userService = new UserService();

export default userService;