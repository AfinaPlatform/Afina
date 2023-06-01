/**
 * h2
 */
type Header = {
  type: "header";
  content: string;
};

/**
 * h3
 */
type Subheader = {
  type: "subheader";
  content: string;
};

/**
 * p
 */
type Paragraph = {
  type: "paragraph";
  content: string;
};

type Chunk = Paragraph | Header | Subheader;

export type Lesson = {
  id: string;
  title: string;
  description: string;
  content: Chunk[];
};

export type LessonFromServer = Omit<Lesson, "id"> & {
  _id: string;
};
