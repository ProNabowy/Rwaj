import Login from "@/components/Auth/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In",
	description: "Rawj Sign In Page",
};
export default function page() {
	return <Login />;
}
