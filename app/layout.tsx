import LoadingOverlay from '@/components/LoadingOverlay';
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
                <LoadingOverlay />
                {children}
            </body>
        </html>
    );
}