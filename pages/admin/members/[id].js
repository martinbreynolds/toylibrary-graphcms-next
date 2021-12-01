import useSWR from "swr";
import AdminSiteLayout from "../../../components/layouts/SiteLayouts/adminSiteLayout";
import MemberCard from "../../../components/members/memberCard";

export const getServerSideProps = async (pageContext) => {
  const pageID = pageContext.query.id;

  return {
    props: {
      pageID,
    },
  };
};

async function fetcher(url, pageID) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageID,
    }),
  });
  return res.json();
}

const Member = ({ pageID }) => {
  const { data, error } = useSWR(["/api/fetchMember", pageID], { fetcher });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const member = data.member;

  return <MemberCard member={member} />;
};

export default Member;

Member.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
