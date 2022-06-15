import React from "react";
import useFetch from "../../utils/hooks/useFetch";
import "./Card.scss";

export default function Card({ id }) {
  const { data, loading, error } = useFetch(
    `https://reqres.in/api/users/${id}`
  );
  const user = data?.data;

  return (
    <div className="card">
      {loading && (
        <div className="loading">
          Loading <span>.</span> <span>.</span> <span>.</span> <span>.</span>
        </div>
      )}
      {!loading && (
        <>
          <div className="profile_container">
            <img
              src={user?.avatar}
              alt=""
              style={{ height: "120px", width: "120px", borderRadius: "25%" }}
            />
          </div>
          <div className="user_info">
            <div className="username">{`${
              user?.first_name ? user?.first_name : "User"
            } ${user?.last_name ? user?.last_name : "Name"}`}</div>
            <div className="email">
              {user?.email ? user?.email : "user@gmail.com"}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
