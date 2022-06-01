import { FC } from 'react';
import { ToolboxContainer as Container } from '../styles/toolbox';
import {
	BiCloudUpload,
	BsFillGridFill,
	FaBars,
	FaFolderPlus,
} from 'react-icons/all';
interface Props {
	title?: string;
}

export const Toolbox: FC<Props> = ({ title }): JSX.Element => {
	return (
		<Container>
			<section className='left-container'>
				<span>{title}</span>
			</section>
			<section className='right-container'>
				<div className='actions'>
					<button title='Create a new folder'>
						<FaFolderPlus />
						<span>Create folder</span>
					</button>
					<button title='Upload files'>
						<BiCloudUpload />
						<span>Upload files</span>
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
