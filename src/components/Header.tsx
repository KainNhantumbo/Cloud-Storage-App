import { FC } from 'react';
import { BiSearch, FaCog, FaTimes, FaUserCircle, FiX } from 'react-icons/all';
import { HeaderContainer as Container } from '../styles/header';
import { Toolbox } from './Toolbox';

export const Header: FC = () => {
	return (
		<Container>
			<article className='upper-container'>
				<section className='right-section'>
					<form>
						<button type='submit'>
							<BiSearch />
						</button>
						<input type='text' placeholder='Search on drive' />
						<button type='reset'>
							<FiX />
						</button>
					</form>
				</section>
				<section className='left-section'>
					<button title='Preferences'>
						<FaCog title='Preferences' />
					</button>
					<button title='User account'>
						<FaUserCircle title='User account' />
					</button>
				</section>
			</article>
			<article className='bottom-container'>
        <Toolbox/>
      </article>
		</Container>
	);
};
