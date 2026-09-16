import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Demo Public School | CBSE School',description:'A modern CBSE school website and student portal.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
