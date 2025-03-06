import { UseFormikTypeProps } from "@/utils/types/UseFormik";
import { useFormik } from "formik";
import * as yup from "yup";
import { RegisterFormInitialValues } from "../types";

/**
 * A custom hook that initializes and returns a Formik object configured
 * for the registration form.
 *
 * @param {function} onSubmit - The function to call when the form is submitted.
 * @returns {Formik} - The Formik object with initial values, validation schema,
 * and submit handler for the registration form.
 *
 * Initial Values:
 * - mobile_number: An empty string
 *
 * Validation Schema:
 * - mobile_number: Required, must match the regex pattern for a valid mobile number
 *   in the format of "50 123 4567" or "501234567"
 */
function useRegisterFormik({
	onSubmit,
}: UseFormikTypeProps<RegisterFormInitialValues>) {
	return useFormik<RegisterFormInitialValues>({
		initialValues: {
			mobile_number: "",
		},
		validationSchema: yup.object({
			mobile_number: yup
				.string()
				.required("Please enter your mobile number")
				.matches(
					/^(\d{2} \d{3} \d{4}|\d{9}|\d{2} \d{6}|\d{5} \d{4})$/,
					"Invalid mobile number format (e.g. 50 123 4567, 501234567)"
				),
		}),
		onSubmit,
	});
}

export default useRegisterFormik;
