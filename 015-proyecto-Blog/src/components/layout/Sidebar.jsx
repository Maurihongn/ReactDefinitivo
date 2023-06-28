export const Sidebar = () => {
  return (
    <>
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form action="">
            <input type="text" id="search_field" />
            <button id="search">Buscar</button>
          </form>
        </div>
        {/* <div className="add">
          <h3 className="title">Añadir articulo</h3>
          <form action="">
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripcion"></textarea>
            <input type="submit" value="Añadir" id="save" />
          </form>
        </div> */}
      </aside>
    </>
  );
};
