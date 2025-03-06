import Login from "@/components/Auth/Login/Login";
import Register from "@/components/Auth/Register/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign Up",
	description: "Rawj Sign Up Page",
};
export default function page() {
	return <Register />;
}
