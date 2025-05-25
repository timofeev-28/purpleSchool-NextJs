
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { JSX } from 'react';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';
import { HhData } from '../HhData/HhData';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Advantages } from '../Advantages/Advantages';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>{products.length}</Tag>}
                {/* <Sort sort={sort} setSort={setSort} /> */}
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page?.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущства</Htag>
				<Advantages advantages={page.advantages} />
			</>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText}} />}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    );
};
