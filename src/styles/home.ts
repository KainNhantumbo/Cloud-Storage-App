import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	min-height: 100%;

	.content {
		padding: 110px 0 0 180px;
		min-height: 100vh;
		min-width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.user-panel {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: se;
		z-index: 10000;
		display: grid;
		background: rgba(${({ theme }) => theme.secondary}, 0.5);

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
					background: rgba(${({ theme }) => theme.hover}, 0.8);
				}

				svg {
					pointer-events: none;
					width: 20px;
					height: 20px;
					color: rgb(${({ theme }) => theme.font});
					transition: all 200ms ease-in-out;
				}
			}

			.panel-info {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: row;
				gap: 10px;
				padding-bottom: 10px;
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

				div {
					border: none;
					background: none;
					position: relative;
					border-radius: 3px;
					padding: 8px 7px;
					color: rgb(${({ theme }) => theme.font});
					border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
					font-weight: 500;
					cursor: pointer;

					:hover {
						background: rgb(${({ theme }) => theme.hover});
						transition: all 200ms ease;
					}

					svg {
						position: absolute;
						width: 18px;
						height: 18px;
						top: 10px;
						left: 7px;
						color: rgba(${({ theme }) => theme.primary});
					}

					span {
						padding-left: 25px;
					}
				}
			}
		}
	}
`;
