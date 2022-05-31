import { FC } from 'react';
import { ToolboxContainer as Container } from '../styles/toolbox';
import {
	BiCloudUpload,
	BiTrash,
	BiTrashAlt,
	BsFillGridFill,
	FaBars,
	FaFolderPlus,
	FaTrash,
	FaTrashAlt,
	FaTrashRestore,
	FaTrashRestoreAlt,
} from 'react-icons/all';

interface Props {
	title?: string;
}

export const RecycleToolbox: FC<Props> = ({ title }) => {
	return (
		<Container>
			<section className='left-container'>
				<span>{title}</span>
			</section>
			<section className='right-container'>
				<div className='actions'>
					<button title='Empty Recycle Bin'>
						<FaTrashAlt />
						<span>Empty Recycle Bin</span>
					</button>
					<button title='Restore All'>
						<FaTrashRestoreAlt />
						<span>Restore All</span>
					</button>
				</div>
				<div className='switch-view'>
					<button title='Grid view'>
						<BsFillGridFill />
					</button>
					<button title='List view'>
						<FaBars />
					</button>
				</div>
			</section>
		</Container>
	);
};
