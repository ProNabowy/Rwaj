"use client";

import { ToastDefault, ToastError, ToastSuccess } from "@/icons";
import { AppToastProps } from "@/utils/types/AppToast";
import { Box, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { ToastContainer } from "./style";

/**
 * A Toast component that renders a title and description in a container, with colors and icons
 * determined by the type parameter.
 *
 * @param {AppToastProps} props
 * @returns {ReactElement}
 */
function AppToast({ title, description, type }: AppToastProps) {
	const mapIconToType: Record<AppToastProps["type"], ReactElement> = {
		success: <ToastSuccess />,
		error: <ToastError />,
		default: <ToastDefault />,
		info: <ToastDefault />,
		warning: <ToastDefault />,
	};

	const mapTypographyTitleColors: Record<AppToastProps["type"], string> = {
		success: "success.main",
		error: "error.main",
		default: "gray.darkest",
		info: "gray.darkest",
		warning: "warning.dark",
	};

	const mapTypographyDescriptionColors: Record<AppToastProps["type"], string> =
		{
			success: "success.main",
			error: "error.main",
			default: "gray.darkest",
			info: "gray.darkest",
			warning: "warning.darkest",
		};

	return (
		<ToastContainer>
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="flex-start"
				gap={3}
			>
				<Box justifyContent="space-between" alignItems="center" display="flex">
					{mapIconToType[type]}
				</Box>

				<Stack gap={1}>
					{title && (
						<Typography
							variant="displaySm"
							fontWeight={600}
							color={mapTypographyTitleColors[type]}
							lineHeight={1.25}
						>
							{title}
						</Typography>
					)}

					{description && (
						<Typography
							variant="displaySm"
							color={mapTypographyDescriptionColors[type]}
							fontWeight={400}
						>
							{description}
						</Typography>
					)}
				</Stack>
			</Stack>
		</ToastContainer>
	);
}

export default AppToast;
