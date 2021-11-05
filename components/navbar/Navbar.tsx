const isAuth = false;

const Navbar = () => {
  return (
    <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
      <div className="mb-4 sm:mb-0 text-black">
        <a className="text-2xl no-underline" href="/">
          Barra.cafe
        </a>
      </div>
      <div className="text-black sm:flex items-center">
        <a className="hover:text-blue-dark ml-2">Agregar lugar</a>
        {isAuth ? (
          <a
            href="/"
            className="border-2 border-yellow-500 text-yellow-500 rounded-md p-2 transition duration-300 ease-in-out hover:bg-yellow-700 hover:text-white ml-2"
          >
            Cuenta
          </a>
        ) : (
          <>
            <a href="/" className="hover:text-blue-dark ml-2">
              Registrate
            </a>
            <a
              href="/"
              className="border-2 border-yellow-500 text-yellow-500 rounded-md p-2 transition duration-300 ease-in-out hover:bg-yellow-700 hover:text-white ml-2"
            >
              Ingresar
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
