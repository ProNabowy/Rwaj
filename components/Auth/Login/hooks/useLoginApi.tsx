import { login } from "@/network/apis/auth/login/login";
import { UseMutateApi } from "@/utils/types/useMutate";
import { useMutation } from "react-query";
import { LoginFormInitialValues } from "../types";

/**
 * A hook that wraps the login API call in a React Query mutation.
 *
 * @param {{ onSuccess: (data: {}) => void, onError: (error: any) => void }} options
 * @returns {UseMutationResult<{}, unknown, LoginFormInitialValues>}
 */
const useLoginApi: UseMutateApi<
	LoginFormInitialValues,
	{},
	LoginFormInitialValues
> = ({ onSuccess, onError }) => {
	return useMutation(login, {
		onSuccess,
		onError,
	});
};

export default useLoginApi;
