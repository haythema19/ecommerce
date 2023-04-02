import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getEnqiries = async () => {
  const response = await axios.get(`${base_url}enquiry/`);

  return response.data;
};

const enquiryService = {
  getEnqiries,
};

export default enquiryService;
