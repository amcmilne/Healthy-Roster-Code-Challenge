import { GET } from "../utils/APIExentions.js";

export const getOrganizations = async (healthCareProviderID) => {
    let rtnData = [];
  
    try {
      await GET(`HealthcareProviders/${healthCareProviderID}/Organizations`)
        .then((responsedata) => {
          rtnData = responsedata.data.Data;
        })
        .catch(console.error);
    } catch (error) {
      console.log("Error: " + error);
    }
    
    return rtnData;
  };

export const getTeams = async (orgID) => {
  let rtnData = [];
  try {
    await GET(`Organizations/${orgID}/Teams/Search`)
      .then((responsedata) => {
        rtnData = responsedata.data.Data.Results;
      })
      .catch(console.error);
  } catch (error) {
    console.log("Error: " + error);
  }
  return rtnData;
};