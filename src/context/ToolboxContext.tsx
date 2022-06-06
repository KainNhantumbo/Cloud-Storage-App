import { useState, useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode;
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
	folderCreator: () => void;
}

const toolboxContext = createContext<contextProps>({
	createFolderStatus: false,
	userPanelStatus: false,
	setCreateFolderStatus: () => {},
	setUserPanelStatus: () => {},
	createFolderHandler: () => {},
	folderCreator: () => {},
	userPanelHandler: () => {},
});

const ToolboxContext: FC<Props> = ({ children }) => {
	const [userPanelStatus, setUserPanelStatus] = useState(false);
	const [createFolderStatus, setCreateFolderStatus] = useState(false);

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
			setCreateFolderStatus((presvState) => !presvState);
			return;
		}
	};

	const folderCreator = (): void => {
		console.log('nananan');
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
