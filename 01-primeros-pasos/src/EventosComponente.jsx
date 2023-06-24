export const EventosComponente = () => {
  const handleClick = () => {
    alert("Click");
  };
  const handleDobleClick = () => {
    alert("DobleClick");
  };
  const hasEntrado = (e, accion) => {
    console.log(`Has ${accion} a la caja`);
  };
  const estasDentro = () => {
    console.log("Estas dentro del input mete tu nombre");
  };
  const estasFuera = () => {
    console.log("Estas fuera del input mete tu nombre");
  };
  return (
    <>
      <h1>Eventos en React</h1>
      {/* click */}
      <button onClick={handleClick}>Click</button>
      {/* doble click */}
      <button onDoubleClick={handleDobleClick}>DobleClick</button>
      {/* Mouse enter Mouse leave*/}
      <div
        id="caja"
        onMouseEnter={(e) => hasEntrado(e, "entrado")}
        onMouseLeave={(e) => hasEntrado(e, "salido")}
      >
        pasa por encima
      </div>

      <p>
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="introduce tu nombre"
        />
      </p>
    </>
  );
};
