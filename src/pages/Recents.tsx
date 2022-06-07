import { FC, useState } from 'react';
import { RecentsContainer as Container } from '../styles/recents';
import { Toolbox } from '../components/Toolbox';
import { Header } from '../components/Header';
import { BiTrash, FaArchive } from 'react-icons/all';
import { StatusMessage } from '../components/StatusMessage';
import { UserPanel } from '../components/modals/UserPanelModal';
import { CreateFolder } from '../components/modals/CreateFolder';
import { Aside } from '../components/Aside';
import { useToolboxContext } from '../context/ToolboxContext';
import { SortOptions } from '../components/modals/SortOptions';
import { ConfirmDialog } from '../components/modals/ConfirmDialog';

const Recents: FC = () => {
	const [itemsData, setItemsData] = useState([]);
	const { createFolderStatus, userPanelStatus, isSortOptionsActive } =
		useToolboxContext();
	const [isRecycleDialogActive, setIsRecycleDialogActive] = useState(false);

	return (
		<>
			<Aside />
			<Container>
				{userPanelStatus ? <UserPanel /> : null}
				{createFolderStatus ? <CreateFolder /> : null}
				{isSortOptionsActive ? <SortOptions /> : null}
				{isRecycleDialogActive ? (
					<ConfirmDialog
						prompt_title='Move to trash'
						prompt_message='You will be able to recycle this file later.'
						button_text='Move to trash'
						closeModal={setIsRecycleDialogActive}
						icon={<BiTrash />}
					/>
				) : null}

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
