import { useState, useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const toolboxContext = createContext({});
const ToolboxContext: FC<Props> = ({ children }) => {
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

export const useToolboxContext = (): unknown | any => {
	const tools = useContext(toolboxContext);
	return tools;
};

export default ToolboxContext;
