import React from 'react';
import { useOutlet } from 'react-router-dom';
import styles from './styles.module.scss';

const Layout: React.FC = (): JSX.Element => {
    const outlet = useOutlet();
    return (
        <div className={styles.layout}>
            {outlet}
        </div>
    );
};

export default Layout;
