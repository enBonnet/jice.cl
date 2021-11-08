import { Button } from "components/button";
import { Footer } from "components/footer";
import { Input } from "components/form/input";
import { Head } from "components/head";
import { Navbar } from "components/navbar";

const LoginPage = () => {
  return (
    <>
      <Head>Iniciar sessión</Head>
      <Navbar />
      <div className="flex items-center justify-center bg-yellow-100 py-52">
        <div className="bg-white w-11/12 max-w-lg shadow-lg rounded p-4">
          <h2 className="text-2xl mb-4">Iniciar sessión</h2>
          <form>
            <Input label="Correo" />
            <Input label="Usuario" />
            <Button>Ingresar</Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
