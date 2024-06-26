import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Text = styled.span`
	font-size: 20px;
	color: #636363;
`;
export const Breadcrumb = styled(Link)`
	font-size: 20px;
	color: #636363;
`;
export const Arrow = styled.span`
	font-size: 20px;
	color: #636363;
	margin-left: 8px;
	margin-right: 8px;
`;

export const Breadcrumbs = ({ links }) => {

	console.log("looooogs");
	return (
		<>
			{links.map((link, index) => {
				if (index < links.length - 1) {
					return (
						<div>
							<Breadcrumb to={link.to}>{link.label}</Breadcrumb>
							<Arrow />
						</div>
					);
				}
				return <Text>{link.label}</Text>;
			})}
		</>
	);
};
