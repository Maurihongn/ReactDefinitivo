import { useState } from 'react';

export const FormularioComponent = () => {
  const [usuario, setUsuario] = useState('');

  const conseguirDatosFormularios = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value,
    };

    setUsuario(usuario);
  };

  return (
    <>
      <div>FormularioComponent</div>

      <form onSubmit={conseguirDatosFormularios}>
        <input type='text' placeholder='Nombre' name='nombre' />
        <input type='text' placeholder='Apellido' name='apellido' />
        <select name='genero'>
          <option value='hombre' key=''>
            Hombre
          </option>
          <option value='mujer' key=''>
            Mujer
          </option>
        </select>
        <textarea
          cols='30'
          rows='10'
          placeholder='Biografia'
          name='biografia'
        ></textarea>
        <input type='submit' value='Enviar' />
      </form>
    </>
  );
};
