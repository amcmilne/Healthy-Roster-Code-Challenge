import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { getTeams, getOrganizations } from "../utils/Common.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const healthCareProviderID = "128283A0-6BE9-4B48-AD67-452645871FB6";

export default function Organizations() {
  const [componentLoading, setLoading] = useState(true);
  const [organization, setOrganizations] = useState([]);
  const [team, setTeams] = useState([]);
  const [orgID, setOrgID] = useState("");
  const [expanded, setExpanded] = useState("");

  //inital page load using the provided HealthCareProviderID to access Organizations
  const loadOrganizations = async () => {
    getOrganizations(healthCareProviderID)
      .then((orgs) => {
        setOrganizations(orgs);
        setLoading(false);
      })
      .catch(console.error);
  };

  // handle change event of the organization
  const handleOrganizationChange = (organizationID) => (event, newExpanded) => {
    // update the organization
    setOrgID(organizationID);

    // expand the panel
    setExpanded(newExpanded ? organizationID : false);
  };

  useEffect(() => {
    loadOrganizations();
  }, [healthCareProviderID]);

  // monitor the organization id for changes. when it's modified, get the teams for that organization.
  useEffect(() => {
    setTeams([{ Name: "...Fetching teams..." }]);
    getTeams(orgID)
      .then((teams) => {
        setTeams(teams);
      })
      .catch(console.error);
  }, [orgID]);

  if (componentLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="mt-4 mb-2 pt-2 pb-4 w-1/3 mx-auto rounded-b-lg text-gray-600 shadow-lg bg-gray-200">
        <h1 className="md:text-3xl text-2x1">Organizations:</h1>
        <h3 className="text-sm">Please select for list of available teams.</h3>
      </div>
      <div className="py-4 px-4 w-1/2 shadow-xl mx-auto my-auto mt-4 mb-10">
        {organization.map((orgs) => {
          return (
            <Accordion
              rounded
              expanded={expanded === orgs.Id}
              onChange={handleOrganizationChange(orgs.Id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={"panel1a-header-" + orgs.Id}
              >
                <Typography variant="subtitle1" className=" text-yellow-600">
                  {orgs.OrganizationName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption" className=" text-gray-500 text-left">
                  {team.length
                    ? team.map((orgTeams) => {
                        return (
                          <>
                            <li>{orgTeams.Name}</li>
                            <br />
                          </>
                        );
                      })
                    : "No Teams Available"}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}
