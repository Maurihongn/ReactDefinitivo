import { useEffect, useState } from 'react';

const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsuarioEstaticos = () => {
    setUsuarios([
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
      {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
      },
      {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'Tobias',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      },
    ]);
  };

  const getUsuariosAjaxPms = () => {
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then(
        (data) => {
          setUsuarios(data.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAwait = async () => {
    try {
      const peticion = await fetch('https://reqres.in/api/users?page=1');
      const { data } = await peticion.json();
      setUsuarios(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuariosAjaxAwait();
  }, []);

  //Cuando esta cargando
  if (loading) {
    return (
      <>
        <h2>Cargando</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>Listado de Usuarios via ajax</h2>
        <ol>
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} alt='' width={'20'} />
                {usuario.first_name}
              </li>
            );
          })}
        </ol>
      </>
    );
  }

  //Cuando salio todo bien
};

export default AjaxComponent;
