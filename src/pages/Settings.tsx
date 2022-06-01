import { FC } from 'react';
import {
	BiChart,
	BiErrorCircle,
	BsFlagFill,
	FaArrowLeft,
	FaCloud,
	FaCode,
	FaCog,
	FaCopyright,
	FaEnvelope,
	FaGithub,
	FaHistory,
	FaMoneyCheck,
	FaSeedling,
	FaTimes,
	FaTrashAlt,
	FaUser,
	FaUserCircle,
	GiMite,
	GiUpgrade,
	ImDrive,
	SiAboutdotme,
} from 'react-icons/all';
import { SettingsContainer as Container } from '../styles/settings';
import { useState } from 'react';

interface Props {}

const Settings: FC<Props> = (): JSX.Element => {
	const [dialogStatus, setDialogStatus] = useState(false);

	const dialogModalToggler = (
		event: React.MouseEvent<HTMLElement, MouseEvent> | any
	): void => {
		event.stopPropagation();
		const targetClass = event.target.classList;
		if (targetClass.contains('dialog-modal')) {
			setDialogStatus((prevState) => !prevState);
			return;
		}
		if (targetClass.contains('prompt-cancel')) {
			setDialogStatus((prevState) => !prevState);
			return;
		}
	};

	return (
		<Container>
			{dialogStatus ? (
				<section
					className='dialog-modal'
					onClick={(e) => dialogModalToggler(e)}
				>
					<div className='dialog-prompt'>
						<div className='prompt-info'>
							<span className='prompt-title'>Are you sure?</span>
							<p className='prompt-message'>
								Your account will be deleted and all your files will be
								permanently lost.
							</p>
						</div>
						<div className='prompt-actions'>
							<button
								className='prompt-cancel'
								onClick={(e) => dialogModalToggler(e)}
							>
								<FaArrowLeft />
								<span>No, cancel</span>
							</button>
							<button>
								<FaTrashAlt />
								<span>Yes, delete my account</span>
							</button>
						</div>
					</div>
				</section>
			) : null}

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
						<div title='User avatar' className='user-avatar'>
							<FaUserCircle />
						</div>
						<div className='user-details'>
							<div className='user-info'>
								<h3>
									<FaUser />
									<span>Name: </span>
								</h3>
								<span title='User name'>Mayara Dorreto</span>
							</div>
							<div className='user-info'>
								<h3>
									<FaEnvelope />
									<span>E-mail: </span>
								</h3>
								<span title='User e-mail'>mayaradorreto@mailer.com</span>
							</div>
							<div className='user-info'>
								<h3>
									<BsFlagFill />
									<span>Country: </span>
								</h3>
								<span title='User country'>Austrália</span>
							</div>
						</div>
					</section>
				</section>
				<section className='storage-container'>
					<h2 className='title'>
						<BiChart />
						<span>Account type</span>
					</h2>
					<section className='storage-section'>
						<div className='storage-details'>
							<h3>
								<FaSeedling />
								<span>Subscription type</span>
							</h3>
							<span>Free</span>
						</div>
						<div className='storage-details'>
							<h3>
								<ImDrive />
								<span>Storage space</span>
							</h3>
							<span>20GB used of 100GB</span>
						</div>
						<div className='storage-details'>
							<h3>
								<FaMoneyCheck />
								<span>Balance</span>
							</h3>
							<span>$0.00</span>
						</div>
						<div className='storage-details'>
							<h3>
								<FaHistory />
								<span>Renews on</span>
							</h3>
							<span>No active subscription</span>
						</div>
						<button>
							<GiUpgrade />
							<span>Upgrade account</span>
						</button>
					</section>
				</section>
				<section className='account-container'>
					<h2 className='title'>
						<BiErrorCircle />
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
							<button onClick={(e) => setDialogStatus(true)}>
								<FaTrashAlt />
								<span>Delete account</span>
							</button>
						</div>
					</div>
				</section>
				<section className='about-container'>
					<h2 className='title'>
						<SiAboutdotme />
						<span>About</span>
					</h2>
					<section className='about-section'>
						<section className='logo'>
							<FaCloud />
							<span>Nava Drive</span>
						</section>
						<section className='app-info'>
							<div className='user-info'>
								<h3>
									<FaCloud />
									<span>Nava Cloud Drive V0.0.1 (beta)</span>
								</h3>
							</div>
							<div className='user-info'>
								<h3>
									<FaCode />
									<span title='Kain Nhantumbo'>Developer: Kain Nhantumbo</span>
								</h3>
							</div>
							<div className='user-info'>
								<h3>
									<FaGithub />
									<span title='github.com/KainNhantumbo'>
										Github:
										<a
											href='https://github.com/KainNhantumbo'
											rel='noreferrer'
											target={'_blank'}
										>
											{' '}
											github.com/KainNhantumbo
										</a>
									</span>
								</h3>
							</div>
							<div className='user-info'>
								<h3>
									<FaCopyright />
									<span title='Copyright &copy; 2022 Kain Nhantumbo'>
										Copyright &copy; 2022 Kain Nhantumbo
									</span>
								</h3>
							</div>
							<div className='user-info'>
								<h3>
									<GiMite />
									<span title='Licensed under GNU GPL V3'>
										Licensed under GNU GPL V3
									</span>
								</h3>
							</div>
						</section>
					</section>
				</section>
			</article>
		</Container>
	);
};

export default Settings;
