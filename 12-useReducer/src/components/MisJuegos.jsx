export const MisJuegos = () => {
  return (
    <>
      <h1>Estos son mis juegos</h1>
      <p>numero de videojuegos : 15</p>

      <ul></ul>

      <h3>Agregar juego</h3>

      <form action="">
        <input type="text" name="titulo" placeholder="Titulo" />
        <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </>
  );
};
