import "@/styles/globals.css";
import Layout from "@/layout/panel/layout";
import { NextUIProvider, Switch } from "@nextui-org/react";

export default function App({ Component, pageProps }) {

  return (
    <NextUIProvider>
      <main className="light text-foreground bg-background" id="panel">
        <Layout className="dark text-foreground bg-background">
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextUIProvider>
  );
}
