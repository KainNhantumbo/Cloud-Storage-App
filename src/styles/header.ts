import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	max-width: 100%;
	height: fit-content;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	box-shadow: 0 0 3px rgb(${({ theme }) => theme.shadows});
	position: fixed;
	z-index: 4500;
	padding: 15px;
	padding-left: 200px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 15px;

	.upper-container {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		position: relative;
		width: 100%;

		.right-section {
			display: flex;
			justify-content: center;
			flex-direction: row;
			margin: 0 auto;

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
					cursor: pointer;
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

		.left-section {
			display: flex;
			flex-flow: row nowrap;
			gap: 15px;
			align-items: center;
			justify-content: flex-end;

			button {
				border: none;
				background: none;
				border-radius: 50px;
				display: grid;
				place-content: center;
				padding: 5px;
				cursor: pointer;

				:hover {
					background: rgba(${({ theme }) => theme.inner}, 0.8);
					svg {
						color: rgb(${({ theme }) => theme.secondary});
						pointer-events: none;
					}
				}
			}

			svg {
				width: 25px;
				height: 25px;
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}

	.user-panel {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: transparent;
		z-index: 6000;
		display: grid;
		place-content: center;

		.panel-container {
			position: absolute;
			right: 230px;
			top: 40px;
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

			.close-panel {
				position: absolute;
				width: 28px;
				height: 28px;
				right: 5px;
				top: 5px;
				border: none;
				background: none;
				border-radius: 50px;
				display: grid;
				place-content: center;
				padding: 4px;
				cursor: pointer;
				:hover {
					background: rgba(${({ theme }) => theme.shadows}, 0.8);
				}

				svg {
					pointer-events: none;
					width: 20px;
					height: 20px;
					color: rgb(${({ theme }) => theme.font});
				}
			}

			.panel-info {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: row;
				gap: 10px;
				padding-bottom: 5px;
				border-bottom: 1px solid rgb(${({ theme }) => theme.inner});

				span {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}

				svg,
				img {
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
			}

			.panel-details,
			.panel-actions {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-start;
				gap: 10px;

				div {
					border: none;
					background: none;
					position: relative;
					border-radius: 3px;
					padding: 5px 7px;
					color: rgb(${({ theme }) => theme.font});
					border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
					font-weight: 500;
					cursor: pointer;

					:hover {
						svg {
							color: rgba(${({ theme }) => theme.secondary});
						}
						background: rgb(${({ theme }) => theme.hover});
						transition: all 200ms ease;
					}

					svg {
						position: absolute;
						width: 16px;
						height: 16px;
						top: 8px;
						left: 7px;
						color: rgba(${({ theme }) => theme.primary});
					}

					span {
						padding-left: 20px;
					}
				}
			}
		}
	}
`;
