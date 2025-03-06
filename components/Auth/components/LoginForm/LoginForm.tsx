import theme from "@/theme/theme.config";
import { appRoutes } from "@/utils/conetant/appRoutes";
import { LoadingButton } from "@mui/lab";
import {
	FormControl,
	FormLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { LoginFormInitialValues } from "../../Login/types";
import Social from "../Social/Social";
import { FormProps } from "../types";

/**
 * A reusable form component for the Login page.
 *
 * @param formik - The Formik form object.
 * @param isLoading - Whether the form is currently submitting.
 * @returns A `FormControl` component containing the form fields and a submit button.
 */

export default function Form({
	formik,
	isLoading,
}: FormProps<LoginFormInitialValues>) {
	const IS_USER_NAME_HAS_ERROR =
		formik.touched.email && Boolean(formik.errors.email);

	const IS_PASSWORD_HAS_ERROR =
		formik.touched.password && Boolean(formik.errors.password);

	return (
		<FormControl component={"form"} onSubmit={formik.handleSubmit}>
			<Stack mb={theme.spacing(6)}>
				<FormLabel error={IS_USER_NAME_HAS_ERROR}>Email or username</FormLabel>

				<TextField
					placeholder={"Enter your email address or username"}
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={IS_USER_NAME_HAS_ERROR}
					helperText={IS_USER_NAME_HAS_ERROR && formik.errors.email}
				/>
			</Stack>
			<Stack mb={theme.spacing(4)}>
				<FormLabel error={IS_PASSWORD_HAS_ERROR}>Password</FormLabel>

				<TextField
					placeholder={"••••••••••••"}
					name="password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={IS_PASSWORD_HAS_ERROR}
					helperText={IS_PASSWORD_HAS_ERROR && formik.errors.password}
				/>
			</Stack>

			<Link href={appRoutes.auth.forget_password}>
				<Typography variant="displaySm" color={"primary.main"} fontWeight={600}>
					Forgot password?
				</Typography>
			</Link>

			<Stack my={theme.spacing(5)}>
				<LoadingButton
					sx={{ minHeight: theme.spacing(10) }}
					type="submit"
					fullWidth
					loading={isLoading}
					variant="contained"
				>
					<Typography variant="displayLg" fontWeight={600}>
						Login
					</Typography>
				</LoadingButton>
			</Stack>

			<Social />
		</FormControl>
	);
}
