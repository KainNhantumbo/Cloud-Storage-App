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
		padding: 90px 20px 50px 20px;

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

		.user-container {
			border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
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
				}
			}
		}
	}
`;
