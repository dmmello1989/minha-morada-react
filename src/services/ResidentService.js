import axios from "axios";

const RESIDENT_API_URL = "http://localhost:8080/moradores/"

class ResidentService {

  getResidents() {
    return axios.get(RESIDENT_API_URL);
  };
  
  getResident(id) {
    return axios.get(`${RESIDENT_API_URL}/${id}`);
  };

  createResident(body) {
    return axios.post(RESIDENT_API_URL, body);
  };

  editResident(id, body) {
    return axios.put(`${RESIDENT_API_URL}/${id}`, body);
  };

  deleteResident(id) {
    return axios.delete(`${RESIDENT_API_URL}/${id}`);
  };
};

export default new ResidentService();