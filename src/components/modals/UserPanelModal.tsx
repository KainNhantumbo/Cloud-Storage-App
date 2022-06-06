import { FC } from 'react';
import {
	IoColorPalette,
	IoLogOut,
	FaCog,
	FaUserCircle,
	FiX,
} from 'react-icons/all';
import { userPanelContainer as Container } from '../../styles/userPanel';
import { useThemeContext } from '../../context/ThemeSeter';
import { useNavigate } from 'react-router-dom';
import { useToolboxContext } from '../../context/ToolboxContext';

export const UserPanel: FC = (): JSX.Element => {
	const { themeSwitcher }: any = useThemeContext();
	const navigate = useNavigate();
	const { userPanelHandler: canceler, setUserPanelStatus } =
		useToolboxContext();

	return (
		<Container className='user-panel' onClick={(e) => canceler(e)}>
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
		</Container>
	);
};
