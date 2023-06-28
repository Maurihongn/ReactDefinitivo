import { useForm } from "../hooks/useForm";

export const MiFormulario = () => {
  const { formulario, enviado, cambiado } = useForm({});

  return (
    <>
      <h1>Formulario</h1>

      <pre>{JSON.stringify(formulario)}</pre>

      <form action="" onSubmit={enviado}>
        <input
          type="text"
          name="titulo"
          onChange={cambiado}
          placeholder="Ingrese titulo"
        />
        <input
          type="number"
          name="anio"
          onChange={cambiado}
          placeholder="Anio publicacion"
        />
        <textarea
          name="descripcion"
          onChange={cambiado}
          placeholder="Descripcion"
        />
        <input
          type="text"
          name="autor"
          onChange={cambiado}
          placeholder="Autor"
        />
        <input
          type="email"
          name="email"
          onChange={cambiado}
          placeholder="Correo de contacto"
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
