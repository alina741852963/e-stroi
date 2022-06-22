import styled from "@emotion/styled";

export const CategoryItem = styled.div`
	position: relative;
	min-height: 60px;
	background: #eaeaea;
	display: flex;
	align-items: center;
	& span {
		margin-left: 10px;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-right: 44px;
	}
`;

export const CategoryCounter = styled.div`
	position: absolute;
	right: 0;
	margin: 0 10px;
	width: 32px;
	height: 32px;
	background: #ababab;
	border-radius: 16px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;
