import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

declare module "@mui/material/Button" {
	export interface ButtonPropsSizeOverrides {
		long: true;
	}
}

export const Button: ThemeComponent<Components["MuiButton"]> = (theme) => ({
	defaultProps: {
		variant: "contained",
	},
	styleOverrides: {
		root: {
			whiteSpace: "nowrap",
			borderRadius: theme.spacing(10),
		},
	},
	variants: [
		{
			props: { size: "medium" },
			style: {
				padding: theme.spacing(1, 4),
			},
		},
		{
			props: { size: "large" },
			style: {
				padding: theme.spacing(2.5, 4.5),
			},
		},
		{
			props: { size: "long" },
			style: {
				padding: theme.spacing(2.5, 12),
			},
		},
		{
			props: { variant: "contained" },
			style: {
				backgroundColor: theme.palette.primary.main,
				boxShadow: "none!important",
				fontWeight: 600,
				textTransform: "none",
				"&:hover": {
					backgroundColor: "#651fd8",
				},
				"&:disabled": {
					backgroundColor: theme.palette.primary.main,
					color: "white",
					userSelect: "not-allowed",
				},
			},
		},
		{
			props: { variant: "outlined" },
			style: {
				fontWeight: 600,
				textTransform: "none",
				boxShadow: "none!important",
				borderColor: theme.palette.primary.light,
				color: theme.palette.primary.dark,
				"&:hover": {
					backgroundColor: theme.palette.primary.darkest,
					borderColor: theme.palette.primary.darkest,
					color: theme.palette.primary.main,
				},
			},
		},
		{
			props: { variant: "text" },
			style: {
				backgroundColor: "transparent",
				boxShadow: "none!important",
				fontWeight: 600,
				textTransform: "none",
				color: theme.palette.primary.dark,
				"&:hover": {
					backgroundColor: "transparent",
					color: theme.palette.primary.main,
				},
				"&:disabled": {
					backgroundColor: theme.palette.gray.lightest,
					color: theme.palette.gray.main,
				},
			},
		},
	],
});
