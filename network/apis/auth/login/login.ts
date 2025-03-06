import { LoginFormInitialValues } from "@/components/Auth/Login/types";
import axios from "@/network/axios";
import { apis } from "@/utils/conetant/apis";

export const login = async (data: LoginFormInitialValues) => {
	return await axios.post(apis.AUTH.LOGIN, data);
};
