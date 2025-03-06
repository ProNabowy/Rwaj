import Toast from "@/components/Toast/Toast";
import { toast } from "react-toastify";
import { AppToastProps } from "../types/AppToast";

export default function fireToast({ type, title, description }: AppToastProps) {
	return toast(<Toast title={title} description={description} type={type} />, {
		type,
		position: "bottom-right",
		autoClose: 10000,
		hideProgressBar: false,
		icon: false,
		pauseOnHover: true,

		closeOnClick: true,
	});
}
