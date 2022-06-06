import { IconType } from 'react-icons';
import { FaUser } from 'react-icons/all';

interface FileTypes {
	type: string[];
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
	type: string;
}



export const fileTypes: FileTypes = {
	type: ['image/png',],
	icon: FaUser,
};
