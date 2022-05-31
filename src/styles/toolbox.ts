import styled from 'styled-components';

export const ToolboxContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.left-container {
		font-weight: 500;
	}

	.right-container {
		display: flex;
		justify-content: flex-start;
		flex-flow: row nowrap;
		gap: 15px;

		.actions {
			display: flex;
			justify-content: flex-start;
			flex-flow: row nowrap;
			gap: 10px;

			button {
				border: none;
				background: none;
				position: relative;
				border-radius: 3px;
				padding: 5px 7px;
				background: rgb(${({ theme }) => theme.inner});
				color: rgb(${({ theme }) => theme.font});
				font-weight: 500;
				cursor: pointer;

				:hover {
					background: rgb(${({ theme }) => theme.hover});
					transition: all 200ms ease;
				}

				svg {
					position: absolute;
					width: 16px;
					height: 16px;
					top: 6px;
					left: 7px;
				}

				span {
					padding-left: 20px;
				}
			}
		}

		.switch-view {
			display: flex;
			justify-content: flex-start;
			flex-flow: row nowrap;
			gap: 5px;

			button {
				border: none;
				background: none;
				border-radius: 3px;
				padding: 5px;
				cursor: pointer;
				display: grid;
				place-content: center;
				background: rgb(${({ theme }) => theme.inner});

				:hover {
					color: rgba(${({ theme }) => theme.secondary});
					background: rgb(${({ theme }) => theme.hover});
					transition: all 200ms ease;
				}

				svg {
					width: 16px;
					height: 16px;
					color: rgb(${({ theme }) => theme.font});
				}
			}
		}
	}
`;
