import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const InputLabel: ThemeComponent<Components["MuiInputLabel"]> = (
	theme
) => ({
	defaultProps: {
		shrink: true,
	},

	styleOverrides: {
		root: {
			top: "-5px",
			transform: "none",
			fontSize: theme.typography.displayMd.fontSize,
		},
	},
});
