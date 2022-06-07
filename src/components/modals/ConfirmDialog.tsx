import { ConfirmModalContainer as Container } from '../../styles/comfirm-modal';
import { FC } from 'react';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';


interface Props {
	prompt_title: string;
	prompt_message: string;
	button_text: string;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ConfirmDialog: FC<Props> = ({
	prompt_title,
	prompt_message,
	button_text,
	closeModal
}): JSX.Element => {

	return (
		<Container>
			<section className='dialog-modal' onClick={(e) => {}}>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						<span className='prompt-title'>{prompt_title}</span>
						<p className='prompt-message'>{prompt_message}</p>
					</div>
					<div className='prompt-actions'>
						<button className='prompt-cancel' onClick={(e) => {}}>
							<FaArrowLeft />
							<span>No, cancel</span>
						</button>
						<button>
							<FaTrashAlt />
							<span>{button_text}</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
};
