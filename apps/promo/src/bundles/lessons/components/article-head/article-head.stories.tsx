import ArticleHead from "./article-head";

const settings = {
  title: "bundles/lessons/components/article-head",
  component: ArticleHead,
};

export default settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <ArticleHead title="Functions in js" />
  </div>
);
