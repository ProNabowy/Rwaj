"use client";
import useBreakPoints from "@/hooks/useBreakPoints";
import { SimpleLogo } from "@/icons";
import theme from "@/theme/theme.config";
import { appRoutes } from "@/utils/conetant/appRoutes";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StyledButton, StyledImage, StyledStackContainer } from "./styles";

/**
 * Renders the Header component for the application.
 *
 * The header includes a logo that links to the home page and navigation
 * buttons for "Login" and language selection. The logo changes based on
 * screen size, displaying a simple logo on smaller screens and an image
 * on larger screens. The "Login" button navigates to the login page,
 * and the language button displays text in Arabic.
 *
 * @returns A JSX element containing the header with logo and navigation buttons.
 */

export default function Header() {
	const router = useRouter();
	const { sm } = useBreakPoints();

	return (
		<StyledStackContainer className="container" direction={"row"}>
			<Link href={appRoutes.home}>
				{sm ? (
					<SimpleLogo />
				) : (
					<StyledImage
						src={"/images/logo.png"}
						width={102}
						height={37.48}
						alt="Rwaj Logo"
					/>
				)}
			</Link>

			<Stack
				direction={"row"}
				gap={theme.spacing(sm ? 3 : 8)}
				width={"fit-content"}
			>
				<StyledButton
					onClick={() => router.push(appRoutes.auth.login)}
					variant="outlined"
				>
					<Typography variant="displayMd" fontWeight={400}>
						Login
					</Typography>
				</StyledButton>
				<Button variant="text">
					<Typography
						variant="displayLg"
						fontFamily={"__Tajawal_fec779"}
						color={"gray.darkest"}
						fontWeight={500}
					>
						العربية
					</Typography>
				</Button>
			</Stack>
		</StyledStackContainer>
	);
}
