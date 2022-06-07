import styled from 'styled-components';

export const SortContainer = styled.section`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: se;
	z-index: 10000;
	display: grid;
	place-content: center;
	background: transparent;

	.panel-container {
		position: absolute;
		right: 60px;
		top: 100px;
		width: 250px;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
		background: rgb(${({ theme }) => theme.backgroundAlt});
		padding: 10px;
		border-radius: 10px;

		span {
			line-height: 1.4rem;
			font-size: 0.9rem;
			font-weight: 500;
		}

		.panel-details,
		.panel-actions {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			display: flex;
			flex-flow: column nowrap;
			justify-content: flex-start;

			label {
				border: none;
				background: none;
				position: relative;
				border-radius: 3px;
				padding: 8px 7px;
				color: rgb(${({ theme }) => theme.font});
				border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
				font-weight: 500;
				cursor: pointer;
				text-transform: capitalize;

				:hover {
					background: rgb(${({ theme }) => theme.hover});
					transition: all 200ms ease;
				}

				input[type='radio'] {
					position: absolute;
					top: 12px;
					right: 8px;
					appearance: none;
					margin: 0;
					background: rgb(${({ theme }) => theme.background});
					width: 16px;
					height: 16px;
					border: 2px solid rgb(${({ theme }) => theme.secondary});
					border-radius: 50%;
					display: grid;
					place-content: center;

					:checked::before {
						content: '';
						width: 8px;
						height: 8px;
						background: rgb(${({ theme }) => theme.primary});
						border-radius: 50%;
						margin: auto;
					}
				}

				svg {
					position: absolute;
					width: 18px;
					height: 18px;
					top: 10px;
					left: 7px;
					color: rgb(${({ theme }) => theme.primary});
				}

				span {
					padding-left: 25px;
				}
			}
		}
	}
`;
