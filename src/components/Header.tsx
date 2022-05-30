import { FC } from 'react';
import { BiSearch, BiX, BsX, FaSearch, FaXbox, FiX } from 'react-icons/all';
import { HeaderContainer as Container } from '../styles/header';

export const Header: FC = () => {
	return (
		<Container>
			<article className='upper-container'>
				<section className='right-section'>
					<form>
						<BiSearch />
						<input type='text' placeholder='Search on drive' />
						<button type='submit'>
							<FiX />
						</button>
					</form>
				</section>
				<section className='left-section'>
					<div title='Preferences'></div>
					<div title='User account'></div>
				</section>
			</article>
			<article className='bottom-container'></article>
		</Container>
	);
};
