import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../../../infrastructure/utils';
import styles from './styles.module.scss';
import AirAsia from '../../../assets/img/Welcome/title.svg';

const WelcomePage: React.FC = (): JSX.Element => {
    const handler = () => null;
    return (
        <div className={styles.welcomePage}>
            <div className={styles.welcomePage_main}>
                <div className={styles.welcomePage_wrapper}>
                    <div className={styles.welcomePage_controller}>
                        <img src={AirAsia} alt="Air Asia" />
                        <span className={styles.welcomePage_text}>Открой для себя Азию</span>
                        <Link
                            to={Path.Main}
                            type="button"
                            tabIndex={0}
                            className={styles.welcomePage_btn}
                        >
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
            {handler()}
        </div>
    );
};

export default WelcomePage;
