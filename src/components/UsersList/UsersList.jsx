import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../redux/actions/users.action";
import Card from "../Card/Card";
import "./UsersList.scss";

export default function UsersList() {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users?.data);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      dispatch(getUsersList(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="loading">
          Loading <span>.</span> <span>.</span> <span>.</span> <span>.</span>
        </div>
      )}
      {!loading && (
        <>
          <Card id={id} />
          <div className="btnCollection">
            {data.map((value, idx) => (
              <button key={idx} className="btn" onClick={() => setId(idx + 1)}>
                {idx + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
