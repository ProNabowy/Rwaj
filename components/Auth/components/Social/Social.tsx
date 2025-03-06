import { AppleAuthIcon, FbAuthIcon, GoogleAuthIcon } from "@/icons";
import theme from "@/theme/theme.config";
import { Stack, Typography } from "@mui/material";
import { StyledSocialButton } from "../../styles";

/**
 * A component that renders social authentication buttons for Google, Facebook,
 * and Apple. It displays a text prompt "or continue with" followed by three
 * styled buttons, each containing an icon for a respective social platform.
 * This component uses a horizontal layout with spacing between elements.
 */

export default function Social() {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
			gap={theme.spacing(3)}
		>
			<Typography color={"gray.darkest"}>or continue with</Typography>

			<Stack direction={"row"} width={"fit-content"} gap={theme.spacing(4)}>
				<StyledSocialButton variant="outlined">
					<GoogleAuthIcon />
				</StyledSocialButton>
				<StyledSocialButton variant="outlined">
					<FbAuthIcon />
				</StyledSocialButton>
				<StyledSocialButton variant="outlined">
					<AppleAuthIcon />
				</StyledSocialButton>
			</Stack>
		</Stack>
	);
}
