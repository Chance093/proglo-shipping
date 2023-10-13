import './globals.css';
import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import TrpcProvider from '@/lib/trpc/Provider';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`min-h-screen bg-gradient-to-b from-gradientStart to-gradientEnd ${comfortaa.className} text-primaryTypography`}
			>
				<ClerkProvider>
					<TrpcProvider>{children}</TrpcProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}
