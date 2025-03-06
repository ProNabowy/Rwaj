import theme from "@/theme/theme.config";
import { LoadingButton } from "@mui/lab";
import {
	FormControl,
	FormLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { RegisterFormInitialValues } from "../../Register/types";
import Social from "../Social/Social";
import { FormProps } from "../types";

/**
 * A reusable React component that renders a Stack containing the
 * Saudi Arabia flag as an Image, and a Typography component with
 * the text "+966 |".
 *
 * This component is used as the startAdornment for the TextField
 * component in the RegisterForm component.
 */
const Adornment = ({}) => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			width={theme.spacing(25)}
			gap={theme.spacing(2)}
		>
			<Image
				src={"/webp/saudi-flag.webp"}
				width={16}
				height={20}
				alt="saudi flag"
			/>
			<Typography variant="displayMd" color={"gray.darker"}>
				+966 |
			</Typography>
		</Stack>
	);
};

/**
 * A reusable React component that renders a Stack containing a
 * FormControl component with a single TextField input for the
 * user to enter their mobile number. The TextField has an
 * Adornment component as its startAdornment, which displays the
 * Saudi Arabian flag and the text "+966 |". The TextField also
 * has a FormLabel component above it that displays the text
 * "Mobile number". If the user has entered an invalid mobile number,
 * the FormLabel will display an error message.
 *
 * The component also renders a LoadingButton component below the
 * TextField that displays the text "Create account". The LoadingButton
 * is connected to the formik.handleSubmit function and will be
 * disabled if the form is currently submitting.
 *
 * Finally, the component renders a Social component below the
 * LoadingButton, which displays links to authenticate with Google,
 * Facebook, or Apple.
 *
 * @param formik - The Formik form object.
 * @param isLoading - A boolean indicating whether the form is currently submitting.
 * @returns A `FormControl` component containing the form fields and a submit button.
 */
export default function RegisterForm({
	formik,
	isLoading,
}: FormProps<RegisterFormInitialValues>) {
	const IS_MOBILE_NUMBER_HAS_ERROR =
		formik.touched.mobile_number && Boolean(formik.errors.mobile_number);

	return (
		<FormControl component={"form"} onSubmit={formik.handleSubmit}>
			<Stack>
				<FormLabel error={IS_MOBILE_NUMBER_HAS_ERROR}>Mobile number</FormLabel>

				<TextField
					placeholder={"50 123 4567"}
					name="mobile_number"
					sx={{
						"& fieldset": {
							borderColor: "#9169E9",
						},
						"& .MuiInputBase-root": {
							height: theme.spacing(11),
						},
					}}
					value={formik.values.mobile_number}
					onChange={formik.handleChange}
					error={IS_MOBILE_NUMBER_HAS_ERROR}
					helperText={IS_MOBILE_NUMBER_HAS_ERROR && formik.errors.mobile_number}
					InputProps={{
						startAdornment: <Adornment />,
					}}
				/>
			</Stack>

			<Stack my={theme.spacing(5)}>
				<LoadingButton
					sx={{ minHeight: theme.spacing(10) }}
					type="submit"
					fullWidth
					loading={isLoading}
					variant="contained"
				>
					<Typography variant="displayLg" fontWeight={600}>
						Create account
					</Typography>
				</LoadingButton>
			</Stack>

			<Social />
		</FormControl>
	);
}
