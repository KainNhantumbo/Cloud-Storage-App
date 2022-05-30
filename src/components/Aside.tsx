import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AsideContainer as Container } from '../styles/aside';
import { BiTrash, FaClock, FaCloud, FaTrashAlt } from 'react-icons/all';

export const Aside: FC = () => {
	return (
		<Container>
			<h1>My Drive</h1>
			<div className='items-container'>
				<section className='upper-section'>
					<h3>
						<span>File Manager</span>
					</h3>
					<ul>
						<Link to={'/'}>
							<li>
								<FaCloud />
								<span>Cloud Drive</span>
							</li>
						</Link>
						<Link to={'/'}>
							<li>
								<FaClock />
								<span>Recents</span>
							</li>
						</Link>
						<Link to={'/'}>
							<li>
								<FaTrashAlt />
								<span>Rubbish Bin</span>
							</li>
						</Link>
					</ul>
				</section>
				<section className='bottom-section'>
					<h3>
						<span>Storage</span>
					</h3>
					<div>
						<span>Plan: Free</span>
					</div>
					<div>
						<input readOnly type='range' value={'20'} max={'100'} min={'0'} />
					</div>
					<div>
						<span>20GB of 100GB</span>
					</div>
				</section>
			</div>
		</Container>
	);
};
