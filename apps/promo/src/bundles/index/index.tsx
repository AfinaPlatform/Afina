import Image from "next/image";
import css from "./index.module.scss";
import LinkButton from "@/shared/components/link-button";
import AfinaIllustration from "@/public/afina.png";

export default function Index() {
  return (
    <div className={css.root}>
      <div className={css.grid}>
        <div className={css.textArea}>
          <div className={css.headerWrapper}>
            <h1 className={css.header}>Afina</h1>
          </div>
          <div className={css.welcomeWrapper}>
            <p data-welcome-text className={css.welcome}>
              Добро пожаловать на нашу онлайн-платформу!
            </p>
          </div>
          <div className={css.textWrapper}>
            <p data-info-text className={css.text}>
              Мы считаем, что обучение должно быть интересным и увлекательным
              процессом, поэтому мы разработали нашу платформу таким образом,
              чтобы она была так же увлекательна и интересна, как просмотр
              фильма. 😌
            </p>
          </div>
          <div className={css.startWrapper}>
            <LinkButton href="/hub" data-start-link>
              Начать
            </LinkButton>
          </div>
        </div>
        <div className={css.illustrationArea}>
          <div className={css.illustrationWrapper}>
            <Image
              src={AfinaIllustration}
              width={500}
              height={500}
              alt="Афина"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
