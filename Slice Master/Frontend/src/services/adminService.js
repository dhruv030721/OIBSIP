import axios from 'axios';

export class AdminService {
  async AddItem({ itemname, price, img, description, istrending }) {
    try {

      console.log(img);
      const formData = new FormData();
      formData.append('name', itemname);
      formData.append('price', price);
      formData.append('files', img[0]);
      formData.append('description', description);
      formData.append('isTrending', istrending);

      console.log(formData);

      const response = await axios.post('/api/v1/additem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return {message : response.data.message}
    } catch (error) {
      throw error;
    }
  }
}

const adminService = new AdminService();

export default adminService;
