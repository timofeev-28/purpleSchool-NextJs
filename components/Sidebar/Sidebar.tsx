import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import  Menu from '@/components/Menu/Menu';
import Logo from '@/public/logo.svg';
// import { Search } from '../../components';
import { JSX } from 'react';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			{/* <Search /> */}
			<div>Поиск</div>
			<Menu />
		</div>
	);
};
