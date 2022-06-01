import styled from 'styled-components';

export const AsideContainer = styled.aside`
	width: 180px;
	height: 100vh;
	max-height: 100vh;
	padding: 15px;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	box-shadow: 0 0 3px rgb(${({ theme }) => theme.shadows});
	position: fixed;
	z-index: 5000;

	.items-container {
		height: 85%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		gap: 20px;
	}

	h1 {
		line-height: 1rem;
		font-size: 1.4rem;
		font-weight: 500;
		margin-bottom: 40px;
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

	.upper-section {
		display: flex;
		flex-direction: column;
		gap: 15px;
		justify-content: flex-start;

		h3 {
			text-transform: uppercase;
			font-weight: 500;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 8px;
			justify-content: flex-start;

			li {
				width: 100%;
				padding: 8px 10px;
				position: relative;
				border-radius: 3px;
				:hover {
					background: rgb(${({ theme }) => theme.hover});
					transition: all 200ms ease;
				}

				svg {
					position: absolute;
					width: 18px;
					height: 18px;
					top: 7px;
					left: 8px;
					color: rgb(${({ theme }) => theme.primary});
				}

				span {
					padding-left: 25px;
					font-weight: 400;
				}
			}
		}
	}

	.bottom-section {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 15px;

		h3 {
			text-transform: uppercase;
			font-weight: 500;
		}

		span {
			font-weight: 500;
		}
	}
`;
