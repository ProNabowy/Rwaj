import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "react-query";
import { ErrorResponse, SuccessResponse } from "./Responses";

export type UseMutateApi<TData, TSuccessResponse, TErrorResponse> = ({
	onSuccess,
	onError,
}: {
	onSuccess: (
		response: AxiosResponse<SuccessResponse<TSuccessResponse>>
	) => void;
	onError: (response: AxiosError<ErrorResponse<TErrorResponse>>) => void;
}) => UseMutationResult<
	AxiosResponse<SuccessResponse<TSuccessResponse>>,
	AxiosError<ErrorResponse<TErrorResponse>>,
	TData,
	any
>;
