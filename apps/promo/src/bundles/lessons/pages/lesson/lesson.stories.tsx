import { Lesson } from "./lesson";

const settings = {
  title: "bundles/lessons/pages/lesson",
  component: Lesson,
};

export default settings;

export const Default = () => (
  <Lesson
    title="Lesson 1"
    content={[
      {
        type: "header",
        content: "Mollit veniam sit ipsum aliquip irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim eu cillum Lorem proident nisi tempor consectetur adipisicing Lorem proident consectetur ad aliquip. Lorem ipsum velit sit pariatur anim. Adipisicing eu velit esse commodo nostrud minim.",
      },
    ]}
  />
);
