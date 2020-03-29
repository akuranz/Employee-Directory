import axios from "axios";

export default {
  getEmpProfiles: function(searchParam) {
    return axios.get("http://faker.hook.io?property=" + searchParam);
  }
};
