import Head from "next/head";
import Header from "../components/header/header";
import MainSlider from "../components/main-slider/main-slider";
import { BetSlip } from "../components/bet-slip/bet-slip";
export default () => (
  <>
    <Head>
      <title>MoPlay</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <BetSlip/>
    <MainSlider />
  </>
);
