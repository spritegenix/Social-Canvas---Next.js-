import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Social Canvas',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/*  <!-- Scripts-->
    <!-- Core-->*/}
        <Script src="assets/scripts/core.jquery.js" />
        {/* <!-- Vendor Plugins--> */}
        <Script src="assets/scripts/plugin.imagesloaded.pkgd.js" />
        <Script src="assets/scripts/plugin.in-viewport.js" />
        <Script src="assets/scripts/plugin.animate.js" />
        <Script src="assets/scripts/plugin.isotope.pkgd.min.js" />
        <Script src="assets/scripts/plugin.ScrollToPlugin.min.js" />
        <Script src="assets/scripts/plugin.SplitText.js" />
        <Script src="assets/scripts/plugin.TweenMax.min.js" />
        <Script src="assets/scripts/plugin.touchSwipe.min.js" />
        <Script src="assets/scripts/plugin.typed.min.js" />
        {/* <!-- Plugins--> */}
        <Script src="assets/plugins/nevo-slider/nevo-slider.js" />
        <Script src="assets/plugins/nevo-lightbox/nevo-lightbox.js" />
        <Script src="assets/scripts/main.functions.js" />
      </body>
    </html>
  );
}
