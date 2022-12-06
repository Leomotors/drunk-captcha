// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import { Footer } from "./layouts";

import "./root.scss";
import "katex/dist/katex.min.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Drunk Captcha</Title>
        <Meta
          name="description"
          content="Captcha to prevent drunk person from accessing sensitive system"
        />

        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:r,b&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:r,b&display=swap"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {/* Root Layout */}
            <div class="flex min-h-screen flex-col items-center">
              <main class="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-4">
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
