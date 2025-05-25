// import { getMenu } from '@/api/menu';
import { getPage } from '@/api/getPage';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Страница',
}

// generateStaticParams - зарезервированное имя функции
// export async function generateStaticParams() {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias})))
// }

type Params = Promise<{ alias: string }>

export default async function PageProducts({ params }: { params: Params}) {
    const page = await getPage((await params).alias);
    if (!page) {
        notFound();
    }
    return (
        <div>
            <p>Страница c alias {(await params).alias}</p>
            {page.title}
        </div>
    ); 
}
