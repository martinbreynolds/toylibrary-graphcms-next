export default function ContactHome() {
  return <p>This is the contacts home page</p>;
}

import Layout from "../../components/layouts/SiteLayout/siteLayout";

ContactHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
