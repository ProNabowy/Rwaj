import { FormikProps } from "formik";

export type FormProps<T> = {
	formik: FormikProps<T>;
	isLoading: boolean;
};
