import axios from "axios";

export default {
  getEmpProfiles: () =>
    axios.get("https://randomuser.me/api/?results=20&nat=us")
};
