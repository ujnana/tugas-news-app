import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Menu from "antd/es/menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "News App",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Header
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: 32, color: "#fff", marginRight: "4rem" }}>
              News App
            </h1>
          </Header>
          <Content
            style={{
              padding: "3rem 0",
              margin: "0 auto",
              maxWidth: 1200,
            }}
          >
            <AntdRegistry>{children}</AntdRegistry>
          </Content>
          <Footer></Footer>
        </Layout>
      </body>
    </html>
  );
}
