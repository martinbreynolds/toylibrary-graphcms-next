const UserList = ({ practitioners }) => {
  return (
    <>
      {practitioners.map((user) => {
        return <>{user.emailAddress}</>;
      })}
    </>
  );
};

export default UserList;
