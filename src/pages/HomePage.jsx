import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCategories } from "../fetchers/fetchCategories";
import Container from "@mui/material/Container";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import { Grid, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { fetchProducts } from "../fetchers/fetchProducts";
import { CategoryItem } from "../components/CategoryItem";

const StyledTreeItem = styled(TreeItem)`
	overflow: hidden;
	list-style: none;
	text-decoration: none;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400px;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.25px;
	color: #5e6366;

	/* .MuiTreeItem-content.Mui-selected {
		background: #367bf5;
	} */
	.MuiTreeItem-content {
		height: 40px;
	}
`;

const TreeViewWrapper = styled("div")`
	width: 400px;
	display: grid;
`;

const renderTree = (nodes) => {
	return (
		<Link to={nodes.childCount}>
			<StyledTreeItem
				key={nodes.childCount}
				nodeId={nodes.id}
				label={
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
						}}
					>
						<Typography
							variant="body2"
							sx={{ fontWeight: "inherit", flexGrow: 1 }}
						>
							{nodes.name}
						</Typography>
						<Box
							sx={{
								borderRadius: 16,
								background: "#ABABAB",
								width: 24,
								height: 24,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{nodes.childCount}
						</Box>
					</Box>
				}
			>
				{Array.isArray(nodes.childCategories)
					? nodes.childCategories.map((node) => renderTree(node))
					: null}
			</StyledTreeItem>
		</Link>
	);
};

export const HomePage = () => {
	const [category, setCategory] = useState();
	// const [searchParams] = useSearchParams();
	const [subcategory, setSubcategory] = useState();

	useEffect(() => {
		fetchCategories().then((categories) => {
			setCategory({
				name: "Категории",
				id: "1",
				childCategories: categories,
			});
		});
	}, []);

	useEffect(() => {
		fetchProducts().then((subcategory) => {
			setSubcategory(subcategory);
		});
	}, []);

	return (
		<>
			<Container style={{ marginTop: "20px" }}>
				<TreeViewWrapper>
					<h1>Категории</h1>
					<TreeView
						aria-label="rich object"
						defaultCollapseIcon={<ExpandMoreIcon />}
						defaultExpanded={["root"]}
						defaultExpandIcon={<ChevronRightIcon />}
						sx={{
							"&.MuiTreeView-root .MuiTypography-root li": {
								paddingRight: "20px",
							},
						}}
					>
						{category ? renderTree(category) : null}
					</TreeView>

					<Grid
						container
						spacing={3}
						sx={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 90%)",
							flexDirection: "row",
							padding: "10px",
							gap: "15px",
							position: "absolute",
							width: "295px",
							height: "88px",
							// background: "#EAEAEA",
							borderRadius: "4px",
							marginLeft: "400px",
						}}
					>
						{subcategory?.content?.map((subcategory) => (
							<CategoryItem>{subcategory.name}</CategoryItem>
						))}
					</Grid>
				</TreeViewWrapper>
			</Container>
		</>
	);
};
