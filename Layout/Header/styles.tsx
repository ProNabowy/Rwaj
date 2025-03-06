"use client";
import { Button, Stack, styled } from "@mui/material";
import Image from "next/image";

export const StyledStackContainer = styled(Stack)(({ theme }) => ({
	justifyContent: "space-between",
	alignItems: "center",
	padding: theme.spacing(6, 0),
}));

export const StyledImage = styled(Image)(({ theme }) => ({
	width: theme.spacing(25.5),
	height: theme.spacing(9.37),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	color: "#344054",
	":hover": { color: theme.palette.primary.main },
}));
