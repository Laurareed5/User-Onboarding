import React from "react";

const UsersList = (props) => {
  const { users } = props;
  return (
    <div>
      <h2>Our Top Users</h2>
      <ul>
        {users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
