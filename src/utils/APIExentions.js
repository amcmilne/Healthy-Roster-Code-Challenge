import axios from "axios";

const {
  REACT_APP_APPLICATION_ID,
  REACT_APP_APPLICATION_SECRET,
  REACT_APP_BASE_URL,
} = process.env;

export const GET = (pathRouting) => {
  const getResponse = axios.get(`${REACT_APP_BASE_URL}/${pathRouting}`, {
    headers: {
      ApplicationId: REACT_APP_APPLICATION_ID,
      ApplicationSecret: REACT_APP_APPLICATION_SECRET,
    },
  });
  return getResponse;
};
