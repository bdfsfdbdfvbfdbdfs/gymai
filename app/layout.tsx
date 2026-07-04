import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymAI",
  description: "AI training coach app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <div className="pb-20">{children}</div>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
          <div className="max-w-md mx-auto grid grid-cols-5 text-center text-xs">
            <Link href="/" className="py-3">🏠<br />ホーム</Link>
            <Link href="/workout" className="py-3">💪<br />筋トレ</Link>
            <Link href="/food" className="py-3">🍚<br />食事</Link>
            <Link href="/inbody" className="py-3">📊<br />InBody</Link>
            <Link href="/ai" className="py-3">🤖<br />AI</Link>
          </div>
        </nav>
      </body>
    </html>
  );
}