import { FC, ReactNode } from 'react';
import { StatusMessageContainer as Container } from '../styles/statusMessage';
interface Props {
	icon: ReactNode | JSX.Element;
	message: string;
	title: string;
}

export const StatusMessage: FC<Props> = ({
	icon,
	title,
	message,
}): JSX.Element => {
	return (
		<Container className='status-message'>
			<div>{icon}</div>
			<div className='info'>
				<h2>{title}</h2>
				<p>{message}</p>
			</div>
		</Container>
	);
};
