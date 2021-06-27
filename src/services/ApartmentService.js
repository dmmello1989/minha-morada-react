import axios from "axios";

const APARTMENT_API_URL = "http://localhost:8080/apartamentos/"

class ApartmentService {
  
  getApartments() {
    return axios.get(APARTMENT_API_URL);
  };

  getApartment(id) {
    return axios.get(`${APARTMENT_API_URL}/${id}`);
  };

  createApartment(body) {
    return axios.post(APARTMENT_API_URL, body);
  };

  editApartment(id, body) {
    return axios.put(`${APARTMENT_API_URL}/${id}`, body);
  };

  deleteApartment(id) {
    return axios.delete(`${APARTMENT_API_URL}/${id}`);
  };
};

export default new ApartmentService();