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
		box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
    backdrop-filter: blur(10px);
    
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
		min-width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
`;
