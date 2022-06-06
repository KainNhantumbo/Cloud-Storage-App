import { FC, useState } from 'react';
import { ToolboxContainer as Container } from '../styles/toolbox';
import {
	BiCloudUpload,
	BsFillGridFill,
	FaBars,
	FaFolderPlus,
	FcAbout,
	FcAudioFile,
	FcDocument,
	FcFile,
	FcFolder,
	FcImageFile,
	FcInfo,
	FcOpenedFolder,
	FcVideoFile,
} from 'react-icons/all';
import { useToolboxContext } from '../context/ToolboxContext';
interface Props {
	title?: string;
}

export const Toolbox: FC<Props> = ({ title }): JSX.Element => {
	const { setCreateFolderStatus, handleFiles } = useToolboxContext();


	return (
		<Container>
			<FcFile />
			<FcDocument/>
			<FcInfo />
			<FcAbout />
			<FcAudioFile />
			<FcOpenedFolder />
			<FcFolder />
			<FcVideoFile />
			<FcImageFile />
			<section className='left-container'>
				<span>{title}</span>
			</section>
			<section className='right-container'>
				<div className='actions'>
					<button
						title='Create a new folder'
						onClick={(e) => setCreateFolderStatus((prevState) => !prevState)}
					>
						<FaFolderPlus />
						<span>Create folder</span>
					</button>

					<div title='Upload files'>
						<BiCloudUpload />
						<label>Upload files</label>
						<input
							type='file'
							name='file'
							id='file'
							multiple
							onChange={(e) => handleFiles(e)}
						/>
					</div>
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
