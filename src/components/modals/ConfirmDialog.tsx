import { ConfirmModalContainer as Container } from '../../styles/comfirm-modal';
import { FC } from 'react';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';

interface Props {
  prompt_title :string
}

export const ConfirmDialog: FC<Props> = ({prompt_title}): JSX.Element => {
	return (
		<Container>
			<section className='dialog-modal' onClick={(e) => {}}>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						<span className='prompt-title'>{prompt_title}</span>
						<p className='prompt-message'>
							Your account will be deleted and all your files will be
							permanently lost.
						</p>
					</div>
					<div className='prompt-actions'>
						<button
							className='prompt-cancel'
							onClick={(e) => {}}
						>
							<FaArrowLeft/>
							<span>No, cancel</span>
						</button>
						<button>
							<FaTrashAlt />
							<span>Yes, delete my account</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
};
