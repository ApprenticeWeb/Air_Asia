import React, { useMemo, useState } from 'react';
import styles from './styles.module.scss';
import Logo from '../../../assets/img/logo.svg';
import Telegram from '../../../assets/img/platforms/telegram.svg';
import Vk from '../../../assets/img/platforms/vk.svg';
import Facebook from '../../../assets/img/platforms/facebook.svg';
import Instagram from '../../../assets/img/platforms/instogram.svg';
import Calendar from '../../../assets/img/Main/svg/Main/calendar.svg';
import Food from '../../../assets/img/Main/svg/Main/food.svg';
import Fire from '../../../assets/img/Main/svg/Main/fire.svg';
import Moto from '../../../mocks/images/about_moto.png';
import Info from '../../../mocks/images/about_info.png';
import { listTrip } from '../../../mocks/trips';
import { listPromotions } from '../../../mocks/promotion';

const MainPage: React.FC = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);
    const [shift, setShift] = useState<number>(0);
    const [promotion, setPromotion] = useState<number>(0);
    const slidesForPromotion = useMemo(() => listPromotions.slice(promotion * 2, promotion * 2 + 2), [promotion]);
    const handlerClickSlider = (direction: string) => {
        if (direction === 'forward') {
            if (count + 3 < listTrip.length) {
                setCount(count + 1);
                setShift(shift - 390);
            }
        }
        if (direction === 'back') {
            if (count > 0) {
                setCount(count - 1);
                setShift(shift + 390);
            }
        }
    };
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainPage_primary}>
                <header className={styles.header}>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className={styles.header_menu}>
                        <li>Главная</li>
                        <li>Услуги</li>
                        <li>Отзывы</li>
                    </ul>
                    <div className={styles.header_contacts}>
                        <address>
                            <a href="tel:+78009039090" className={styles.header_phone}>8 800 903 90 90</a>
                        </address>
                        <span>График работы</span>
                    </div>
                </header>
                <div className={styles.info}>
                    <h1 className={styles.info_title}>Авторские туры по Азии</h1>
                    <span>Открой для себя азию</span>
                    <button
                        type="button"
                        className={styles.info_btn}
                    >
                        Подробнее
                    </button>
                </div>
                <section className={styles.sliderTrip}>
                    <div className={styles.sliderTrip_title}>
                        <span>Горящие туры</span>
                        <img src={Fire} alt="Fire" />
                    </div>
                    <div className={styles.sliderTrip_window}>
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => null}
                            onClick={() => handlerClickSlider('back')}
                            className={styles.sliderTrip_btnForward}
                        >
                            &laquo;
                        </div>
                        <div className={styles.sliderTrip_lenta} style={{ left: shift }}>
                            {listTrip.map((trip) => (
                                <div key={trip.id} className={styles.sliderTrip_slide}>
                                    <img className={styles.sliderTrip_img} src={trip.src} alt={trip.name} />
                                    <div className={styles.sliderTrip_info}>
                                        <h3>{trip.name}</h3>
                                        <div className={styles.sliderTrip_condition}>
                                            <div>
                                                <img src={Calendar} alt="Calendar" />
                                                <span className={styles.sliderTrip_label}>7 - 12 ночей</span>
                                            </div>
                                            <div>
                                                <img src={Food} alt="Food" />
                                                <span className={styles.sliderTrip_label}>Завтраки</span>
                                            </div>
                                        </div>
                                        <p>{trip.description}</p>
                                        <button type="button" className={styles.sliderTrip_btn}>Смотреть</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => {}}
                            onClick={() => handlerClickSlider('forward')}
                            className={styles.sliderTrip_btnBack}
                        >
                            &raquo;
                        </div>
                    </div>
                </section>
                <section className={styles.promotions}>
                    <h2>Новости и акции</h2>
                    <div className={styles.promotions_newsFeed}>
                        {slidesForPromotion.map((element) => (
                            <div key={element.id} className={styles.promotions_block} style={{ background: `url(${element.src})`, backgroundSize: '100% 100%' }}>
                                <span>{element.date}</span>
                                <h3 className={styles.promotions_title}>{element.title}</h3>
                                <p className={styles.promotions_text}>{element.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.promotions_pagination}>
                        <span>
                            Страницы 1 из
                            {' '}
                            { Math.ceil(listPromotions.length / 2) }
                        </span>
                        <div className={styles.promotions_list}>
                            {[...Array(Math.ceil(listPromotions.length / 2)).keys()].map((element, index) => (
                                <div
                                    key={element}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={() => {}}
                                    onClick={() => setPromotion(element)}
                                    className={styles.promotions_li}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={styles.aboutUs}>
                    <div className={styles.aboutUs_firstBlock}>
                        <img src={Moto} alt="Moto" className={styles.aboutUs_img} />
                    </div>
                    <div className={styles.aboutUs_info} style={{ background: `url(${Info})`, backgroundSize: 'cover' }}>
                        <h3>О нас</h3>
                        <p className={styles.aboutUs_text}>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях.
                        </p>
                        <button type="button" className={styles.aboutUs_btn}>Подробнее</button>
                    </div>
                </section>
                <footer className={styles.footer}>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className={styles.footer_menu}>
                        <li>Главная</li>
                        <li>Услуги</li>
                        <li>Отзывы</li>
                    </ul>
                    <ul className={styles.footer_listPlatform}>
                        <li className={styles.footer_icon}><img src={Telegram} alt="Telegram" /></li>
                        <li className={styles.footer_icon}><img src={Vk} alt="Vk" /></li>
                        <li className={styles.footer_icon}><img src={Facebook} alt="Facabook" /></li>
                        <li className={styles.footer_icon}><img src={Instagram} alt="Instogram" /></li>
                    </ul>
                    <div className={styles.footer_contacts}>
                        <span className={styles.footer_text}>Бесплатный звонок по России</span>
                        <address>
                            <a href="tel:+78009039090" className={styles.footer_phone}>8 800 903 90 90</a>
                        </address>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MainPage;
