import { FC, useState } from 'react';
import { RecentsContainer as Container } from '../styles/recents';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
import { FaArchive } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';
import { UserPanel } from '../components/modals/UserPanelModal';
import { CreateFolder } from '../components/modals/CreateFolder';
import { Aside } from '../components/Aside';
import { useToolboxContext } from '../context/ToolboxContext';

const Recents: FC = () => {
	const [itemsData, setItemsData] = useState([]);
	const { createFolderStatus, userPanelStatus } = useToolboxContext();

	return (
		<>
			<Aside />
			<Container>
				{userPanelStatus ? <UserPanel /> : null}
				{createFolderStatus ? <CreateFolder /> : null}
				<Header toolbar={<Toolbox title={'Recents'} />} />
				<article className='content'>
					{itemsData.length === 0 ? (
						<StatusMessage
							icon={<FaArchive />}
							title={'No recent files to be shown.'}
							message={'Have a nice day :)'}
						/>
					) : null}
				</article>
			</Container>
		</>
	);
};

export default Recents;
