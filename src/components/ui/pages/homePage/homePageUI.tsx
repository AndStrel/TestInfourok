import { Button } from '@ui/button';
import { HomePageUIProps } from './type';
import style from './homePageUI.module.scss';

export const HomePageUI: React.FC<HomePageUIProps> = ({
  handleLogin,
  goVisit,
}: HomePageUIProps) => {
  return (
    <div className={style.page}>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <div className={style.logoContainer__logo}>
            <img src="/src/assets/images/logo.svg" alt="Logo" />
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
        <div className={style.buttonContainer}>
          <Button variant="primary" onClick={handleLogin}>
            Вход в кабинет
          </Button>
        </div>
      </header>
      <section className={style.main}>
        <div className={style.main__left}>
          <div className={style.container__title}>
            <h1>
              Тестовое задание <br />
              для <span className={style.accentText}>самого лучшего</span>{' '}
              верстальщика
            </h1>
          </div>
          <div className={style.container__description}>
            <div className={style.bid}>
              <div className={style.bid__title}>
                <h3>Низкий оргвзнос</h3>
              </div>
              <div className={style.bid__price}>
                <h2>30</h2>
              </div>
              <Button variant="secondary" onClick={goVisit}>
                Подать заявку на участие
              </Button>
            </div>
            <div className={style.description}>
              <article className={style.description__article}>
                <div className={style.description__article__title}>
                  <h3>Ученикам</h3>
                </div>
                <div>
                  <p className={style.description__article__text}>
                    Конкурс по 16 предметам
                    <br />
                    Доступные задания для всех учеников
                    <br />
                    Бесплатные дипломы и сертификаты
                  </p>
                </div>
              </article>
              <article className={style.description__article}>
                <div className={style.description__article__title}>
                  <h3>Учителям</h3>
                </div>
                <div>
                  <p className={style.description__article__text}>
                    Бесплатные свидетельства
                    <br />
                    Бесплатные благодарности
                    <br />
                    Простое участие
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className={style.main__right}>
          <div className={style.container__image}>
            <img
              src="/src/assets/images/image.png"
              alt="Studets"
              className={style.picture}
            />
          </div>
        </div>
      </section>
      <footer className={style.footer}></footer>
    </div>
  );
};
