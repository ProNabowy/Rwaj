import { UseFormikTypeProps } from "@/utils/types/UseFormik";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginFormInitialValues } from "../types";

/**
 * A custom hook that initializes and returns a Formik object configured
 * for the login form.
 *
 * @param {function} onSubmit - The function to call when the form is submitted.
 * @returns {Formik} - The Formik object with initial values, validation schema,
 * and submit handler for the login form.
 *
 * Initial Values:
 * - email: An empty string
 * - password: An empty string
 *
 * Validation Schema:
 * - email: Required, minimum 4 characters
 * - password: Required, minimum 8 characters, maximum 255 characters
 */

function useLoginFormik({
	onSubmit,
}: UseFormikTypeProps<LoginFormInitialValues>) {
	return useFormik<LoginFormInitialValues>({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: yup.object({
			email: yup
				.string()
				.required("Please enter your user name")
				.min(4, "Minimum 4 characters required"),
			password: yup
				.string()
				.required("Please enter your password")
				.min(8, "Minimum 8 characters required")
				.max(255, "Maximum 255 characters allowed"),
		}),
		onSubmit,
	});
}

export default useLoginFormik;
