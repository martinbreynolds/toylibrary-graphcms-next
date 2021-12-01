export default function CategoriesHome() {
  return <p>This is the categories home page</p>;
}

import Layout from "../../components/layouts/SiteLayout/siteLayout";

CategoriesHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
