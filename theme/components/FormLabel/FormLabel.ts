import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const FormLabel: ThemeComponent<Components["MuiFormLabel"]> = (
	theme
) => ({
	styleOverrides: {
		root: {
			color: "#344054",
			marginBottom: theme.spacing(1.5),
			fontWeight: 500,
			fontSize: theme.typography.displayMd.fontSize,
			[theme.breakpoints.down("sm")]: {
				fontSize: theme.typography.pxToRem(14),
			},
			"&.Mui-focused": {
				color: theme.palette.gray.main,
				transition: "color 0.3s ease-in-out",
			},

			"&.Mui-disabled": {
				color: theme.palette.gray.darkest,
			},
		},
	},
});
