import { FC } from 'react';
import {
	BiChart,
	BiStats,
	BiUser,
	BsFlagFill,
	CgNametag,
	FaCog,
	FaEnvelope,
	FaTimes,
	FaTrashAlt,
	FaUser,
	FaUserCircle,
	FcAbout,
	MdAccountCircle,
	RiAccountCircleFill,
	SiAboutdotme,
	SiNamebase,
	TiTrash,
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
				<section className='account-container'>
					<h2 className='title'>
						<BiChart />
						<span>Danger Zone</span>
					</h2>
					<div className='user-actions'>
						<h3>
							<FaTimes />
							<span>Delete Account</span>
						</h3>
						<div className='info'>
							<p>
								<i>Warning: </i> You will not be able to access your account
								data after you confirm this action.
							</p>
							<button>
								<FaTrashAlt />
								<span>Delete Account</span>
							</button>
						</div>
					</div>
				</section>
				<section className='about-container'>
					<h2 className='title'>
						<SiAboutdotme />
						<span>About</span>
					</h2>
				</section>
			</article>
		</Container>
	);
};

export default Settings;
