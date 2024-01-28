import axios from 'axios';

export class AdminService {
  async AddItem({ itemname, description, istrending, category, regularprice, medimumprice, largeprice }, Img) {
    try {

      const formData = new FormData();
      formData.append('name', itemname);
      formData.append('files', Img);
      formData.append('description', description);
      formData.append('isTrending', istrending);
      formData.append('category', category);
      formData.append('regular', regularprice)
      formData.append('medium', medimumprice)
      formData.append('large', largeprice)

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

  async GetOrder() {
    try {

      const response = await axios.get('/api/v1/getorders')

      return { data: response.data.orders }

    } catch (error) {
      throw error;
    }
  }


  async EditItem({ itemname, description, istrending, category, regularprice, medimumprice, largeprice }, Img, id) {
    try {

      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', itemname);
      formData.append('files', Img);
      formData.append('description', description);
      formData.append('isTrending', istrending);
      formData.append('category', category);
      formData.append('regular', regularprice);
      formData.append('medium', medimumprice);
      formData.append('large', largeprice);

      const response = await axios.post('/api/v1/edititem', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      return { message: response.data.message }

    } catch (error) {
      throw error;
    }
  }


  async DeleteItem(id) {
    try {

      const response = await axios.delete(`/api/v1/deleteitem/${id}`)

      return { message: response.data.message }


    } catch (error) {
      throw error;
    }
  }

  async EditIngredient(id, { quantity }) {
    try {

      const body = {
        id: id,
        quantity: quantity
      }

      const response = await axios.post('/api/v1/editingredient', body)

      return { message: response.data.message }

    } catch (error) {
      throw error;
    }
  }

  async ChangeOrderStatus(id, statusValue){
    try {
      const body = {
        id  : id,
        status : statusValue
      }

      const response = await axios.post('/api/v1/changeorderstatus', body)

      console.log(response)

      return {message : response.data.message}

    } catch (error) {
      throw error;
    }
  }

}

const adminService = new AdminService();

export default adminService;
