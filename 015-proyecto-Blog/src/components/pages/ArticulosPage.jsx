import { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Fetch } from '../../helpers/Fetch';

export const ArticulosPage = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url + 'articles';

    const { datos, cargando } = await Fetch(url, 'GET');
    setLoading(cargando);
    // let peticion = await fetch(url, {
    //   method: 'GET',
    // });

    // let datos = await peticion.json();

    if (datos.status === 'success') {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
      {loading ? (
        'Cargando'
      ) : articulos.length >= 1 ? (
        articulos.map((articulo) => (
          <article key={articulo._id} className='articulo-item'>
            <div className='mascara'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                alt=''
              />
            </div>
            <div className='datos'>
              <h3 className='title'>{articulo.titulo}</h3>
              <p className='description'>{articulo.contenido}</p>
              <button className='edit'>Editar</button>
              <button className='delete'>Borrar</button>
            </div>
          </article>
        ))
      ) : (
        <p>No hay articulos</p>
      )}
    </>
  );
};
