import { appRoutes } from "@/utils/conetant/appRoutes";
import { ErrorResponse } from "@/utils/types/Responses";
import axiosDefault, { AxiosError } from "axios";

let axios = axiosDefault;

axios.defaults.baseURL = process.env.NEXT_PUBLIC_FRONTEND_PROXY_URL;
axios.defaults.headers.common["Accept"] = "*/*";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: AxiosError<ErrorResponse<null>>) => {
		if (error.response?.data.code === 401) {
			window.location.href = `${appRoutes.auth.login}`;
		}

		if (error.response?.status === 400) {
			console.log("Unexpected Behaviuor", error.response?.data.message);
		}

		if (error.response?.status === 404) {
			console.log("Resource Was Not Found", error.response?.data.message);
		}

		if (error.response?.status === 500) {
			console.log("Server Error", error.response?.data.message);
		}

		return Promise.reject(error);
	}
);

export default axios;
