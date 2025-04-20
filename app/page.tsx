'use client';

import { Button, Htag, P, Rating, Tag } from '@/src/components';
import { JSX, useState } from 'react';

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <main>
            <div>
                <Htag tag='h1'>Заголовок</Htag>
                <Button appearance='primary' arrow='right'>Кнопка</Button>
                <Button appearance='ghost'>Кнопка</Button>
                <P size='l'>Большой</P>
                <P>Средний</P>
                <P size='s'>маленький</P>
                <Tag size='s'>Ghost</Tag>
                <Tag size='m' color='red'>Red</Tag>
                <Tag size='s'color='green'>Green</Tag>
                <Tag color='primary'>Ghost</Tag>
                <Rating rating={rating} isEditable={true} setRating={setRating} />
            </div>
        </main>
    );
}
