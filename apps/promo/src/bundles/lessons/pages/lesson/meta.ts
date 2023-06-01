import { Metadata } from "next";
import fetchLessonById from "@/bundles/lessons/api/fetchLessonById";

type MetadataProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { id } = params;
  const lesson = await fetchLessonById(id);

  if (lesson) {
    const { title, description } = lesson;
    return {
      title,
      description,
    };
  }

  return {
    title: "Afina",
    description: "Afina platform",
  };
}
