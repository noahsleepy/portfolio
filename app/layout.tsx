import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"

export const fontPoppins = Poppins({
	subsets: ["latin-ext"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
  	title: "Noah Schittenhelm",
  	description: "Noah Schittenhelm's portfolio and resume...",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (

		<html lang="en" suppressHydrationWarning>
			<head />

			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontPoppins.variable
				)}
			>
				
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				
			</body>

		</html>

	);
}
