/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          О компании
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p>
              Основанное в июне 2004 года, ООО &quot;ГТМ&quot; за время своего
              существования превратилось в одно из ведущих строительно-монтажных
              предприятий в Оренбурге.
            </p>
            <p>
              В структуру ООО «ГТМ» также входят: Участок КИП и А, который
              выполняет комплекс работ по монтажу и наладке теплотехнических
              средств измерений и средств автоматизации, систем пожарной,
              охранной и охранно-пожарной сигнализации, систем контроля и
              управления доступом структурированных кабельных систем, прочих
              слаботочных устройств и систем; изготовление, монтаж и наладка
              шкафов и пультов управления для силовых и технологических
              электроприводов, устройств плавного пуска и регулирования частоты
              вращения электродвигателей; Участок по производству
              теплоизоляционных работ; Участок по антикоррозионной защите
              металлоконструкций, трубопроводов и оборудования; Участок по
              огнезащите металлоконструкций, трубопроводов и оборудования;
              Участок по изготовлению и монтажу систем вентиляции; Участок по
              производству изоляционных работ, в составе которого имеются
              специалисты по изоляции сварных соединений термо-усаживающими
              манжетами; Участок по ревизии и ремонту арматуры; Участок
              термообработки.
            </p>
          </div>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/about-img.png" alt="image-1" />
          </div>
          <div className={`${styles.about__img} ${styles.about__img__bottom}`}>
            <img src="/img/about-img-2.png" alt="image-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
