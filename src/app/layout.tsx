import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const interSans = localFont({
	src: './fonts/Inter.ttf',
	variable: '--font-inter-sans'
})

export const metadata: Metadata = {
	title: 'Polygon Swap',
	description: 'Swap on Polygon network'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${interSans.variable}`}>{children}</body>
		</html>
	)
}
