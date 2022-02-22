import useSWR from "swr";
import AdminUserSiteLayout from "../../../components/layouts/SiteLayouts/adminUserSiteLayout";
import CreateUser from "../../../components/users/createUser";
import UserList from "../../../components/users/userList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UsersHome() {
  const { data, error } = useSWR("/api/fetchPractitioners", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  //create user
  //edit user
  //delete user
  return (
    <div>
      <CreateUser />
      <UserList practitioners={data.practitioners} />
      {/* {data.practitioners.map((user) => {
        return <>{user.emailAddress}</>;
      })} */}
    </div>
  );
}

UsersHome.getLayout = function getLayout(page) {
  return <AdminUserSiteLayout>{page}</AdminUserSiteLayout>;
};
