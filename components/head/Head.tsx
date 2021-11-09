import Head from "next/head";

interface HeadProps {
  children?: string;
}

const HeadContainer = ({ children }: HeadProps) => {
  return (
    <Head>
      <title>Barra.cafe - {children}</title>
    </Head>
  );
};

export default HeadContainer;
