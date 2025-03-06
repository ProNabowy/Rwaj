import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const Input: ThemeComponent<Components["MuiInput"]> = (theme) => ({
	defaultProps: {
		disableUnderline: true,
	},
	styleOverrides: {
		root: {
			borderWidth: 1,
			borderStyle: "solid",
			borderRadius: theme.spacing(2),
			padding: theme.spacing(2.5, 3.5),
			[theme.breakpoints.down("sm")]: {
				padding: theme.spacing(2),
			},
		},

		input: {
			padding: 0,
		},
	},
});
