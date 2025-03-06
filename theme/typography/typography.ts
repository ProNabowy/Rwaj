export interface CustomTypographyVariants {
	displaySm: React.CSSProperties;
	displayMd: React.CSSProperties;
	displayLg: React.CSSProperties;
	displayXl: React.CSSProperties;
	display2xl: React.CSSProperties;
}

export interface CustomTypographyPropsVariantOverrides {
	displaySm: true;
	displayMd: true;
	displayLg: true;
	displayXl: true;
	display2xl: true;
}

declare module "@mui/material/styles" {
	interface TypographyVariants extends CustomTypographyVariants {}

	interface TypographyVariantsOptions extends CustomTypographyVariants {}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides
		extends CustomTypographyPropsVariantOverrides {}
}
