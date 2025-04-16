import { Button, Htag } from '@/src/components';
import { JSX } from 'react';

export default function Home(): JSX.Element {
    return (
        <main>
            <div>
                <Htag tag='h1'>Текст</Htag>
                <Button appearance='primary'>Кнопка</Button>
                <Button appearance='ghost'>Кнопка</Button>
            </div>
        </main>
    );
}
