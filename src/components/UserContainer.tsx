import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../features/user/userSlice";

const UserContainer = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(user.user);

  return (
    <div>
      <h1>Users</h1>
      {/* {user.loading && <div>Loading.....</div>} */}
      {/* {!user.loading && user.error ? <div> Error : {user.error}</div> : null} */}
      {/* {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null} */}
      {/* {!user.loading &&
        user.user.map((data) => (
          <div key={data.name}>
            <div>{data.name}</div>
          </div>
        ))} */}

      {user.user.map((data) => (
        <div key={data.id}>
          <div>{data.name}</div>
          <div>{data.email}</div>
        </div>
      ))}
    </div>
  );
};

export default UserContainer;
