import axios from 'axios';

export class AdminService {
  async AddItem({ itemname, img, description, istrending, category , regularprice, medimumprice, largeprice }) {
    try {

      const formData = new FormData();
      formData.append('name', itemname);
      formData.append('files', img[0]);
      formData.append('description', description);
      formData.append('isTrending', istrending);
      formData.append('category', category);
      formData.append('regular',regularprice)
      formData.append('medium',medimumprice)
      formData.append('large',largeprice)

      const response = await axios.post('/api/v1/additem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return { message: response.data.message }
    } catch (error) {
      throw error;
    }
  }

  async AddIngredients({ name, quantity, price, category }) {
    try {

      const body = {
        name,
        quantity,
        price,
        category
      };


      const response = await axios.post('/api/v1/addingredientitem', body)

      return { message: response.data.message }

    } catch (error) {
      throw error;
    }
  }


}

const adminService = new AdminService();

export default adminService;
