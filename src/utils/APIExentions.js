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

export const POST = (pathRouting) => {
  const postResponse = "not yet implemented";
  return postResponse; 
};

export const PUT = (pathRouting) => {
  const putResponse = "not yet implemented";
  return putResponse; 
};

export const DELETE = (pathRouting) => {
  const deleteResponse = "not yet implemented";
  return deleteResponse; 
};