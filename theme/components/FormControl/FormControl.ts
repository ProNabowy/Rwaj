import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const FormControl: ThemeComponent<Components["MuiFormControl"]> = (
	theme
) => ({
	defaultProps: {
		variant: "outlined",
		fullWidth: true,
	},
});
