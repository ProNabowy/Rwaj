"use client";
import { FbIcon, InstIcon, Twitter } from "@/icons";
import theme from "@/theme/theme.config";
import { Stack, Typography } from "@mui/material";
import { StyledSocialButton } from "./styles";

/**
 * The Footer component renders a footer section for the application, which includes
 * links to the privacy policy and terms of service, as well as social media icons
 * for Facebook, Twitter, and Instagram. The component utilizes MUI's Stack and Typography
 * components for layout and styling, ensuring a consistent and responsive design.
 */

export default function Footer() {
	return (
		<Stack
			justifyContent={"center"}
			alignItems={"center"}
			className="container"
			gap={theme.spacing(3)}
			padding={theme.spacing(6, 0)}
		>
			<Stack justifyContent={"center"} direction={"row"} gap={theme.spacing(4)}>
				<Typography variant="displayMd" color={"gray.darkest"}>
					Privacy policy
				</Typography>
				<Typography variant="displayMd" color={"gray.darkest"}>
					Terms of service
				</Typography>
			</Stack>

			<Stack
				direction={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={theme.spacing(4)}
			>
				<StyledSocialButton>
					<FbIcon />
				</StyledSocialButton>
				<StyledSocialButton variant="text">
					<Twitter />
				</StyledSocialButton>
				<StyledSocialButton variant="text">
					<InstIcon />
				</StyledSocialButton>
			</Stack>
		</Stack>
	);
}
