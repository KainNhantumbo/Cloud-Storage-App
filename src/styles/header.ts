import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	max-width: 100%;
	height: 100px;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	box-shadow: 0 0 3px rgb(${({ theme }) => theme.shadows});
	position: fixed;
	z-index: 4500;
	padding: 15px;
	padding-left: 200px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 20px;

	.upper-container {
		.right-section {
			form {
				width: fit-content;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				position: relative;
				gap: 10px;
				border-radius: 5px;
				background: rgb(${({ theme }) => theme.inner});
				height: 35px;
				align-items: center;
				padding: 0 10px;

				input {
					border: none;
					padding: 5px;
					line-height: 1.2rem;
					width: 300px;
					font-weight: 500;
					outline: none;
				}

				button {
					border: none;
					background: none;
					border-radius: 50px;
					display: grid;
					place-content: center;
					padding: 4px;
					:hover {
						background: rgba(${({ theme }) => theme.shadows}, 0.8);
					}
				}

				svg {
					width: 20px;
					height: 20px;
					color: rgba(${({ theme }) => theme.font}, 0.8);
				}
			}
		}
	}
`;
