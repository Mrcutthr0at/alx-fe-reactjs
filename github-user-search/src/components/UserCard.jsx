import React from "react";

function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px" }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        width={100}
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.login}</h2>
      <p>{user.name || "No name provided"}</p>
      <p>{user.bio || "No bio available"}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;