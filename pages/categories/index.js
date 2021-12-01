import toyCategories from "../../config/toyCategories";

export default function CategoriesHome() {
  console.log(toyCategories);
  return (
    <>
      <CategoryOverview />
    </>
  );
}

import Layout from "../../components/layouts/SiteLayouts/siteLayout";
import CategoryOverview from "../../components/categories/categoryOverview";

CategoriesHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
