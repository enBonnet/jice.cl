import Head from "next/head";

interface HeadProps {
  children?: string;
}

const HeadContainer = ({ children }: HeadProps) => {
  return (
    <Head>
      <title>Jice.cl - {children}</title>
    </Head>
  );
};

export default HeadContainer;
