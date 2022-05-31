import * as React from 'react';
import { useState } from 'react';
import {
	BiSearch,
	FaCog,
	FaUserCircle,
	FiX,
	IoColorPalette,
	IoLogOut,
} from 'react-icons/all';
import { HeaderContainer as Container } from '../styles/header';
import { useThemeContext } from '../context/ThemeSeter';
import { useNavigate } from 'react-router-dom';

interface Props {
	toolbar?: JSX.Element;
}

export const Header: React.FC<Props> = ({ toolbar }): JSX.Element => {
	const [userPanelStatus, setUserPanelStatus] = useState(false);
	const { themeSwitcher }: any = useThemeContext();
	const navigate = useNavigate();

	const userPanelHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
	): void => {
		e.stopPropagation();
		if (
			e.target.classList.contains('user-panel') ||
			e.target.classList.contains('user-button')
		) {
			setUserPanelStatus((presvState) => !presvState);
		}
	};

	return (
		<Container>
			{userPanelStatus ? (
				<div className='user-panel' onClick={(e) => userPanelHandler(e)}>
					<section className='panel-container'>
						<button
							onClick={(e) => setUserPanelStatus((prevState) => !prevState)}
							className='close-panel'
							title={'Close'}
						>
							<FiX />
						</button>
						<div className='panel-info'>
							<FaUserCircle title='User account' />
							<div className='panel-details'>
								<span>Maya Dorreto</span>
								<span>mayladorreto@mailer.co.xs</span>
							</div>
						</div>
						<div className='panel-actions'>
							<div onClick={(e) => themeSwitcher()}>
								<IoColorPalette />
								<span>Switch theme</span>
							</div>
							<div onClick={(e) => navigate('/settings')}>
								<FaCog />
								<span>Settings</span>
							</div>
							<div>
								<IoLogOut />
								<span>Log out</span>
							</div>
						</div>
					</section>
				</div>
			) : null}

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
