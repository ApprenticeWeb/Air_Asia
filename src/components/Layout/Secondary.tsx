import React from 'react';
import styles from 'styles.module.scss';

const SecondaryLayout: React.FC = (): JSX.Element => {
    const handler = () => null;
    return (
        <div className={styles.secondary}>
            {handler()}
        </div>
    );
};

export default SecondaryLayout;
