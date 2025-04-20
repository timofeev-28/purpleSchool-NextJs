import { JSX } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ children, appearance, arrow='none', className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
                [styles.arrow]: arrow !== 'none'
            })}
            {...props}
        >
            {children}
        </button>
    );
};
