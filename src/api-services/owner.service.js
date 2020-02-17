import Axios from 'axios';
 
const RESOURCE_NAME = '/owner';
const acceptHeader = {
  headers: {Accept: 'application/json'}
}
 
export default {
  getAll() {
    return Axios.get(RESOURCE_NAME, acceptHeader);
  },
 
  get(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`, acceptHeader);
  },
 
  create(data) {
    return Axios.post(RESOURCE_NAME, data, acceptHeader);
  },
 
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data, acceptHeader);
  },
 
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`, acceptHeader);
  },
 
  getAccounts(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}/account`, acceptHeader);
  }
};