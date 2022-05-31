import { FC } from 'react';
import { FaCog } from 'react-icons/all';
import { SettingsContainer as Container } from '../styles/settings';

interface Props {}

const Settings: FC<Props> = (): JSX.Element => {
	return (
		<Container>
			<section className='false-header'>
				<h1>
          <FaCog/>
					<span>Settings</span>
				</h1>
			</section>
			<article className='container'></article>
		</Container>
	);
};

export default Settings;
