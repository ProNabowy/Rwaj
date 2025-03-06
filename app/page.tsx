"use client";

import { Stack, Typography } from "@mui/material";

/**
 * The main entry point of the Rwaj app.
 *
 * Renders a single `Typography` component with the text "Welcome to Rwaj".
 *
 * @returns A `Stack` component with a centered `Typography` component.
 */
/**
 * The main entry point of the Rwaj app.
 *
 * Renders a single `Typography` component with the text "Welcome to Rwaj".
 *
 * @returns A `Stack` component with a centered `Typography` component.
 */
export default function Home() {
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
				Welcome to Rwaj
			</Typography>
		</Stack>
	);
}
