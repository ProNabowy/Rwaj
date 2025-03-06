import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const TextField: ThemeComponent<Components["MuiTextField"]> = (
	theme
) => ({
	defaultProps: {
		variant: "standard",
	},
	styleOverrides: {
		root: {
			position: "relative",
			background: "white",
			"& .MuiInputBase-root": {
				borderRadius: theme.spacing(2),
			},
			"& input": {
				[theme.breakpoints.down("sm")]: {
					padding: theme.spacing(2),
				},
			},
			"& fieldset": {
				borderColor: "#D0D5DD",
			},
			":hover": {
				"& fieldset": {
					borderColor: `${theme.palette.primary.main} !important`,
				},
			},
		},
	},
});
