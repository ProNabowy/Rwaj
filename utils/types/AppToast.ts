import { ReactElement } from "react";

export type AppToastProps = {
	type: "success" | "error" | "warning" | "info" | "default";
	title?: string;
	description?: string;
};

export type MapTypeToComponent = (
	params: Omit<AppToastProps, "type">
) => Record<AppToastProps["type"], ReactElement>;
