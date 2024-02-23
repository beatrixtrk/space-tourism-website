import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';

const barlow = Barlow({ subsets: ['latin'], weight: ['400'] });
const barlow_condensed = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['400'],
});
const bellefair = Bellefair({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title: 'Space Tourism Website',
	description: 'Frontend Mentor Project',
	openGraph: {
		title: 'Space Tourism Website',
		description: 'Frontend Mentor Project',
		images: 'shared/space-tourism-og.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="shortcut icon"
					href="shared/favicon.ico"
					type="image/x-icon"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Barlow+Condensed:wght@400;700&family=Bellefair:wght@400&display=swap"
				/>
			</head>
			<body className={`${barlow.className} bg-custom min-h-screen`}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
