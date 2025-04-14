import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Sudharshan | Software Engineer",
  description:
    "Software Engineer specializing in backend architecture, cloud-native systems, and distributed applications. Experienced with AWS, NestJS, Django, FastAPI, and Kafka for building high-performance solutions.",
  keywords: [
    "Raj Sudharshan",
    "Raj Sudharshan Vidyalatha Natarajan",
    "Raj Natarajan",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Cloud Architect",
    "AWS Solutions Architect",
    "NestJS",
    "Django",
    "FastAPI",
    "Kafka",
    "Microservices",
    "San Jose",
    "California",
    "Bay Area",
    "Silicon Valley",
  ].join(", "),
  openGraph: {
    title: "Raj Sudharshan | Software Engineer",
    description:
      "Building scalable cloud-native systems and high-performance applications. Expertise in AWS, Python, Typescript, Redis, Kafka and distributed architecture.",
    url: "https://rajs.dev",
    siteName: "Raj Sudharshan",
    images: [
      {
        url: "/images/og-image.png",
        width: 400,
        height: 400,
        alt: "Raj Sudharshan",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="canonical" href="https://rajs.dev" />
        <Script id="reb2b-script" strategy="afterInteractive">
          {`!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0HMJERO5.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0HMJERO5");}();`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
