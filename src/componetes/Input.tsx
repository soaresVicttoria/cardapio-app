import React from "react";
import "../estilos/Login.css";

interface InputProps {
  value: string | number;
  errorMessage: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type: string;
}

export default function Input(props: InputProps) {
  const { value, errorMessage, onChange, placeholder, type } = props;

  return (
    <div className="w-full mb-4">
      <input
        type={type}
        placeholder={placeholder || "Digite aqui..."}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded ${
          errorMessage
            ? "border-red-500"
            : value
            ? "border-blue-500"
            : "border-gray-300"
        }`}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
