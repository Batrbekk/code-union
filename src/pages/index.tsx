import Head from "next/head";
import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { GetStaticProps, NextPage } from "next";
import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";
import Headline from "@/components/organism/Headline";
import Projects from "@/components/organism/Projects";
import Advantages from "@/components/organism/Advantages";
import AddHeadline from "@/components/organism/AddHeadline";
import Technologies from "@/components/organism/Technologies";
import HorizontalScroll from "@/components/organism/HorizontalScroll";
import { COMMON_TNS, GLOSSARY_TNS, PAGES_TNS } from "@/lib/i18n/consts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        PAGES_TNS,
        GLOSSARY_TNS,
        COMMON_TNS,
      ])),
      // Will be passed to the page component as props
    },
  };
};

const Homepage: NextPage = () => {
  const { t: gt } = useTranslation([GLOSSARY_TNS]);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Code Union</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Headline />
      <HorizontalScroll />
      <Advantages />
      <Technologies />
      <div className="pb-24 lg:py-24">
        <Projects />
      </div>
      <AddHeadline />
      <Footer />
    </div>
  );
};

export default Homepage;
