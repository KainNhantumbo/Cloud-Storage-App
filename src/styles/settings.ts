import styled from 'styled-components';

export const SettingsContainer = styled.main`
	width: 100%;
	min-height: 100%;
	padding-left: 180px;

	.false-header {
		position: fixed;
		left: 0;
		top: 0;
		padding: 10px 0 10px 200px;
		width: 100%;
		height: fit-content;
		background: rgb(${({ theme }) => theme.backgroundAlt});
		box-shadow: 0 0 3px rgb(${({ theme }) => theme.shadows});
		backdrop-filter: blur(10px);
		z-index: 4000;

		h1 {
			line-height: 1rem;
			font-size: 1.4rem;
			font-weight: 500;
			color: rgb(${({ theme }) => theme.primary});
			user-select: none;
			position: relative;

			span {
				padding-left: 28px;
			}

			svg {
				position: absolute;
				width: 22px;
				height: 22px;
				top: -3px;
				left: 0px;
			}
		}
	}

	.content {
		min-height: 100vh;
		width: 100%;
		max-width: 100%;
		padding: 90px 20px 0 20px;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		.title {
			position: relative;
			svg {
				width: 20px;
				height: 20px;
				position: absolute;
				top: -2px;
				left: 0;
				color: rgb(${({ theme }) => theme.primary});
			}
			span {
				padding-left: 25px;
				text-transform: uppercase;
				font-weight: 500;
			}
		}
		h3 {
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

		.user-container {
			border-top: 1px solid rgb(${({ theme }) => theme.inner});
			padding: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			justify-content: flex-start;

			.section-container {
				display: grid;
				grid-template-columns: 1fr 2fr;
				align-items: center;

				.user-avatar {
					margin: 0 auto;
					svg,
					img {
						width: 70px;
						height: 70px;
					}
				}

				.user-details {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					gap: 10px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}

		.account-container {
			border-top: 1px solid rgb(${({ theme }) => theme.inner});
			padding: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			justify-content: flex-start;

			button {
				border: none;
				background: none;
				border-radius: 3px;
				background: rgb(${({ theme }) => theme.inner});
				position: relative;
				padding: 7px 10px;
				color: rgb(${({ theme }) => theme.font});
				width: fit-content;
				cursor: pointer;

				:hover {
					background: rgb(${({ theme }) => theme.hover});
					transition: all 200ms ease-in-out;
				}

				svg {
					width: 18px;
					height: 18px;
					position: absolute;
					top: 7px;
					left: 7px;
				}
				span {
					padding-left: 20px;
					font-weight: 500;
				}
			}

			.title > span {
				color: red;
			}

			.user-actions,
			.info {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				gap: 10px;

				h3 {
					background: rgb(${({ theme }) => theme.inner});
					padding: 2px 5px;
					border-radius: 3px;
					border-left: 2px solid red;
					border-right: 2px solid red;
					svg {
						left: 8px;
						top: 5px;
						color: rgb(${({ theme }) => theme.primary})
					}
				}
				.info {
					p {
						line-height: 1.6rem;
					}
				}

				i {
					color: rgb(${({ theme }) => theme.primary});
				}
			}
		}

		.about-container {
			border-top: 1px solid rgb(${({ theme }) => theme.inner});
			padding: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			justify-content: flex-start;

			.about-section {
				display: grid;
				grid-template-columns: 1fr 2fr;
				align-items: center;
				gap: 10px;
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
				.app-info {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					gap: 10px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
`;
