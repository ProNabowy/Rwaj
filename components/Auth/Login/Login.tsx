"use client";
import useBreakPoints from "@/hooks/useBreakPoints";
import theme from "@/theme/theme.config";
import { appRoutes } from "@/utils/conetant/appRoutes";
import fireToast from "@/utils/helpers/fireToast";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Header from "../components/Header/Header";
import Form from "../components/LoginForm/LoginForm";
import { StyledStackContainer } from "../styles";
import useLoginApi from "./hooks/useLoginApi";
import useLoginFormik from "./hooks/useLoginFormik";

/**
 * A functional component that renders the login page.
 *
 * It utilizes custom hooks for breakpoints and API calls, and Formik
 * for form management. On successful login, a success toast is displayed
 * and the user is redirected to the home page. On error, an error toast
 * is shown with the appropriate message. The form includes fields for
 * email/username and password, and buttons for navigation to the
 * registration page.
 *
 * @returns A JSX element containing the login form and navigation buttons.
 */

export default function Login() {
	const router = useRouter();
	const { sm } = useBreakPoints();

	const { mutate, isLoading } = useLoginApi({
		onSuccess: (response) => {
			// TODO: In a real backend, the authentication token should be stored securely in cookies.
			// 🚀 However, since this is just a simulated login, we are NOT storing the token here.

			fireToast({
				title: "Success",
				description: "successfully logged in",
				type: "success",
			});
			router.push(appRoutes.home);
		},
		onError: (error) => {
			if (error.status === 401) {
				fireToast({
					title: error?.response?.data.message,
					description: "Please double check your credentials",
					type: "error",
				});
			} else {
				fireToast({
					title: error?.response?.data.message,
					type: "error",
				});
			}
		},
	});

	const formik = useLoginFormik({
		onSubmit: (values) => mutate(values),
	});

	return (
		<Stack flex={1} justifyContent={"center"}>
			<Stack gap={theme.spacing(6)}>
				<StyledStackContainer>
					<Stack gap={theme.spacing(6)}>
						<Header />
						<Form formik={formik} isLoading={isLoading} />
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
							Don’t have an account?
						</Typography>
					</Button>
					<Button
						variant="outlined"
						onClick={() => router.push(appRoutes.auth.register)}
						sx={{
							borderColor: "#D4D4D8",
							minHeight: theme.spacing(12),
							minWidth: sm ? theme.spacing(10) : theme.spacing(55),
						}}
					>
						<Typography variant="displaySm" color={"gray.darkest"}>
							Create account
						</Typography>
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
}
