import styled from 'styled-components';

export const LoginContainer = styled.main`
	button {
		border: none;
		background: none;
		border-radius: 3px;
		position: relative;
		padding: 7px 10px;
		color: rgb(${({ theme }) => theme.text});
		background: rgb(${({ theme }) => theme.primary});
		width: fit-content;
		cursor: pointer;

		:hover {
			box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
			transition: all 200ms ease-in-out;
		}

		svg {
			width: 18px;
			height: 18px;
			position: absolute;
			top: 7px;
			left: 7px;
			pointer-events: none;
		}
		span {
			padding-left: 20px;
			font-weight: 500;
			pointer-events: none;
		}
	}

	.false-header {
		.logo {
			position: relative;
			color: rgb(${({ theme }) => theme.primary});

			svg {
				position: absolute;
				width: 50px;
				height: 50px;
				top: -8px;
				left: 0;
			}
			span {
				font-size: 2rem;
				font-weight: 600;
				padding-left: 60px;
			}
		}
	}
`;
