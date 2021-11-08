interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded px-8 py-2 text-center inline-flex items-cente">
      {children}
    </button>
  );
};

export default Button;
