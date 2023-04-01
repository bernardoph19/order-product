function agregarFila() {
  // Obtener los valores de los campos de entrada
  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const categoria = document.getElementById("categoria").value;

  // Validar que el ID del producto no exista en la tabla
  const tabla = document.getElementById("tabla");
  for (let i = 0; i < tabla.rows.length; i++) {
    const rowCodigo = tabla.rows[i].cells[0].innerHTML;
    if (rowCodigo === codigo) {
      alert("El ID del producto ya existe en la tabla.");
      return;
    }
  }

  // Agregar el nuevo producto a la tabla
  const nuevaFila = tabla.insertRow();
  const celdaCodigo = nuevaFila.insertCell();
  const celdaNombre = nuevaFila.insertCell();
  const celdaCategoria = nuevaFila.insertCell();

  celdaCodigo.innerHTML = codigo;
  celdaNombre.innerHTML = nombre;
  celdaCategoria.innerHTML = categoria;

  // Limpiar los campos de entrada
  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("categoria").value = "";
}

