import axios from 'axios'

export class AuthService {

    async Login({ email, password }) {
        try {

            const body = {
                email,
                password,
            }

            const response = await axios.post(`/api/v1/login`, body);

            return { data: response.data.user, message: response.data.message, success: true };

        } catch (error) {
            throw error;
        }
    }


    async Signup({ name, password, email, contactNumber, role = 'User' }) {
        try {

            const body = {
                name,
                email,
                password,
                contactNumber,
                role,
            }

            const response = await axios.post('/api/v1/signup', body);

            return { data: response.data.user, message: response.data.message, success: true }

        } catch (error) {
            throw error;
        }
    }


    async AdminAuth({ email, password }) {
        try {
            const body = {
                email,
                password
            }

            const response = await axios.post('/api/v1/admin/auth', body);


            return { data: response.data.user, message: response.data.message }

        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService();


export default authService;