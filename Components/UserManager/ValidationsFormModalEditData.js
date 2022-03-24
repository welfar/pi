import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    /*   if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/jonmircha@gmail.c", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    } */
  };

  const handleReset = (e) => {
    e.preventDefault(e);
    setForm(initialForm);
  };

  return {
    form,
    errors,
    response,
    handleChange,
    /* handleBlur, */
    handleSubmit,
    handleReset,
  };
};
