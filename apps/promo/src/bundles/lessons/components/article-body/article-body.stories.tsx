import ArticleBody from "./article-body";

const settings = {
  title: "bundles/lessons/components/article-body",
  component: ArticleBody,
};

export default settings;

export const Default = () => (
  <div style={{ padding: "20px" }}>
    <ArticleBody
      content={[
        {
          type: "header",
          content: "Структура кода",
        },
        {
          type: "paragraph",
          content:
            "Начнём изучение языка с рассмотрения основных «строительных блоков» кода.",
        },
        {
          type: "subheader",
          content: "Инструкции",
        },
        {
          type: "paragraph",
          content:
            "Инструкции – это синтаксические конструкции и команды, которые выполняют действия.",
        },
        {
          type: "subheader",
          content: "Точка с запятой",
        },
        {
          type: "paragraph",
          content:
            "В большинстве случаев точку с запятой можно не ставить, если есть переход на новую строку.",
        },
        {
          type: "header",
          content: "Функции",
        },
        {
          type: "list",
          content: ["point 1", "point 2"],
        },
        {
          type: "paragraph",
          content:
            "Зачастую нам надо повторять одно и то же действие во многих частях программы.",
        },
        {
          type: "paragraph",
          content:
            "Например, необходимо красиво вывести сообщение при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.",
        },
      ]}
    />
  </div>
);
