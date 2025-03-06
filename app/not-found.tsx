"use client";
import { Stack, Typography } from "@mui/material";

/**
 * Renders a "Coming Soon" message centered on the page.
 * Utilizes MUI's Stack and Typography components for layout and styling.
 * The message is styled as a large, bold text.
 */

export default function page() {
	return (
		<Stack flex={1} justifyContent={"center"}>
			<Typography
				variant="display2xl"
				sx={{
					fontSize: "2em",
					textAlign: "center",
				}}
				fontWeight={700}
			>
				Coming Soon
			</Typography>
		</Stack>
	);
}
