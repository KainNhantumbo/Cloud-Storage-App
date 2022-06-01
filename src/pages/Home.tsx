import { FC, useState } from 'react';
import { HomeContainer as Container } from '../styles/home';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
import { BiWifiOff, IoColorPalette, IoLogOut, 	BiSearch,
	FaCog,
	FaUserCircle,
	FiX, } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeSeter';

const Home: FC = () => {
	const [itemsData, setItemsData] = useState([]);
	const [userPanelStatus, setUserPanelStatus] = useState(true);
	const { themeSwitcher }: any = useThemeContext();
	const userPanelHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
	): void => {
		e.stopPropagation();
		const targetClass = e.target.classList;
		if (targetClass.contains('user-panel')) {
			setUserPanelStatus((presvState) => !presvState);
			return;
		}
		if (targetClass.contains('user-button')) {
			setUserPanelStatus((presvState) => !presvState);
			return;
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
							<div
								onClick={(e) => {
									setUserPanelStatus(false);
									navigate('/settings');
								}}
							>
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
			<Header toolbar={<Toolbox title={'Cloud Drive'} />} />
			<article className='content'>
				{itemsData.length === 0 ? (
					<StatusMessage
						icon={<BiWifiOff />}
						title={'No internet connection'}
						message={
							'Troubleshoot your connection settings or try again later.'
						}
					/>
				) : null}
			</article>
		</Container>
	);
};

export default Home;
