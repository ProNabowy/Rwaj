"use client";
import useBreakPoints from "@/hooks/useBreakPoints";
import theme from "@/theme/theme.config";
import { appRoutes } from "@/utils/conetant/appRoutes";
import fireToast from "@/utils/helpers/fireToast";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { StyledStackContainer } from "../styles";
import useRegisterFormik from "./hooks/useLoginFormik";

/**
 * Renders the registration page with a form for users to create a new account.
 *
 * The component utilizes a custom hook for form management and displays
 * a success toast upon successful registration. It includes a header
 * with a title and description, a registration form for entering user
 * details, and navigation options to the login page.
 *
 * @returns A JSX element containing the registration form and navigation buttons.
 */

export default function Register() {
	const router = useRouter();
	const { sm } = useBreakPoints();

	const formik = useRegisterFormik({
		onSubmit: () => {
			fireToast({
				type: "success",
				title: "Success",
				description: "successfully registered",
			});
		},
	});

	return (
		<Stack flex={1} justifyContent={"center"}>
			<Stack gap={theme.spacing(6)}>
				<StyledStackContainer>
					<Stack gap={theme.spacing(6)}>
						<Header
							title="Create your free account!"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>
						<RegisterForm formik={formik} isLoading={false} />
					</Stack>
				</StyledStackContainer>
				<Stack
					justifyContent={"space-between"}
					direction={"row"}
					margin={"auto"}
					paddingX={theme.spacing(5)}
					maxWidth={sm ? "100%" : theme.spacing(134.5)}
					alignItems={"center"}
				>
					<Button variant="text" sx={{ paddingLeft: 0 }}>
						<Typography variant="displaySm" color={"gray.darkest"}>
							Already have an account?
						</Typography>
					</Button>
					<Button
						variant="outlined"
						onClick={() => router.push(appRoutes.auth.login)}
						sx={{
							borderColor: "#D4D4D8",
							minHeight: theme.spacing(12),
							minWidth: sm ? theme.spacing(10) : theme.spacing(55),
						}}
					>
						<Typography variant="displaySm" color={"gray.darkest"}>
							Login
						</Typography>
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
}
