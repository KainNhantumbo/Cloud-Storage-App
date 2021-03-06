import { FC , useState} from 'react';
import { FaArrowLeft, FaFolder, FaFolderPlus } from 'react-icons/all';
import { CreateFolderContainer as Container } from '../../styles/createFolder';
import { useToolboxContext } from '../../context/ToolboxContext';

export const CreateFolder: FC = (): JSX.Element => {
	const { folderCreator, createFolderHandler: canceler, errorMessage} = useToolboxContext();
	const [folderName, setFolderName] = useState('');

	return (
		<Container className='dialog-modal' onClick={(e) => canceler(e)}>
			<div className='dialog-prompt'>
				<div className='prompt-info'>
					<FaFolder />
					<span className='prompt-title'>Create new folder</span>
					<input
						className='prompt-input'
						name='folder-name'
						title='Folder name input'
						type={'text'}
						placeholder='Type folder name here'
						onChange={e => setFolderName(e.target.value)}
					/>
				</div>
				<span className='error-message' >{errorMessage}</span>
				<div className='prompt-actions'>
					<button className='prompt-cancel' onClick={(e) => canceler(e)}>
						<FaArrowLeft />
						<span>Cancel</span>
					</button>
					<button onClick={(e) => folderCreator(folderName)}>
						<FaFolderPlus />
						<span>Create</span>
					</button>
				</div>
			</div>
		</Container>
	);
};
