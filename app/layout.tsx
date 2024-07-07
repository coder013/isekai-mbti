import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MBTI 테스트",
  description: "성격 유형을 알아보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="header">
          <h1>MBTI 테스트</h1>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2024 MBTI 테스트. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
