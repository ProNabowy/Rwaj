interface AppPalette {}

declare module "@mui/material/styles" {
	interface SimplePaletteColorOptions {
		lightest?: string;
		darkest?: string;
		main?: string;
		darker?: string;
	}

	interface Palette extends AppPalette {
		gray: Omit<SimplePaletteColorOptions, "dark">;
	}

	interface PaletteOptions extends AppPalette {
		gray: Omit<SimplePaletteColorOptions, "dark">;
	}

	interface PaletteColor extends SimplePaletteColorOptions {}
}

export {};
