import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AsideContainer as Container } from '../styles/aside';
import {
	BiTrash,
	BiTrashAlt,
	BsTrash,
	FaClock,
	FaCloud,
	FaTrash,
	TiCloudStorage,
	TiTrash,
} from 'react-icons/all';
export const Aside: FC = () => {
	return (
		<Container>
			<div>
				<h1>My Drive</h1>
				<section>
					<h3>File Manager</h3>
					<ul>
						<li>
							<Link to={'/'}>
								<FaCloud />
								<span>Cloud Drive</span>
							</Link>
						</li>
						<li>
							<Link to={'/'}>
								<FaClock />
								<span>Recents</span>
							</Link>
						</li>
						<li>
							<Link to={'/'}>
								<BiTrash />
								<span>Rubbish Bin</span>
							</Link>
						</li>
					</ul>
				</section>
				<section>
					<h3>Storage</h3>
					<div>
						<span>Free</span>
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
