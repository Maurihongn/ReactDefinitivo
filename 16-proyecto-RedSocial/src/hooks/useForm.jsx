import { useState } from "react";

export const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({ target }) => {
    const { name, value } = target;
    // los [] son para darle el nombre a la propiedad
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    changed,
  };
};
