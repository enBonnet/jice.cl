interface InputProps {
  label: string;
  type?: "password" | "text" | "email";
  placeholder?: string;
}

const Input = ({ label, type = "text", placeholder }: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-gray-700 mb-2">
        {label}
      </label>
      <input
        name={label}
        type={type}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
