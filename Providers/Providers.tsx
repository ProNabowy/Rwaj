"use client";
import theme from "@/theme/theme.config";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			enabled: false,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: false,
		},
	},
});

/**
 * The top-level component that wraps the entire app with the
 * necessary providers for global CSS, theme, and state management.
 *
 * @param {{ children: React.ReactNode }} props - The props of the component.
 * @returns {JSX.Element} The JSX element representing the providers.
 */
export default function Providers({ children }: PropsWithChildren) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

			<ToastContainer
				pauseOnHover={false}
				autoClose={3000}
				newestOnTop
				closeButton={false}
				// limit={3}
				position="bottom-center"
			/>
		</ThemeProvider>
	);
}
