import { useState, useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';
import { v4 as uuidV4 } from 'uuid';

interface Props {
	children: ReactNode;
}

interface FolderProps {
	id: string;
	name: string;
	type: string;
	createdAt: string | number;
	content: object[];
}
interface contextProps {
	userPanelStatus: boolean;
	createFolderStatus: boolean;
	setUserPanelStatus: React.Dispatch<React.SetStateAction<boolean>>;
	setCreateFolderStatus: React.Dispatch<React.SetStateAction<boolean>>;
	createFolderHandler: (
		e: React.MouseEvent<HTMLElement, MouseEvent> | any
	) => void;
	userPanelHandler: (
		e: React.MouseEvent<HTMLElement, MouseEvent> | any
	) => void;
	handleFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
	folderCreator: (folder_name: string) => void;
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
	errorMessage: string;
	isSortOptionsActive: boolean;
	setIsSortOptionsActive: React.Dispatch<React.SetStateAction<boolean>>;
	handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const toolboxContext = createContext<contextProps>({
	createFolderStatus: false,
	userPanelStatus: false,
	setCreateFolderStatus: () => {},
	setUserPanelStatus: () => {},
	createFolderHandler: () => {},
	folderCreator: () => {},
	userPanelHandler: () => {},
	handleFiles: () => {},
	files: [],
	setFiles: () => {},
	errorMessage: '',
	isSortOptionsActive: false,
	setIsSortOptionsActive: () => {},
	handleSort: () => {},
});

const ToolboxContext: FC<Props> = ({ children }) => {
	const [userPanelStatus, setUserPanelStatus] = useState(false);
	const [createFolderStatus, setCreateFolderStatus] = useState(false);
	const [files, setFiles] = useState<File[]>([]);
	const [errorMessage, setErrorMessage] = useState('');
	const fileTypes: string[] = [
		'image',
		'video',
		'application',
		'text',
		'audio',
		'',
	];

	const userPanelHandler = (
		e: React.MouseEvent<HTMLElement, MouseEvent> | any
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
			setCreateFolderStatus((prevState) => !prevState);
			return;
		}
	};

	const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList: FileList | null = e.target.files;
		const fileArr: File[] = [];
		Object.values(fileList || {}).forEach((value) => {
			fileArr.push(value);
		});
		setFiles(fileArr);
		console.log(fileArr);
	};

	// creates new folders
	const folderCreator = (folder_name: string): void => {
		const folders: FolderProps[] = [];
		let folder_name_conflict: boolean = false;
		if (folder_name.length < 1) {
			errorProvider('Please type a folder name.');
			return;
		}
		if (folders.length > 0) {
			folders.forEach((folder) => {
				if (folder.name === folder_name) {
					folder_name_conflict = true;
					return errorProvider('Folder already exists.');
				}
			});
		}
		// if folder name already exists, stops the executuion
		if (folder_name_conflict) return;
		const new_folder: FolderProps = {
			id: uuidV4(),
			name: folder_name,
			type: 'folder',
			createdAt: new Date().toUTCString(),
			content: [],
		};
		folders.push(new_folder);
		console.log(folders);
	};

	const errorProvider = (error: string): void => {
		setErrorMessage(error);
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
	};

	const [isSortOptionsActive, setIsSortOptionsActive] = useState(true);
	const handleSort = (e: React.ChangeEvent<HTMLInputElement>): void => {
		
	};
	return (
		<toolboxContext.Provider
			value={{
				userPanelStatus,
				createFolderStatus,
				setCreateFolderStatus,
				setUserPanelStatus,
				folderCreator,
				createFolderHandler,
				userPanelHandler,
				handleFiles,
				files,
				setFiles,
				errorMessage,
				isSortOptionsActive,
				setIsSortOptionsActive,
				handleSort,
			}}
		>
			{children}
		</toolboxContext.Provider>
	);
};

export const useToolboxContext = (): contextProps => {
	const tools = useContext(toolboxContext);
	return tools;
};

export default ToolboxContext;
