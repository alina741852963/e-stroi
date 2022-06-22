import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { fetchProducts } from "../fetchers/fetchProducts";
import { NoProducts } from "../general/NoCaseImages";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 33%);
	gap: 15px;
`;

export const ProductItem = styled.div`
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

export function ProductsGrid({ categoryId }) {
	const [products, setProducts] = useState();

	useEffect(() => {
		fetchProducts(categoryId).then((products) => {
			setProducts(products);
		});
	}, []);

	return (
		<>
			{products?.content?.length === 0 ? (
				<NoProducts />
			) : (
				<Grid>
					{products?.content?.map((product) => (
						<ProductItem>
							<span>{product.name}</span>
						</ProductItem>
					))}
				</Grid>
			)}
		</>
	);
}
