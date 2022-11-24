import React, { Fragment, useState } from "react";

const EditTeam = ({ team }) => {
  const [name, setName] = useState(team.name);
  const [played, setPlayed] = useState(team.played);
  const [goal_difference, setGoalDifference] = useState(team.goal_difference);
  const [points, setPoints] = useState(team.points);

  //edit name function

  const updateTeam = async e => {
    e.preventDefault();
    try {
      const body = { name, played, goal_difference, points };
      const response = await fetch(
        `http://localhost:8081/v1/teams/${team.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${team.id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${team.id}`}
        onClick={() => setName(team.name)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Team</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(team.name)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
            <h6 className="modal-title text-left">Team Name</h6>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <h6 className="modal-title text-left">Played matches</h6>
              <input
                type="text"
                className="form-control mt-2"
                value={played}
                onChange={e => setPlayed(e.target.value)}
              />
          
              <h6 className="modal-title text-left">Goal difference</h6>
              <input
                type="text"
                className="form-control mt-2"
                value={goal_difference}
                onChange={e => setGoalDifference(e.target.value)}
              />

              <h6 className="modal-title text-left">Points</h6>
              <input
                type="text"
                className="form-control mt-2"
                value={points}
                onChange={e => setPoints(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateTeam(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setName(team.name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTeam;
