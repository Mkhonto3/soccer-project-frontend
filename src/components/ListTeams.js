import React, { Fragment, useEffect, useState } from "react";

import EditTeam from "./EditTeam";

const ListTeams = () => {
  const [teams, setTeams] = useState([]);
  let arr = [];
  //delete team function

  const deleteTeam = async id => {
    try {
      const deleteTeam = await fetch(`http://localhost:8081/v1/teams/${id}`, {
        method: "DELETE"
      });

      setTeams(teams.filter(team => team.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTeam = async id => {
    try {
      const getTeam = await fetch(`http://localhost:8081/v1/teams/${id}`, {
        method: "GET"
      });

      setTeams(teams.filter(team => team.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  const getTeams = async () => {
    try {
      const response = await fetch("http://localhost:8081/v1/teams");
      const jsonData = await response.json();

      console.log(jsonData)

      setTeams(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  console.log(teams);

  teams.map(team => (
      arr = new Date(team.updatedAt).toLocaleDateString()
  ));

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>PL</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {teams.map(team => (
            
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.goal_difference}</td>
              <td>{team.points}</td>
              <td className="text-right">
                <EditTeam team={team} />
              </td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deleteTeam(team.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      
      Last Updated {arr}   
    </Fragment>
  );

  
};

export default ListTeams;
