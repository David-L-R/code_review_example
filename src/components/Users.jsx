import { users } from "../data/users.json";
const Users = () => {
  return (
    <>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </>
  );
};
