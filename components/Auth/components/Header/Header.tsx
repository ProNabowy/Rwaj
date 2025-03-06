import theme from "@/theme/theme.config";
import { Stack, Typography } from "@mui/material";
import { HeaderProps } from "./types";

/**
 * A simple header component for the Login and Register pages.
 *
 * @param title - The main title of the header (e.g. "Login", "Register")
 * @param description - The description text below the title
 * @returns A `Stack` component containing the title and description text
 */
export default function Header({
	title = "Login",
	description = "Welcome back! Please enter your details.",
}: HeaderProps) {
	return (
		<Stack gap={theme.spacing(2)}>
			<Typography variant="displayXl" color={"gray.darker"}>
				{title}
			</Typography>
			<Typography variant="displayLg" color={"gray.darkest"}>
				{description}
			</Typography>
		</Stack>
	);
}
