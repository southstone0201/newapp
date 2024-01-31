// RootLayout.js
'use client';
import Link from 'next/link';
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행되는 코드
    console.log("This code runs only on the client side");
  }, []);

  return (
    <html>
      <body>  
        <Link href="/showmybadge">
        <button>Go to Show My Badge</button>
        </Link>
        {children}
      </body>
    </html>
  );
}
