import React, { Fragment, useState } from "react";

const InputTeam = () => {
  const [name, setName] = useState("");
  const [played, setPlayed] = useState("");
  const [goal_difference, setGoalDifference] = useState("");
  const [points, setPoints] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name,played,goal_difference,points};
      const response = await fetch("http://localhost:8081/v1/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Premier Soccer League 2021/2022</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control m-2"
          required
          value={name}
          placeholder="Team Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control m-2"
          required
          value={played}
          placeholder="Played games"
          onChange={e => setPlayed(e.target.value)}
        />
        <input
          type="number"
          className="form-control m-2"
          required
          value={goal_difference}
          placeholder="Goal Difference"
          onChange={e => setGoalDifference(e.target.value)}
        />
        <input
          type="number"
          className="form-control m-2"
          required
          value={points}
          placeholder="Points"
          onChange={e => setPoints(e.target.value)}
        />

        <button className="btn btn-success ml-2">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTeam;
