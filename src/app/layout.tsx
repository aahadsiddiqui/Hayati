import Footer from '../components/Footer';
import { Toaster } from 'sonner';

// ... in your layout component
<>
  {/* Other components */}
  <Footer />
  <Toaster position="top-center" />
</> 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
} 