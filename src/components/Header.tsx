import * as React from 'react';
import { BiSearch, FaCog, FaUserCircle, FiX } from 'react-icons/all';
import { HeaderContainer as Container } from '../styles/header';
import { useNavigate } from 'react-router-dom';
interface Props {
	toolbar?: JSX.Element;
	userPanelHandler: any
}

export const Header: React.FC<Props> = ({ toolbar, userPanelHandler }): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Container>
			<article className='upper-container'>
				<section className='right-section'>
					<form>
						<button type='submit'>
							<BiSearch />
						</button>
						<input type='text' placeholder='Search on drive' />
						<button type='reset'>
							<FiX />
						</button>
					</form>
				</section>
				<section className='left-section'>
					<button title='Preferences' onClick={(e) => navigate('/settings')}>
						<FaCog title='Preferences' />
					</button>
					<button
						title='User account'
						className='user-button'
						onClick={(e) => userPanelHandler(e)}
					>
						<FaUserCircle title='User account' />
					</button>
				</section>
			</article>
			<article className='bottom-container'>{toolbar}</article>
		</Container>
	);
};
