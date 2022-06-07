import { FC } from 'react';
import { SortContainer as Container } from '../../styles/sortOptions';
import {
	FaSortAlphaDown,
	FaSortAlphaUp,
	FaSortAmountDown,
	FaSortAmountUp,
} from 'react-icons/all';
import { useToolboxContext } from '../../context/ToolboxContext';

export const SortOptions: FC = (): JSX.Element => {
	const { handleSort, setIsSortOptionsActive } = useToolboxContext();
	return (
		<Container>
			<section className='panel-container' >
				<div className='panel-actions'>
					<label htmlFor='name'>
						<FaSortAlphaDown />
						<span>Sort by name</span>
						<input type='radio' name='sort-options' id='name' value={'name'} onChange={e => handleSort(e)} />
					</label>

					<label htmlFor='name-asc'>
						<FaSortAlphaUp />
						<span>Sort By name (asc)</span>
						<input
							type='radio'
							name='sort-options'
							id='name-asc'
							value={'-name'}
							onChange={e => handleSort(e)}
						/>
					</label>

					<label htmlFor='date'>
						<FaSortAmountDown />
						<span>Sort By date</span>
						<input
							type='radio'
							name='sort-options'
							id='date'
							value={'createdAt'}
							onChange={e => handleSort(e)}
						/>
					</label>

					<label htmlFor='date-asc'>
						<FaSortAmountUp />
						<span>Sort By Date (asc)</span>
						<input
							type='radio'
							name='sort-options'
							id='date-asc'
							value={'-createdAt'}
							onChange={e => handleSort(e)}
						/>
					</label>
				</div>
			</section>
		</Container>
	);
};
