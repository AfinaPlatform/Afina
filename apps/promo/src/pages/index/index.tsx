import css from "./index.module.scss";

export default function Index() {
  return (
    <div className={css.root}>
      <div className={css.headerWrapper}>
        <h1 className={css.header}>Afina</h1>
      </div>
      <div className={css.welcomeWrapper}>
        <p className={css.welcome}>Welcome to our online learning platform!</p>
      </div>
      <div className={css.textWrapper}>
        <p className={css.text}>
          We believe that learning should be an engaging and enjoyable
          experience, which is why we&apos;ve designed our platform to be as fun
          and interesting as watching a movie. With our engaging multimedia
          content, interactive quizzes, and gamified learning experiences,
          you&apos;ll find that the learning process is easier and more
          enjoyable than ever before :)
        </p>
      </div>
      <p className={css.soon}>Soon...</p>
    </div>
  );
}
