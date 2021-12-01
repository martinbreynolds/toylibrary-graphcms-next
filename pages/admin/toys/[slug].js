import useSWR from "swr";
import AdminSiteLayout from "../../../components/layouts/SiteLayouts/adminSiteLayout";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  return {
    props: {
      pageSlug,
    },
  };
};

async function fetcher(url, pageSlug) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageSlug,
    }),
  });
  return res.json();
}

const Toy = ({ pageSlug }) => {
  const { data, error } = useSWR(["/api/fetchToy", pageSlug], { fetcher });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const toy = data.toy;

  return (
    <div>
      <p>{toy.name}</p>
      <p>{toy.description}</p>
    </div>
  );
};

export default Toy;

Toy.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
