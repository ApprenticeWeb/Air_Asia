import { IPromotion } from './types';
import Wing from './images/promotion_wing.png';
import Surfing from './images/promotion_surfing.png';
import Moto from './images/about_moto.png';
import Vietnam from './images/vietnam.jpg';

export const listPromotions: IPromotion[] = [
    {
        id: 1,
        date: 'Декабрь 2019',
        title: 'Дешевые путевки на Новый Год!',
        description: 'Проведи новый год в Тайланде',
        src: Wing,
    },
    {
        id: 2,
        date: 'Декабрь 2019',
        title: 'Акция для серфенгистов!',
        description: 'В сезон больших волн скидка на путевку в Тайланд на остров серфенгистов. Удачного пути!',
        src: Surfing,
    },
    {
        id: 3,
        date: 'Декабрь 2019',
        title: 'Дешевые путевки на Новый Год!',
        description: 'Проведи новый год в Тайланде',
        src: Moto,
    },
    {
        id: 4,
        date: 'Декабрь 2019',
        title: 'Акция для серфенгистов!',
        description: 'В сезон больших волн скидка на путевку в Тайланд на остров серфенгистов. Удачного пути!',
        src: Vietnam,
    },
    {
        id: 5,
        date: 'Декабрь 2019',
        title: 'Акция для серфенгистов!',
        description: 'В сезон больших волн скидка на путевку в Тайланд на остров серфенгистов. Удачного пути!',
        src: Wing,
    },
];
