import styled from 'styled-components';

export const StatusMessageContainer = styled.section`
	margin-top: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: rgb(${({ theme }) => theme.secondary});
	font-weight: 500;
	font-size: 1.2rem;
	svg {
		width: 90px;
		height: 90px;
	}
	.info {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;
