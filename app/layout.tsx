import Footer from "@/Layout/Footer/Footer";
import Header from "@/Layout/Header/Header";
import Providers from "@/Providers/Providers";
import { instrument_Sans, tajawal } from "@/utils/font/font";
import { Stack } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Rwaj",
	description: "Generated by Rwaj",
};

/**
 * The root layout of the app.
 *
 * This component is responsible for rendering the base HTML structure of the app,
 * including the `<html>`, `<body>`, and `<Providers>` components.
 *
 * The `children` prop is used to render the contents of the page.
 *
 * The component uses the `minHeight` property to ensure that the page takes up
 * the full height of the viewport.
 *
 * @param {{ children: React.ReactNode }} props - The props of the component.
 * @returns {JSX.Element} The JSX element representing the root layout of the app.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${instrument_Sans.className} ${tajawal.className}`}>
				<Providers>
					<Stack minHeight={"100dvh"}>
						<Header />
						<Stack flex={1}>{children}</Stack>
						<Footer />
					</Stack>
				</Providers>
			</body>
		</html>
	);
}

