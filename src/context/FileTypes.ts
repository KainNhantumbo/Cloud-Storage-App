import { IconType } from 'react-icons';
import { FaUser } from 'react-icons/all';

interface FileTypes {
	extension: string[];
	icon: IconType;
}

interface FileObject {
	id: string;
	name: string;
	size: string;
	createdAt: string;
	createdBy: string;
	updatedAt: string;
	file: BlobPart;
	extension: string;
}

interface FolderProps {
	id: string;
	name: string;
	createdAt: Date;
	createdBy: string;
	updatedAt: string;
	content: object[];
}

export const fileTypes: FileTypes = {
	extension: ['.png'],
	icon: FaUser,
};
