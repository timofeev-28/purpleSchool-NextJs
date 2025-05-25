import { Metadata } from 'next';
import { Htag, Button, P, Tag } from '@/components';
// import { Menu } from './components/menu';
// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// }

export async function generateMetadata(): Promise<Metadata> {
	// ...
	return {
	title: 'ComputedMeta',
	}
}

// const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
// 	firstCategory: 0
// });

export default async function Home() {
	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
		</>
	);
}
