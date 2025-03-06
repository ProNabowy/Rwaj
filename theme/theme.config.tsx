"use client";
import font from "@/utils/font/font";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import components from "./components/components";
import palette from "./palette/palette";

let theme = createTheme({
	palette: palette,
	spacing: 4,
	breakpoints: {
		values: {
			xs: 375,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

theme = createTheme({
	...theme,
	typography: {
		fontFamily: font.style.fontFamily,
		displaySm: {
			fontSize: theme.typography.pxToRem(14),
		},
		displayMd: {
			fontSize: theme.typography.pxToRem(16),
			[theme.breakpoints.down("sm")]: {
				fontSize: theme.typography.pxToRem(12),
			},
		},
		displayLg: {
			fontSize: theme.typography.pxToRem(18),
			[theme.breakpoints.down("sm")]: {
				fontSize: theme.typography.pxToRem(12),
			},
		},
		displayXl: {
			fontSize: theme.typography.pxToRem(32),
			fontWeight: 600,
		},
		display2xl: {},
	},
});

theme.components = components(theme);

theme = responsiveFontSizes(theme);

export default theme;
