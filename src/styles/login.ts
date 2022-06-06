import styled from 'styled-components';

export const LoginContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
	min-height: 90vh;
	width: 100%;
	max-width: 100vw;

	.false-header {
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: row wrap;
		gap: 0 20px;
		max-width: 1000px;
		margin: 0 auto;

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

		.slogan {
			font-weight: 500;
			line-height: 1.4rem;
			user-select: none;

			span {
				color: rgb(${({ theme }) => theme.font});
			}
			i {
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}

	.main-article {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: 0 auto;
		padding: 0 10px;

		.form-container {
			width: 100%;
			max-width: 700px;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			flex-direction: column;
			box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
			border-bottom: 3px solid rgb(${({ theme }) => theme.primary});
			border-radius: 10px;
			padding: 40px;

			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			.message {
				line-height: 1.4rem;
				font-weight: 500;
				font-size: 1.2rem;
				border-left: 3px solid rgb(${({ theme }) => theme.primary});
				padding-left: 5px;
			}

			form {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				gap: 15px;

				label {
					font-weight: 500;
					display: inline;
					position: relative;
					line-height: 1.4rem;

					svg {
						width: 16px;
						height: 16px;
						position: absolute;
						top: 2px;
						left: 0;
						color: rgb(${({ theme }) => theme.secondary});
					}
					span {
						padding-left: 25px;
						font-weight: 500;
					}
				}

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

				input {
					border: none;
					padding: 5px;
					line-height: 1.2rem;
					font-weight: 500;
					outline: none;
					border-radius: 3px;
					border: 1px solid transparent;

					::placeholder {
						color: rgba(${({ theme }) => theme.font}, 0.5);
						font-size: 0.9rem;
					}
					:focus {
						border: 1px solid rgb(${({ theme }) => theme.primary});
						box-shadow: 0 0 10px rgba(${({ theme }) => theme.primary}, 0.5);
					}
				}

				.errorMessage {
					color: red;
					font-weight: 500;
				}

				.actions {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					gap: 10px;
				}
			}
		}
	}

	.false-footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 10px;
		padding: 10px;

		div {
			font-weight: 500;
			position: relative;
			line-height: 1.4rem;
			user-select: none;

			svg {
				width: 22px;
				height: 22px;
				position: absolute;
				top: 0;
				left: 0;
				color: rgb(${({ theme }) => theme.primary});
			}
			span {
				padding-left: 28px;
				font-weight: 500;
			}
		}
	}
`;
