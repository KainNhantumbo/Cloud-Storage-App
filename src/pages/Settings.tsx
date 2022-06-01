import { FC } from 'react';
import {
	BiUser,
	BsFlagFill,
	CgNametag,
	FaCog,
	FaEnvelope,
	FaUser,
	FaUserCircle,
	SiNamebase,
} from 'react-icons/all';
import { SettingsContainer as Container } from '../styles/settings';

interface Props {}

const Settings: FC<Props> = (): JSX.Element => {
	return (
		<Container>
			<section className='false-header'>
				<h1>
					<FaCog />
					<span>Settings</span>
				</h1>
			</section>
			<article className='content'>
				<section className='user-container'>
					<h2 className='title'>
						<FaUserCircle />
						<span>User profile</span>
					</h2>
					<section className='section-container'>
						<div className='user-avatar'>
							<FaUserCircle />
						</div>
						<div className='user-details'>
							<div className='user-info'>
								<h3>
									<FaUser />
									<span>Name: </span>
								</h3>
								<span title='user name'>Mayara Dorreto</span>
							</div>
							<div className='user-info'>
								<h3>
									<FaEnvelope />
									<span>E-mail: </span>
								</h3>
								<span>mayaradorreto@mailer.com</span>
							</div>
							<div className='user-info'>
								<h3>
									<BsFlagFill />
									<span>Country: </span>
								</h3>
								<span>Austrália</span>
							</div>
						</div>
					</section>
				</section>
				<section className='account-section'>
					<div className='user-actions'>
						<h3>
							<span>Delete Account</span>
						</h3>
					</div>
				</section>
			</article>
		</Container>
	);
};

export default Settings;
