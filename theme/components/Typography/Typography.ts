import { ThemeComponent } from "@/utils/types/ThemeComponent";
import { Components } from "@mui/material";

export const Typography: ThemeComponent<Components["MuiTypography"]> = (
	theme
) => ({
	variants: [
		{
			props: { color: "gradient" },
			style: {
				WebkitTextFillColor: "transparent",
				WebkitBackgroundClip: "text",
				backgroundImage:
					"linear-gradient(83.17deg, rgba(30, 70, 120, 0.95) 7.02%, rgba(45, 105, 180, 0.95) 99.72%);",
			},
		},
		{
			props: { color: "yellow-gradient" },
			style: {
				WebkitTextFillColor: "transparent",
				WebkitBackgroundClip: "text",
				background:
					"var(--yellow, linear-gradient(90deg, #F49F00 0%, #EFBC5D 100%))",
				backgroundClip: "text",
			},
		},
	],
});
