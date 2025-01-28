import { Button } from '@ui/button';
import { HomePageUIProps } from './type';
import style from './homePageUI.module.scss';

export const HomePageUI: React.FC<HomePageUIProps> = ({
  description = 'Welcome to the home page!',
  handleLogin,
}: HomePageUIProps) => {
  return (
    <div className={style.page}>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <div className={style.logoContainer__logo}>
            <img src="/public/logo.svg" alt="Logo" />
          </div>
          <div className={style.logoContainer__title}>
            <h3>Логотип</h3>
          </div>
        </div>
        <div className={style.events}>
          <div className={style.event}>
            <div className={style.event__title}>Прием заявок</div>
            <div className={style.event__description}>
              до{' '}
              <span className={style.event__description__accentText}>11</span>{' '}
              марта
            </div>
          </div>
          <div className={style.event}>
            <div className={style.event__title}>Получение заданий</div>
            <div className={style.event__description}>
              <span className={style.event__description__accentText}>4</span>{' '}
              марта
            </div>
          </div>
          <div className={style.event}>
            <div className={style.event__title}>Внесение ответов</div>
            <div className={style.event__description}>
              до{' '}
              <span className={style.event__description__accentText}>18</span>{' '}
              марта
            </div>
          </div>
          <div className={style.event}>
            <div className={style.event__title}>Итоги конкурса</div>
            <div className={style.event__description}>
              <span className={style.event__description__accentText}>19</span>{' '}
              марта
            </div>
          </div>
        </div>
        <Button variant="primary" onClick={handleLogin}>
          Вход в кабинет
        </Button>
      </header>
      <section className={style.main}>
        <div className={style.main__left}>
          <div className={style.container}></div>
          <h1>
            Тестовое задание для{' '}
            <span className={style.accentText}>самого лучшего</span>{' '}
            верстальщика
          </h1>
          <p>{description}</p>
        </div>
        <div className={style.main__right}>
          <div className={style.main__rightImage}>
            <img src="/public/image.png" alt="Studets" />
          </div>
        </div>
      </section>
      <footer className={style.footer}></footer>
    </div>
  );
};
