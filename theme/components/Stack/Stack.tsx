import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const Stack: ThemeComponent<Components["MuiStack"]> = (theme) => ({
	styleOverrides: {
		root: {
			width: "100%",
		},
	},
});
