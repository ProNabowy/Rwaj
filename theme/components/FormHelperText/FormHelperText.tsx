import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const FormHelperText: ThemeComponent<Components["MuiFormHelperText"]> = (
	theme
) => ({
	styleOverrides: {
		root: {
			fontSize: theme.typography.displaySm.fontSize,
			marginLeft: 0,
		},
	},
});
