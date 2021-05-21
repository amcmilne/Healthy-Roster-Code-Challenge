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
  const [organization, setOrganizations] = useState([]);
  const [team, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState("");

  //inital page load using the provided HealthCareProviderID to access Organizations
  const loadInitPageData = async () => {
    getOrganizations(healthCareProviderID)
      .then((orgs) => {
        setOrganizations(orgs);
        setLoading(false);
      })
      .catch(console.error);
  };

  useEffect(() => {
    loadInitPageData();
  }, []);

  // handle change event of the organization
  const handleOrganizationChange = (panel) => (event, newExpanded) => {
    getTeams(panel)
      .then((teams) => {
        setTeams(teams);
      })
      .catch(console.error);
    setExpanded(newExpanded ? panel : false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="blur-xl text-3xl text-center mt-4 mb-2 pt-2 pb-4 w-2/5 mx-auto rounded-b-lg text-gray-600 shadow-lg bg-gray-200">
        <h1>Organizations:</h1>
        <h3 className="text-sm">Please select for list of available teams.</h3>
      </div>
      <div className="py-4 px-4 w-1/2 shadow-xl mx-auto my-auto mt-4 mb-10">
        {organization.map((orgs) => {
          return (
            <Accordion
              square
              expanded={expanded === orgs.Id}
              onChange={handleOrganizationChange(orgs.Id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={"panel1a-header-" + orgs.Id}
              >
                <Typography className=" text-yellow-600">
                  {orgs.OrganizationName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className=" text-gray-500 text-left">
                  {team.length
                    ? team.map((orgTeams) => {
                        return (
                          <>
                            {orgTeams.Name}
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
