import { FC, useState } from 'react';
import { HomeContainer as Container } from '../styles/home';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
import { BiWifiOff } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';
import { UserPanel } from '../components/modals/UserPanelModal';
import { CreateFolder } from '../components/modals/CreateFolder';
import { Aside } from '../components/Aside';

const Home: FC = () => {
	const [itemsData, setItemsData] = useState([]);
	const [userPanelStatus, setUserPanelStatus] = useState(false);
	const [createFolderStatus, setCreateFolderStatus] = useState(false);

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

	const createFolderHandler = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
	): void => {
		e.stopPropagation();
		const targetClass = e.target.classList;
		if (targetClass.contains('dialog-modal')) {
			setCreateFolderStatus((presvState) => !presvState);
			return;
		}
		if (targetClass.contains('prompt-cancel')) {
			setCreateFolderStatus((presvState) => !presvState);
			return;
		}
	};

	const folderCreator = (): void => {};

	return (
		<>
			<Aside />
			<Container>
				{userPanelStatus ? (
					<UserPanel
						canceler={userPanelHandler}
						setUserPanelStatus={setUserPanelStatus}
					/>
				) : null}
				{createFolderStatus ? (
					<CreateFolder
						canceler={createFolderHandler}
						folderCreator={folderCreator}
					/>
				) : null}

				<Header
					userPanelHandler={userPanelHandler}
					toolbar={
						<Toolbox
							setCreateFolderState={setCreateFolderStatus}
							title={'Cloud Drive'}
						/>
					}
				/>
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
		</>
	);
};

export default Home;
