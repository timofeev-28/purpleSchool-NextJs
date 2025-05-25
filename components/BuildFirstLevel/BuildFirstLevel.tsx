'use client';

import { firstLevelMenu } from '@/helpers/helpers';
import styles from './BuildFirstLevel.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { JSX, useState } from 'react';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { usePathname } from 'next/navigation';
import { useCategoryStore } from '@/store/firstCategory';

interface IMenu {
    menu: MenuItem[][];
}
interface ThirdPages {
    category: string;
    pages: PageItem[];
}

const firstCategory = 0;

export default function BuildFirstLevel({ menu }: IMenu): JSX.Element {
    const pathname = usePathname();
    const [category, setCategory] = useState<number>(firstCategory);
    const [firstLevelPages, setfirstLevelPages] = useState<ThirdPages>({category: 'Аналитика', pages: menu[0][0].pages});
    const { setFirstCategory } = useCategoryStore();

    const openFirstLevel = (level: number) => {
        setCategory(level);
        setFirstCategory(level);
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        const openSecondLevel = (category: string) => {
            const elem = menu[menuItem.id].find(m => m._id.secondCategory === category);
            if (!elem) {
                return;
            }
            setfirstLevelPages((prevState) => ({
                ...prevState,
                category: category,
                pages: elem.pages,
            }));
        };

        return (
            <div className={styles.secondBlock}>
                {menu[menuItem.id].map(m => {
                    return (
                    <div key={m._id.secondCategory}>
                        <button
                            className={styles.secondevel}
                            onClick={() => openSecondLevel(m._id.secondCategory)}
                        >
                            {m._id.secondCategory}
                        </button>
                        <div className={styles.secondLevelBlock}>
                            {firstLevelPages.category === m._id.secondCategory && firstLevelPages.pages.length > 0 &&
                                buildThirdLevel(firstLevelPages.pages, menuItem.route)}
                        </div>
                    </div>
                );
    })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link
                    key={p._id}
                    href={`/${route}/${p.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname
                    })}
                >
                    {p.category}
                </Link>
            ))
        )
    };

    return (
        <ul className={styles.firstLevelList}>
            {firstLevelMenu.map(m => (
                <li key={m.route}>
                    {/* <Link href={`/${m.route}`}> */}
                    <button onClick={() => openFirstLevel(m.id)} type='button'>
                        <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === category
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                        </div>
                    </button>
                    {/* </Link> */}
                    {m.id === category && buildSecondLevel(m)}
                </li>
            ))}
        </ul>
    );
};
