"use client";
import { Button, Stack, styled } from "@mui/material";

export const StyledStackContainer = styled(Stack)(({ theme }) => ({
	width: theme.spacing(134.5),
	margin: "auto",
	background: theme.palette.gray.main,
	padding: theme.spacing(10),
	borderRadius: theme.spacing(6),
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		background: "white",
		padding: theme.spacing(5),
	},
}));

export const StyledSocialButton = styled(Button)(({ theme }) => ({
	width: theme.spacing(12),
	minWidth: theme.spacing(12),
	height: theme.spacing(12),
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 0,
	borderColor: "#E4E4E7",
}));
