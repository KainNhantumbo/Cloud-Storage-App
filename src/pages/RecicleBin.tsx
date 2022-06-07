import { FC, useState } from 'react';
import { FaHistory, FaRecycle, FaTrashAlt } from 'react-icons/all';
import { RecycleBinContainer as Container } from '../styles/recicleBin';
import { RecycleToolbox } from '../components/RecycleToolbox';
import { Header } from '../components/Header';
import { StatusMessage } from '../components/StatusMessage';
import { UserPanel } from '../components/modals/UserPanelModal';
import { Aside } from '../components/Aside';
import { useToolboxContext } from '../context/ToolboxContext';
import { ConfirmDialog } from '../components/modals/ConfirmDialog';

const RecycleBin: FC = () => {
	const [itemsData, setItemsData] = useState([]);
	const { userPanelStatus } = useToolboxContext();
	const [isDeleteDialogActive, setIsDeleteDialogActive] = useState(false);
	const [isRestoreDialogActive, setIsRestoreDialogActive] = useState(false);
	const [isEmptyTrashDialogActive, setIsEmptyTrashDialogActive] =
		useState(false);

	return (
		<>
			<Aside />
			<Container>
				{userPanelStatus ? <UserPanel /> : null}
				{isDeleteDialogActive ? (
					<ConfirmDialog
						prompt_title='Permanently delete this item?'
						prompt_message='You will not be able to access this file anymore.'
						button_text='Confirm'
						closeModal={setIsDeleteDialogActive}
						icon={<FaTrashAlt />}
					/>
				) : null}
				{isRestoreDialogActive ? (
					<ConfirmDialog
						prompt_title='Restore all files?'
						prompt_message='All trash files will be restored to their respective original paths.'
						button_text='Yes, restore'
						closeModal={setIsRestoreDialogActive}
						icon={<FaHistory />}
					/>
				) : null}
				{isEmptyTrashDialogActive ? (
					<ConfirmDialog
						prompt_title='Do you really want to empty recycle bin?'
						prompt_message="All recycle bin files will be permanently lost and you can't undo this action."
						button_text='Yes, delete all'
						closeModal={setIsEmptyTrashDialogActive}
						icon={<FaTrashAlt />}
					/>
				) : null}

				<Header toolbar={<RecycleToolbox title='Recycle Bin' />} />
				<article className='content'>
					{itemsData.length === 0 ? (
						<StatusMessage
							icon={<FaRecycle />}
							title={'Your recycle bin is empty.'}
							message={'Nothing to recycle.'}
						/>
					) : null}
				</article>
			</Container>
		</>
	);
};

export default RecycleBin;
