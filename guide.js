// Aquí guardo los apartados de mi guía. Cada apartado tiene explicación y un ejemplo.
const topics = [
{"title": "EMPEZAR · Orden de trabajo", "tags": "organizar proyecto variables funciones eventos pasos estructura", "html": "<h2>Cómo organizo mi proyecto JavaScript</h2><p><strong>No empiezo escribiendo todo el código.</strong> Primero identifico qué me pide el ejercicio y qué archivos tengo.</p><ol class=\"steps\"><li><strong>Leo el enunciado</strong> y lo divido en tareas pequeñas.</li><li><strong>Reviso el HTML:</strong> nombres de <code>id</code>, clases, formularios y botones.</li><li><strong>Compruebo los archivos y rutas:</strong> HTML, CSS, JS, <code>db.json</code> e imágenes.</li><li><strong>Declaro constantes y variables:</strong> elementos del DOM, URL de JSON Server y datos que necesito.</li><li><strong>Creo las funciones:</strong> una función para cada tarea (mostrar, guardar, borrar...).</li><li><strong>Conecto los eventos:</strong> qué ocurre al hacer clic o enviar un formulario.</li><li><strong>Inicio la página:</strong> llamo a la función que debe ejecutarse al cargar.</li><li><strong>Pruebo cada parte:</strong> consola, Network y datos de <code>db.json</code>.</li></ol><div class=\"tip\"><strong>Orden habitual:</strong> constantes y variables → funciones → eventos → inicialización. No es una ley: si uso <code>const miFuncion = () => {}</code>, debo definirla antes de llamarla.</div><p>Si el HTML tiene un <code>script</code> al final del <code>body</code>, puedo seleccionar sus elementos. Si lo pongo en <code>head</code>, normalmente uso <code>defer</code>.</p>"},
{"title": "PLANTILLA · Mi archivo script.js", "tags": "plantilla estructura variables funciones eventos iniciar", "html": "<h2>Plantilla que puedo copiar para empezar</h2><p>Este es un <strong>modelo general</strong>. Cambio los nombres por los de mi HTML y elimino lo que no necesite.</p><pre>// 1. GUARDO LAS REFERENCIAS Y LA URL\nconst API = &quot;http://localhost:3000/productos&quot;;\nconst lista = document.getElementById(&quot;lista&quot;);\nconst boton = document.getElementById(&quot;cargar&quot;);\n\n// 2. CREO MIS FUNCIONES\nasync function mostrarProductos() {\n  try {\n    // Pido los productos a JSON Server\n    const respuesta = await fetch(API);\n    if (!respuesta.ok) throw new Error(&quot;Error al consultar datos&quot;);\n    const productos = await respuesta.json();\n\n    // Muestro los datos que he recibido\n    lista.innerHTML = &quot;&quot;;\n    productos.forEach(function(producto) {\n      const elemento = document.createElement(&quot;li&quot;);\n      elemento.textContent = producto.nombre;\n      lista.appendChild(elemento);\n    });\n  } catch (error) {\n    console.error(error);\n  }\n}\n\n// 3. CONECTO LOS EVENTOS\nboton.addEventListener(&quot;click&quot;, mostrarProductos);\n\n// 4. INICIO LA PÁGINA\nmostrarProductos();</pre><div class=\"tip\"><strong>Qué adapto:</strong> <code>productos</code> (colección), <code>lista</code> y <code>cargar</code> (id del HTML), <code>nombre</code> (campo de mi JSON). Si no existe un elemento, <code>getElementById</code> devuelve <code>null</code>.</div>"},
{"title": "CONCEPTOS · Variables y tipos", "tags": "let const string number boolean array objeto", "html": "<h2>Variables: qué guardo y cuándo</h2><pre>// const: guardo un valor que no voy a reasignar\nconst nombreTienda = &quot;Mi tienda&quot;;\nconst precio = 15;\nconst disponible = true;\n\n// let: el valor puede cambiar\nlet cantidad = 1;\ncantidad = cantidad + 1;\n\n// Array: guardo varios elementos\nconst categorias = [&quot;Libros&quot;, &quot;Música&quot;];\n\n// Objeto: agrupo los datos de un producto\nconst producto = { id: 1, nombre: &quot;Disco&quot;, precio: 15 };\nconsole.log(producto.nombre); // Disco</pre><p><strong>Truco:</strong> uso <code>const</code> por defecto y <code>let</code> cuando necesito reasignar. Evito <code>var</code> en código nuevo.</p>"},
{"title": "CONCEPTOS · Condiciones y bucles", "tags": "if else for foreach map filter find", "html": "<h2>Decidir y repetir</h2><pre>// Si hay existencias, permito comprar\nif (producto.stock &gt; 0) {\n  console.log(&quot;Disponible&quot;);\n} else {\n  console.log(&quot;Agotado&quot;);\n}\n\n// Recorro todos los productos\nproductos.forEach(function(producto) {\n  console.log(producto.nombre);\n});\n\n// Busco un producto por su id\nconst elegido = productos.find(function(producto) {\n  return String(producto.id) === String(idBuscado);\n});</pre><div class=\"tip\"><code>forEach</code> recorre; <code>find</code> devuelve el primer elemento que coincide; <code>filter</code> devuelve una lista de coincidencias.</div>"},
{"title": "CONCEPTOS · DOM y eventos", "tags": "getElementById querySelector textContent innerHTML addEventListener", "html": "<h2>Cómo conecto HTML y JavaScript</h2><pre>// Busco los elementos del HTML\nconst titulo = document.querySelector(&quot;#titulo&quot;);\nconst boton = document.querySelector(&quot;#saludar&quot;);\n\n// Creo una función que cambia el texto\nfunction saludar() {\n  titulo.textContent = &quot;¡Hola!&quot;;\n}\n\n// Al pulsar el botón, ejecuto mi función\nboton.addEventListener(&quot;click&quot;, saludar);</pre><p><strong>HTML necesario:</strong> <code>&lt;h2 id=\"titulo\"&gt;&lt;/h2&gt;</code> y <code>&lt;button id=\"saludar\"&gt;Saludar&lt;/button&gt;</code>.</p><p><strong>Atención:</strong> escribo <code>saludar</code>, sin paréntesis, para que se ejecute al hacer clic.</p>"},
{"title": "CONCEPTOS · Formularios", "tags": "submit preventDefault value trim input", "html": "<h2>Leer un formulario sin recargar la página</h2><pre>// Busco mi formulario y el campo\nconst formulario = document.getElementById(&quot;formulario&quot;);\nconst nombre = document.getElementById(&quot;nombre&quot;);\n\n// Escucho el envío del formulario\nformulario.addEventListener(&quot;submit&quot;, function(evento) {\n  evento.preventDefault(); // Evito que se recargue\n  const texto = nombre.value.trim();\n  if (texto === &quot;&quot;) {\n    alert(&quot;Escribe un nombre&quot;);\n    return;\n  }\n  console.log(texto);\n});</pre><p>Para formularios, normalmente escucho <code>submit</code> en el formulario, no solo <code>click</code> en el botón.</p>"},
{"title": "CONCEPTOS · JSON y almacenamiento", "tags": "json parse stringify localStorage sessionStorage", "html": "<h2>JSON y localStorage no son lo mismo</h2><pre>// Guardo datos en el navegador\nconst carrito = [{ id: 1, cantidad: 2 }];\nlocalStorage.setItem(&quot;carrito&quot;, JSON.stringify(carrito));\n\n// Recupero los datos guardados\nconst guardado = localStorage.getItem(&quot;carrito&quot;);\nconst carritoRecuperado = JSON.parse(guardado || &quot;[]&quot;);\nconsole.log(carritoRecuperado);</pre><p><strong>JSON</strong> es un formato de datos. <strong>localStorage</strong> guarda texto en el navegador. <strong>JSON Server</strong> es un servidor local que expone una API HTTP. No son intercambiables.</p>"},
{"title": "CONCEPTOS · Fetch y async/await", "tags": "fetch async await try catch json server", "html": "<h2>Consultar datos de un servidor</h2><pre>// Esta función espera la respuesta de JSON Server\nasync function cargarDatos() {\n  try {\n    const respuesta = await fetch(&quot;http://localhost:3000/productos&quot;);\n    if (!respuesta.ok) throw new Error(&quot;Error HTTP &quot; + respuesta.status);\n    const datos = await respuesta.json();\n    console.log(datos);\n  } catch (error) {\n    console.error(&quot;No he podido cargar los datos&quot;, error);\n  }\n}\n\ncargarDatos();</pre><p><strong>Recuerdo:</strong> <code>fetch</code> devuelve una promesa; <code>await</code> espera el resultado dentro de una función <code>async</code>. JSON Server debe estar encendido.</p>"},
{"title": "NAVEGACIÓN · HTML o JavaScript", "tags": "navbar href enlaces window.location botones css", "html": "<h2>Cómo me muevo entre las páginas</h2><h3>Opción recomendada: enlaces HTML</h3><pre>&lt;nav class=&quot;navbar&quot;&gt;\n  &lt;!-- Cada enlace abre su página --&gt;\n  &lt;a href=&quot;index.html&quot;&gt;Inicio&lt;/a&gt;\n  &lt;a href=&quot;productos.html&quot;&gt;Productos&lt;/a&gt;\n  &lt;a href=&quot;carrito.html&quot;&gt;Carrito&lt;/a&gt;\n&lt;/nav&gt;</pre><h3>Otra opción: botones y JavaScript</h3><pre>&lt;nav class=&quot;navbar&quot;&gt;\n  &lt;button type=&quot;button&quot; id=&quot;irInicio&quot;&gt;Inicio&lt;/button&gt;\n  &lt;button type=&quot;button&quot; id=&quot;irProductos&quot;&gt;Productos&lt;/button&gt;\n&lt;/nav&gt;</pre><pre>// Busco los botones y decido qué página abrir\nconst irInicio = document.getElementById(&quot;irInicio&quot;);\nconst irProductos = document.getElementById(&quot;irProductos&quot;);\n\nirInicio.addEventListener(&quot;click&quot;, function() {\n  window.location.href = &quot;index.html&quot;;\n});\n\nirProductos.addEventListener(&quot;click&quot;, function() {\n  window.location.href = &quot;productos.html&quot;;\n});</pre><h3>Para que toda la opción sea pulsable</h3><pre>.navbar { display: flex; gap: 10px; }\n.navbar a, .navbar button {\n  display: block;\n  padding: 14px 20px;\n  cursor: pointer;\n}</pre><div class=\"tip\">En un navbar normal prefiero <code>&lt;a href&gt;</code>: es un enlace real, accesible y funciona sin JavaScript. Uso JavaScript para redirigir después de una acción o según una condición.</div>"},
{"title": "JSON SERVER · Preparación", "tags": "db.json npm json-server localhost 3000", "html": "<h2>Antes de usar CRUD</h2><p>Mi proyecto puede tener <code>index.html</code>, <code>productos.html</code>, <code>css/style.css</code>, <code>js/script.js</code> y <code>db.json</code>.</p><h3>Ejemplo de db.json</h3><pre>{\n  &quot;productos&quot;: [\n    { &quot;id&quot;: &quot;1&quot;, &quot;nombre&quot;: &quot;Disco&quot;, &quot;precio&quot;: 15 },\n    { &quot;id&quot;: &quot;2&quot;, &quot;nombre&quot;: &quot;Libro&quot;, &quot;precio&quot;: 10 }\n  ]\n}</pre><h3>En la terminal del proyecto</h3><pre>npm install json-server\nnpx json-server db.json</pre><p>Compruebo la dirección que muestra la terminal. En la configuración habitual será <code>http://localhost:3000/productos</code>.</p><div class=\"tip\">No necesito Internet para abrir la guía. Para consultar datos sí necesito tener JSON Server ejecutándose localmente.</div>"},
{"title": "CRUD · Elegir la operación", "tags": "get post patch put delete copiar adaptar", "html": "<h2>¿Qué operación necesito?</h2><table style=\"width:100%;border-collapse:collapse\"><tr><th>Quiero...</th><th>Uso...</th></tr><tr><td>Leer datos</td><td><code>GET</code></td></tr><tr><td>Crear un registro</td><td><code>POST</code></td></tr><tr><td>Cambiar algunos campos</td><td><code>PATCH</code></td></tr><tr><td>Sustituir un registro completo</td><td><code>PUT</code></td></tr><tr><td>Eliminar un registro</td><td><code>DELETE</code></td></tr></table><p>En los apartados de CRUD de esta guía tengo <strong>código para copiar</strong> y una explicación de <strong>qué debo modificar</strong>: la URL, la colección, los nombres de los campos y los identificadores.</p>"},
{"title": "COMPROBAR · Lista antes de entregar", "tags": "debug consola errores network revisar checklist", "html": "<h2>Compruebo mi trabajo paso a paso</h2><ol><li>¿El HTML carga y el archivo JavaScript tiene la ruta correcta?</li><li>¿Mis <code>id</code> coinciden exactamente con los del HTML?</li><li>¿He escrito correctamente la URL y el nombre de la colección?</li><li>¿JSON Server está encendido?</li><li>¿Veo errores en la consola del navegador?</li><li>¿He probado cada botón, formulario y enlace?</li><li>¿Los datos se guardan o eliminan realmente en el servidor?</li></ol><div class=\"tip\">Si algo falla, pruebo una sola cosa cada vez. Leo el primer error de la consola y compruebo su línea.</div>"},

{title:'1. No sé cómo empezar',tags:'inicio tareas pasos',html:`<h2>No sé cómo empezar</h2><p>Antes de escribir código, leo el enunciado y busco la acción que me piden.</p><ol class="steps"><li>¿Tengo que <strong>mostrar</strong> algo? → Busco «Mostrar productos».</li><li>¿Tengo que <strong>pulsar</strong> un botón? → Busco «Eventos».</li><li>¿Tengo que <strong>guardar</strong> un producto? → Busco «Carrito».</li><li>¿Tengo que <strong>calcular</strong> el total? → Busco «Total».</li><li>¿Tengo que <strong>leer</strong> un campo? → Busco «Formularios».</li></ol><div class="tip">Truco: hago una sola función, la pruebo y después continúo. No intento hacer toda la tienda a la vez.</div><h3>Mi orden de trabajo</h3><ol><li>Compruebo los <code>id</code> del HTML.</li><li>Selecciono los elementos con JavaScript.</li><li>Preparo los datos.</li><li>Creo una función pequeña.</li><li>Conecto el botón y pruebo.</li></ol>`},
{title:'2. Conectar HTML y JS',tags:'script defer archivos',html:`<h2>Conectar HTML y JavaScript</h2><p>En mi proyecto puedo tener un archivo JavaScript separado. Debo enlazarlo desde el HTML.</p><pre>&lt;!-- Cargo mi archivo JS. defer espera a que se lea el HTML. --&gt;\n&lt;script src="app.js" defer&gt;&lt;/script&gt;</pre><div class="tip">Compruebo el nombre y la ruta del archivo. Si está en una carpeta <code>js</code>, escribo <code>src="js/app.js"</code>.</div>`},
{title:'3. Variables y datos',tags:'let const array objeto productos',html:`<h2>Variables, arrays y objetos</h2><p><code>const</code> sirve para una variable que no voy a reasignar. <code>let</code> sirve si voy a cambiar su valor.</p><pre>const nombreTienda = "Mi tienda";\nlet cantidad = 0;\n\n// Aquí guardo varios productos en una lista.\nconst productos = [\n  { id: 1, nombre: "CD clásico", precio: 12 },\n  { id: 2, nombre: "Vinilo", precio: 25 }\n];\n\n// Leo el nombre del primer producto.\nconsole.log(productos[0].nombre);</pre><div class="tip">Recuerdo: el primer elemento del array está en la posición <code>0</code>.</div>`},
{title:'4. Seleccionar elementos',tags:'getElementById querySelector class id botones',html:`<h2>Encontrar elementos del HTML</h2><p>Si conozco el <code>id</code>, puedo encontrar exactamente ese elemento.</p><pre>&lt;button id="comprar" class="boton"&gt;Comprar&lt;/button&gt;\n&lt;button id="borrar" class="boton"&gt;Borrar&lt;/button&gt;</pre><pre>// Busco cada botón por su id.\nconst botonComprar = document.getElementById("comprar");\nconst botonBorrar = document.getElementById("borrar");\n\n// También puedo usar querySelector.\nconst otroBoton = document.querySelector("#comprar");</pre><div class="tip">Aunque los botones tengan la misma clase, sus <code>id</code> son diferentes. Con <code>querySelectorAll(".boton")</code> seleccionaría los dos.</div>`},
{title:'5. Eventos y botones',tags:'click addEventListener función',html:`<h2>Hacer que un botón funcione</h2><p>Un evento permite ejecutar código cuando alguien pulsa un botón.</p><pre>const boton = document.getElementById("comprar");\n\n// Cuando pulso el botón, ejecuto esta función.\nboton.addEventListener("click", function () {\n  console.log("He pulsado Comprar");\n});</pre><h3>Con una función separada</h3><pre>// Creo una función para poder reutilizarla.\nfunction saludar() {\n  alert("Hola");\n}\n\n// Aquí conecto el botón con la función.\nboton.addEventListener("click", saludar);</pre><div class="tip">Escribo <code>saludar</code> sin paréntesis al conectar el evento: así no se ejecuta antes del clic.</div>`},
{title:'6. Mostrar productos',tags:'forEach innerHTML crear tarjetas plantilla',html:`<h2>Mostrar productos en pantalla</h2><p>Recorro el array y creo una tarjeta por cada producto.</p><pre>&lt;div id="listaProductos"&gt;&lt;/div&gt;</pre><pre>const lista = document.getElementById("listaProductos");\n\n// Vacío la zona antes de volver a dibujar.\nlista.innerHTML = "";\n\n// Recorro mis productos uno por uno.\nproductos.forEach(function (producto) {\n  const tarjeta = document.createElement("div");\n  tarjeta.textContent = producto.nombre + " - " + producto.precio + " €";\n  lista.appendChild(tarjeta);\n});</pre><div class="tip">Uso <code>textContent</code> para escribir texto. Evito introducir datos de usuarios directamente en <code>innerHTML</code>.</div>`},
{title:'7. Añadir al carrito',tags:'push find carrito añadir',html:`<h2>Añadir un producto al carrito</h2><p>El carrito es un array. Cuando elijo un producto, lo añado.</p><pre>const carrito = [];\n\n// Recibo el id del producto elegido.\nfunction anadirAlCarrito(id) {\n  // Busco el producto que tiene ese id.\n  const producto = productos.find(p => p.id === id);\n\n  // Solo lo añado si existe.\n  if (producto) {\n    carrito.push(producto);\n    console.log(carrito);\n  }\n}\n\n// Pruebo con el producto de id 1.\nanadirAlCarrito(1);</pre><div class="tip"><code>find()</code> busca un elemento. <code>push()</code> añade un elemento al final del array.</div>`},
{title:'8. Evitar duplicados',tags:'some único repetido carrito',html:`<h2>Evitar añadir dos veces el mismo producto</h2><p>Si quiero productos únicos, compruebo antes si ya está en el carrito.</p><pre>function anadirSinRepetir(id) {\n  const producto = productos.find(p => p.id === id);\n  if (!producto) return;\n\n  // Compruebo si el producto ya está guardado.\n  const repetido = carrito.some(p => p.id === id);\n\n  if (!repetido) {\n    carrito.push(producto);\n  } else {\n    alert("Este producto ya está en el carrito");\n  }\n}</pre><div class="tip"><code>some()</code> devuelve <code>true</code> cuando encuentra al menos una coincidencia.</div>`},
{title:'9. Borrar del carrito',tags:'filter splice eliminar borrar',html:`<h2>Eliminar un producto del carrito</h2><p>Busco su posición y lo elimino.</p><pre>function borrarProducto(id) {\n  // Busco la posición del producto.\n  const posicion = carrito.findIndex(p => p.id === id);\n\n  // Si lo encuentro, lo borro.\n  if (posicion !== -1) {\n    carrito.splice(posicion, 1);\n  }\n}</pre><div class="tip"><code>findIndex()</code> devuelve <code>-1</code> si no encuentra el producto. <code>splice(posicion, 1)</code> borra un elemento.</div>`},
{title:'10. Calcular el total',tags:'reduce suma precio cantidad',html:`<h2>Calcular el precio total</h2><p>Sumo el precio de todos los productos del carrito.</p><pre>function calcularTotal() {\n  // Empiezo en 0 y sumo cada precio.\n  const total = carrito.reduce(function (suma, producto) {\n    return suma + producto.precio;\n  }, 0);\n\n  return total;\n}\n\nconsole.log(calcularTotal());</pre><div class="tip">Si hay cantidades, sumo <code>producto.precio * producto.cantidad</code> en vez de solo el precio.</div>`},
{title:'11. Formularios',tags:'input value trim submit preventDefault',html:`<h2>Leer los datos de un formulario</h2><pre>&lt;form id="formulario"&gt;\n  &lt;input id="nombre" type="text" required&gt;\n  &lt;button type="submit"&gt;Enviar&lt;/button&gt;\n&lt;/form&gt;</pre><pre>const formulario = document.getElementById("formulario");\n\nformulario.addEventListener("submit", function (evento) {\n  // Evito que la página se recargue.\n  evento.preventDefault();\n\n  // Leo el texto y quito espacios sobrantes.\n  const nombre = document.getElementById("nombre").value.trim();\n\n  if (nombre === "") {\n    alert("Escribe tu nombre");\n    return;\n  }\n\n  console.log(nombre);\n});</pre>`},
{title:'12. Condiciones y bucles',tags:'if else for forEach',html:`<h2>Tomar decisiones y repetir acciones</h2><pre>// Si el carrito está vacío, aviso.\nif (carrito.length === 0) {\n  alert("El carrito está vacío");\n} else {\n  alert("Puedes continuar con la compra");\n}\n\n// Recorro los productos uno a uno.\nproductos.forEach(function (producto) {\n  console.log(producto.nombre);\n});</pre><div class="tip"><code>===</code> compara valores. <code>=</code> asigna un valor. ¡No son lo mismo!</div>`},
{title:'13. Guardar datos',tags:'localStorage JSON stringify parse',html:`<h2>Guardar el carrito en el navegador</h2><p>Solo lo uso si el enunciado pide mantener el carrito después de recargar.</p><pre>// Convierto el array a texto y lo guardo.\nlocalStorage.setItem("carrito", JSON.stringify(carrito));\n\n// Recupero el texto guardado y lo convierto en array.\nconst carritoGuardado = JSON.parse(\n  localStorage.getItem("carrito") || "[]"\n);</pre><div class="tip"><code>localStorage</code> funciona sin Internet, pero puede estar limitado si el archivo se abre directamente como <code>file://</code>. Pruébalo antes en el entorno real del examen.</div>`},
{title:'14. Leer un JSON con fetch',tags:'fetch db json servidor asincrono',html:`<h2>Leer datos desde un archivo JSON</h2><p>Cuando el proyecto usa un servidor local o una ruta que funciona desde Moodle.</p><pre>// Pido el archivo de productos.\nfetch("productos.json")\n  .then(respuesta => {\n    if (!respuesta.ok) throw new Error("No se pudo cargar");\n    return respuesta.json();\n  })\n  .then(datos => {\n    console.log(datos);\n  })\n  .catch(error => console.error(error));</pre><div class="tip">Importante: sin Internet sí puedo usar un servidor local preparado, pero <code>fetch()</code> de un archivo local puede fallar. Si no hay servidor, uso un array de productos dentro del JavaScript.</div>`},
{title:'15. Errores habituales',tags:'console error depurar null undefined',html:`<h2>Cuando algo no funciona</h2><ol><li>Abro la consola del navegador (F12, si está permitido).</li><li>Leo el primer error rojo.</li><li>Compruebo las comillas, paréntesis, llaves y nombres.</li><li>Compruebo si el <code>id</code> coincide exactamente.</li><li>Pongo un <code>console.log()</code> para ver el valor.</li></ol><details><summary>Cannot read properties of null</summary><p>El elemento no se ha encontrado. Reviso el <code>id</code> y si el script se ejecuta antes de cargar el HTML.</p></details><details><summary>... is not defined</summary><p>Estoy usando un nombre de variable o función que no existe o está mal escrito.</p></details><details><summary>Unexpected token</summary><p>Puede faltar una coma, llave, paréntesis o comilla. Reviso la línea indicada y la anterior.</p></details>`},
{title:'16. Mi plan de trabajo',tags:'checklist tiempo organización',html:`<h2>Mi plan para resolver una tarea</h2><p>No tengo que memorizar todo: busco un ejemplo, lo comprendo y lo adapto.</p><ol><li>Leo la tarea completa.</li><li>Subrayo qué debe hacer cada botón.</li><li>Identifico los <code>id</code> del HTML.</li><li>Busco el tema correspondiente en esta guía.</li><li>Copio solo la estructura necesaria y cambio nombres.</li><li>Pruebo una funcionalidad antes de seguir.</li><li>Guardo los archivos y compruebo el resultado.</li></ol><div class="tip">Si me bloqueo: busco el botón o la función más pequeña que pueda hacer. Empiezo por ella.</div><h3>Lista final de comprobación</h3><label><input type="checkbox"> La página abre correctamente</label><p><label><input type="checkbox"> Los botones hacen lo esperado</label></p><p><label><input type="checkbox"> No hay errores en la consola</label></p><p><label><input type="checkbox"> He probado el carrito vacío</label></p><p><label><input type="checkbox"> He guardado mis archivos</label></p>`}

,{title:'17. Estructura de un proyecto con varias páginas',tags:'carpetas paginas html css js estructura',html:`<h2>Mi proyecto tiene varias páginas</h2><p>Cada archivo HTML es una página. Los archivos CSS y JS pueden estar en carpetas separadas.</p><pre>mi-tienda/
  index.html
  productos.html
  carrito.html
  detalle.html
  css/
    style.css
  js/
    app.js
  img/
    camiseta.jpg
  db.json</pre><h3>En cada HTML</h3><pre>&lt;!-- Enlazo el CSS que está en la carpeta css. --&gt;
&lt;link rel="stylesheet" href="css/style.css"&gt;

&lt;!-- Enlazo mi JavaScript y espero a que cargue el HTML. --&gt;
&lt;script src="js/app.js" defer&gt;&lt;/script&gt;</pre><div class="tip">Compruebo siempre la ruta desde el HTML que estoy editando. <code>db.json</code> no es una página web.</div>`}
,{title:'18. Ir de una página a otra con enlaces',tags:'navbar navegacion menu enlaces href anchor paginas',html:`<h2>Crear un navbar para navegar</h2><p>Uso enlaces <code>&lt;a&gt;</code> para cambiar de página. No necesito JavaScript para esto.</p><pre>&lt;nav class="navbar"&gt;
  &lt;!-- Cada enlace me lleva a una página diferente. --&gt;
  &lt;a href="index.html"&gt;Inicio&lt;/a&gt;
  &lt;a href="productos.html"&gt;Productos&lt;/a&gt;
  &lt;a href="carrito.html"&gt;Carrito&lt;/a&gt;
&lt;/nav&gt;</pre><h3>Que se pueda pulsar en toda la opción</h3><pre>/* Doy espacio al enlace completo, no solo al texto. */
.navbar a {
  display: block;
  padding: 16px 22px;
  text-decoration: none;
}

/* Marco el enlace al pasar el ratón o usar el teclado. */
.navbar a:hover,
.navbar a:focus-visible {
  background: #dbeafe;
}</pre><div class="tip">La zona clicable es todo el rectángulo del enlace gracias a <code>display: block</code> y <code>padding</code>. No pongo el evento en el <code>nav</code> entero: cada enlace debe ir a su propia página.</div>`}
,{title:'19. Navegar con JavaScript',tags:'window location href click botones navbar menu javascript cambiar pagina detalle urlsearchparams',html:`<h2>Cambiar de página desde JavaScript</h2><p>Uso esta opción si quiero navegar después de pulsar un botón o ejecutar una acción.</p><pre>&lt;button id="verCarrito"&gt;Ver carrito&lt;/button&gt;</pre><pre>// Busco el botón y escucho el clic.
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", function () {
  // Abro la página del carrito en la misma pestaña.
  window.location.href = "carrito.html";
});</pre><h3>Opción 2 completa: navbar con JavaScript</h3><p>En esta opción pongo botones dentro del menú y JavaScript decide qué página abrir. Puedo pulsar en todo el botón.</p><h3>HTML</h3><pre>&lt;nav class="navbar" aria-label="Menú principal"&gt;
  &lt;!-- Creo un botón para cada página. --&gt;
  &lt;button type="button" id="irInicio"&gt;Inicio&lt;/button&gt;
  &lt;button type="button" id="irProductos"&gt;Productos&lt;/button&gt;
  &lt;button type="button" id="irCarrito"&gt;Carrito&lt;/button&gt;
&lt;/nav&gt;

&lt;!-- Cargo el archivo después del HTML. --&gt;
&lt;script src="js/navegacion.js"&gt;&lt;/script&gt;</pre><h3>JavaScript: js/navegacion.js</h3><pre>// Busco cada botón por su id.
const irInicio = document.getElementById("irInicio");
const irProductos = document.getElementById("irProductos");
const irCarrito = document.getElementById("irCarrito");

// Cuando pulso Inicio, abro index.html.
irInicio.addEventListener("click", function () {
  window.location.href = "index.html";
});

// Cuando pulso Productos, abro productos.html.
irProductos.addEventListener("click", function () {
  window.location.href = "productos.html";
});

// Cuando pulso Carrito, abro carrito.html.
irCarrito.addEventListener("click", function () {
  window.location.href = "carrito.html";
});</pre><h3>CSS: para poder pulsar en toda la opción</h3><pre>/* Coloco las opciones del menú una al lado de otra. */
.navbar { display: flex; gap: 10px; flex-wrap: wrap; }

/* Amplío la zona que puedo pulsar. */
.navbar button {
  padding: 16px 22px;
  border: 0;
  cursor: pointer;
  font: inherit;
}

/* Muestro cuál estoy señalando con el ratón o teclado. */
.navbar button:hover,
.navbar button:focus-visible { background: #dbeafe; }</pre><details><summary>¿Qué tengo que modificar en mi proyecto?</summary><ol><li>Cambio <code>index.html</code>, <code>productos.html</code> y <code>carrito.html</code> por mis archivos reales.</li><li>Compruebo que cada <code>id</code> del HTML coincide con el del JavaScript.</li><li>Si quiero el mismo menú en varias páginas, lo añado a cada HTML y enlazo el archivo <code>navegacion.js</code>.</li><li>Si los HTML están en carpetas diferentes, reviso las rutas relativas.</li></ol></details><div class="tip">Elijo <strong>HTML con &lt;a href&gt;</strong> para enlaces normales; elijo <strong>JavaScript con window.location.href</strong> cuando la navegación depende de una acción. Las dos opciones funcionan sin Internet si los archivos HTML están disponibles.</div><h3>Enviar el id del producto a la página de detalle</h3><pre>// Voy al detalle del producto que ha elegido la persona.
function abrirDetalle(id) {
  window.location.href = "detalle.html?id=" + id;
}</pre><h3>Leer el id desde detalle.html</h3><pre>// Leo el id que llega en la dirección de la página.
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

console.log(id);</pre><div class="tip">Para un menú normal prefiero <code>&lt;a href="..."&gt;</code>. Uso <code>window.location.href</code> cuando la navegación depende de una acción de JavaScript.</div>`}
,{title:'20. JSON Server: preparar e iniciar',tags:'json-server db.json npm terminal localhost 3000 offline instalar',html:`<h2>Trabajar con JSON Server</h2><p>JSON Server simula una API REST a partir de <code>db.json</code>. No es lo mismo que abrir el archivo JSON directamente.</p><h3>1. Creo db.json</h3><pre>{
  "productos": [
    { "id": "1", "nombre": "Camiseta", "precio": 20 },
    { "id": "2", "nombre": "Gorra", "precio": 12 }
  ],
  "pedidos": []
}</pre><h3>2. Preparo el programa (una vez, con acceso a los paquetes)</h3><pre>npm install --save-dev json-server</pre><h3>3. Inicio el servidor desde la carpeta del proyecto</h3><pre>npx json-server db.json --port 3000</pre><p>Mientras la terminal esté abierta, puedo consultar <code>http://localhost:3000/productos</code>.</p><div class="tip">Sin Internet: la guía sí funciona; JSON Server también puede funcionar sin Internet <strong>si ya está instalado</strong>. La primera instalación con npm normalmente necesita acceso a los paquetes. Para cargar el HTML uso un servidor web local o el entorno preparado por el profesor.</div>`}
,{title:'21. JSON Server: GET y mostrar productos',tags:'fetch get productos json server async await api mostrar',html:`<h2>Consultar productos (GET)</h2><p>Con <code>GET</code> pido datos a JSON Server. La respuesta tarda un poco, por eso uso <code>async</code> y <code>await</code>.</p><pre>&lt;div id="productos"&gt;&lt;/div&gt;</pre><pre>// Guardo la dirección del servidor local.
const API = "http://localhost:3000/productos";

async function cargarProductos() {
  try {
    // Pido los productos al servidor.
    const respuesta = await fetch(API);
    if (!respuesta.ok) throw new Error("Error al cargar");

    // Convierto la respuesta en un array de objetos.
    const productos = await respuesta.json();
    const zona = document.getElementById("productos");
    zona.innerHTML = "";

    // Creo un elemento para cada producto.
    productos.forEach(function (producto) {
      const linea = document.createElement("p");
      linea.textContent = producto.nombre + " - " + producto.precio + " €";
      zona.appendChild(linea);
    });
  } catch (error) {
    console.error(error);
  }
}

// Cargo los datos al abrir esta página.
cargarProductos();</pre><div class="tip">Si no aparecen los productos, compruebo que JSON Server siga abierto, que el nombre de la colección sea correcto y que la consola no muestre errores.</div>`}
,{title:'22. JSON Server: POST, PATCH y DELETE',tags:'fetch post patch delete guardar editar borrar servidor metodo headers stringify',html:`<h2>Guardar, modificar y borrar datos</h2><p>Los tres ejemplos trabajan con la colección <code>productos</code> de JSON Server.</p><h3>POST: crear</h3><pre>// Envío un producto nuevo al servidor.
await fetch("http://localhost:3000/productos", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nombre: "Sudadera", precio: 30 })
});</pre><h3>PATCH: cambiar un dato</h3><pre>// Cambio solo el precio del producto con id 1.
await fetch("http://localhost:3000/productos/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ precio: 25 })
});</pre><h3>DELETE: borrar</h3><pre>// Borro el producto con id 2 del servidor.
await fetch("http://localhost:3000/productos/2", {
  method: "DELETE"
});</pre><div class="tip">Estos fragmentos con <code>await</code> deben estar dentro de una función <code>async</code> (o de un módulo que admita await). En un proyecto real compruebo <code>respuesta.ok</code> y gestiono los errores. Los identificadores de la URL deben existir para modificar o borrar.</div>`}
,{title:'23. Navbar: ejemplo completo',tags:'navbar completo html css click zona menu accesible',html:`<h2>Ejemplo completo de navbar</h2><p>Este ejemplo funciona sin JavaScript: puedo hacer clic en cualquier parte de cada opción.</p><h3>HTML</h3><pre>&lt;nav class="menu" aria-label="Menú principal"&gt;
  &lt;a href="index.html"&gt;Inicio&lt;/a&gt;
  &lt;a href="productos.html"&gt;Productos&lt;/a&gt;
  &lt;a href="carrito.html"&gt;Carrito&lt;/a&gt;
&lt;/nav&gt;</pre><h3>CSS</h3><pre>.menu {
  display: flex;
  flex-wrap: wrap;
  background: #20324a;
}

.menu a {
  display: block;
  padding: 18px 24px;
  color: white;
  text-decoration: none;
}

.menu a:hover,
.menu a:focus-visible {
  background: #405e82;
}</pre><div class="tip">Si el menú está en varias páginas, copio la misma estructura en cada HTML. Si estoy dentro de una subcarpeta, reviso las rutas relativas de <code>href</code>.</div>`}
,{title:'24. Mapa rápido: qué necesito hacer',tags:'ayuda buscar decision chuleta indice errores',html:`<h2>¿Qué código necesito?</h2><ul><li><strong>Pasar a otra página:</strong> apartado 18 o 19.</li><li><strong>Hacer clic en toda la opción del menú:</strong> apartado 18 o 23.</li><li><strong>Leer productos del servidor:</strong> apartado 21 (GET).</li><li><strong>Crear, editar o borrar en el servidor:</strong> apartado 22.</li><li><strong>Escuchar un botón:</strong> apartado 5.</li><li><strong>Mostrar tarjetas:</strong> apartado 6.</li><li><strong>Guardar en un carrito local:</strong> apartados 7 a 10.</li><li><strong>Leer un formulario:</strong> apartado 11.</li><li><strong>Encontrar un error:</strong> apartado 15.</li></ul><div class="tip">Mi rutina: leo la tarea → elijo un apartado → adapto nombres e identificadores → pruebo una cosa → continúo. No necesito aprender cada línea de memoria.</div>`}

,{title:"25. CRUD · GET: copiar y adaptar",tags:"crud get copiar plantilla listar fetch json server",html:"<h2>25. CRUD · GET: copiar y adaptar</h2><p>GET sirve para obtener los registros y mostrarlos en la página.</p><h3>1. Copio este código</h3><pre>// Cambio esta dirección según mi colección de db.json.\nconst API = &quot;http://localhost:3000/productos&quot;;\n\n// Busco el contenedor que tengo en mi HTML.\nconst contenedor = document.getElementById(&quot;listaProductos&quot;);\n\nasync function cargarProductos() {\n  try {\n    // Pido los productos al servidor.\n    const respuesta = await fetch(API);\n    if (!respuesta.ok) throw new Error(&quot;Error al consultar&quot;);\n    const productos = await respuesta.json();\n\n    // Limpio el contenedor antes de mostrar los resultados.\n    contenedor.innerHTML = &quot;&quot;;\n    productos.forEach(producto =&gt; {\n      const tarjeta = document.createElement(&quot;p&quot;);\n      tarjeta.textContent = producto.nombre + &quot; - &quot; + producto.precio + &quot; €&quot;;\n      contenedor.appendChild(tarjeta);\n    });\n  } catch (error) {\n    console.error(&quot;No he podido cargar los productos:&quot;, error);\n  }\n}\n\n// Llamo a la función cuando el HTML ya está preparado.\ncargarProductos();</pre><h3>2. Lo adapto a mi proyecto</h3><ul><li>En mi HTML necesito <code>&lt;div id=\"listaProductos\"&gt;&lt;/div&gt;</code>.</li><li>Sustituyo <code>productos</code> por mi colección real: por ejemplo, <code>properties</code>.</li><li>Sustituyo <code>nombre</code> y <code>precio</code> por los campos que tenga cada registro.</li><li>Si mi JavaScript se carga en el <code>head</code>, uso <code>defer</code>.</li></ul><div class=\"tip\">3. Compruebo que JSON Server está funcionando. Abro la consola (F12), pruebo la acción y reviso si los datos han cambiado en db.json.</div>"}
,{title:"26. CRUD · POST: copiar y adaptar",tags:"crud post copiar plantilla crear formulario json server",html:"<h2>26. CRUD · POST: copiar y adaptar</h2><p>POST sirve para guardar un registro nuevo en db.json.</p><h3>1. Copio este código</h3><pre>const API = &quot;http://localhost:3000/productos&quot;;\n\nasync function crearProducto() {\n  // Leo los valores que ha escrito el usuario.\n  const nombre = document.getElementById(&quot;nombre&quot;).value.trim();\n  const precio = Number(document.getElementById(&quot;precio&quot;).value);\n  if (!nombre || !Number.isFinite(precio) || precio &lt; 0) return;\n\n  try {\n    // Envío los datos al servidor.\n    const respuesta = await fetch(API, {\n      method: &quot;POST&quot;,\n      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },\n      body: JSON.stringify({ nombre: nombre, precio: precio })\n    });\n    if (!respuesta.ok) throw new Error(&quot;No se ha guardado&quot;);\n    console.log(&quot;Producto creado:&quot;, await respuesta.json());\n  } catch (error) {\n    console.error(&quot;Error al guardar:&quot;, error);\n  }\n}\n\n// Conecto la función al formulario.\ndocument.getElementById(&quot;formProducto&quot;).addEventListener(&quot;submit&quot;, function(evento) {\n  evento.preventDefault(); // Evito que la página se recargue.\n  crearProducto();\n});</pre><h3>2. Lo adapto a mi proyecto</h3><ul><li>Necesito un <code>&lt;form id=\"formProducto\"&gt;</code> con campos <code>id=\"nombre\"</code> y <code>id=\"precio\"</code> y un botón de tipo <code>submit</code>.</li><li>Cambio la colección <code>productos</code> por la mía.</li><li>Cambio los nombres de campos en <code>JSON.stringify</code> según mi <code>db.json</code>.</li><li>No escribo un <code>id</code> manual salvo que el proyecto lo requiera.</li></ul><div class=\"tip\">3. Compruebo que JSON Server está funcionando. Abro la consola (F12), pruebo la acción y reviso si los datos han cambiado en db.json.</div>"}
,{title:"27. CRUD · PATCH: copiar y adaptar",tags:"crud patch copiar plantilla modificar editar json server",html:"<h2>27. CRUD · PATCH: copiar y adaptar</h2><p>PATCH cambia solamente los campos que indico, sin reemplazar todo el registro.</p><h3>1. Copio este código</h3><pre>const API = &quot;http://localhost:3000/productos&quot;;\n\nasync function cambiarPrecio(id, nuevoPrecio) {\n  try {\n    // Añado el id a la dirección para elegir el registro.\n    const respuesta = await fetch(API + &quot;/&quot; + id, {\n      method: &quot;PATCH&quot;,\n      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },\n      body: JSON.stringify({ precio: Number(nuevoPrecio) })\n    });\n    if (!respuesta.ok) throw new Error(&quot;No se ha actualizado&quot;);\n    console.log(&quot;Registro actualizado:&quot;, await respuesta.json());\n  } catch (error) {\n    console.error(&quot;Error al modificar:&quot;, error);\n  }\n}\n\n// EJEMPLO: cambio el precio del registro con id 1.\n// En mi proyecto uso el id real del registro elegido.\ncambiarPrecio(&quot;1&quot;, 25);</pre><h3>2. Lo adapto a mi proyecto</h3><ul><li>Cambio <code>productos</code> por mi colección.</li><li>Cambio <code>precio</code> por el campo que quiera modificar.</li><li>Sustituyo <code>\"1\"</code> por el identificador del registro seleccionado; no siempre será 1.</li><li>Si necesito reemplazar el registro completo, estudio <code>PUT</code>; para cambiar un campo utilizo <code>PATCH</code>.</li></ul><div class=\"tip\">3. Compruebo que JSON Server está funcionando. Abro la consola (F12), pruebo la acción y reviso si los datos han cambiado en db.json.</div>"}
,{title:"28. CRUD · DELETE: copiar y adaptar",tags:"crud delete copiar plantilla borrar eliminar json server",html:"<h2>28. CRUD · DELETE: copiar y adaptar</h2><p>DELETE elimina del servidor un registro por su identificador.</p><h3>1. Copio este código</h3><pre>const API = &quot;http://localhost:3000/productos&quot;;\n\nasync function borrarProducto(id) {\n  // Confirmo antes de borrar los datos.\n  if (!confirm(&quot;¿Quieres eliminar este registro?&quot;)) return;\n\n  try {\n    const respuesta = await fetch(API + &quot;/&quot; + id, {\n      method: &quot;DELETE&quot;\n    });\n    if (!respuesta.ok) throw new Error(&quot;No se ha eliminado&quot;);\n    console.log(&quot;Registro eliminado correctamente&quot;);\n    // Si muestro una lista, la vuelvo a cargar aquí.\n  } catch (error) {\n    console.error(&quot;Error al eliminar:&quot;, error);\n  }\n}\n\n// EJEMPLO: elimino el registro cuyo id es 1.\n// En el proyecto paso el id del botón pulsado.\nborrarProducto(&quot;1&quot;);</pre><h3>2. Lo adapto a mi proyecto</h3><ul><li>Cambio <code>productos</code> por el nombre de mi colección.</li><li>Paso a <code>borrarProducto(id)</code> el id del elemento seleccionado.</li><li>Para DELETE no necesito <code>body</code> ni <code>JSON.stringify</code>.</li><li>Después de borrar, actualizo la lista para que la pantalla muestre los cambios.</li></ul><div class=\"tip\">3. Compruebo que JSON Server está funcionando. Abro la consola (F12), pruebo la acción y reviso si los datos han cambiado en db.json.</div>"}
,{title:"29. CRUD · Qué debo cambiar y errores frecuentes",tags:"crud errores checklist plantilla adaptar datos json server",html:"<h2>29. CRUD · Qué debo cambiar y errores frecuentes</h2><p>Uso esta lista cada vez que copio un ejemplo.</p><h3>1. Copio este código</h3><pre>// Ejemplo de db.json (lo guardo en el proyecto):\n{\n  &quot;productos&quot;: [\n    { &quot;id&quot;: &quot;1&quot;, &quot;nombre&quot;: &quot;Camiseta&quot;, &quot;precio&quot;: 15 }\n  ]\n}\n\n// Inicio JSON Server desde la terminal del proyecto:\n// npx json-server db.json --port 3000\n\n// Mi ruta para GET y POST:\n// http://localhost:3000/productos\n\n// Mi ruta para PATCH y DELETE de un registro:\n// http://localhost:3000/productos/1</pre><h3>2. Lo adapto a mi proyecto</h3><ul><li>Compruebo que el nombre de la colección coincide exactamente con <code>db.json</code>.</li><li>Compruebo los <code>id</code> del HTML y los campos de cada objeto.</li><li>Compruebo el puerto (<code>3000</code>) y que el servidor siga abierto.</li><li>Un error <code>404</code> suele indicar una ruta o un id inexistente.</li><li>Si no se encuentra un botón o formulario, compruebo que el script se ejecuta después de leer el HTML.</li><li>No confundo borrar del DOM con borrar de JSON Server: para guardar el cambio necesito <code>DELETE</code>.</li></ul><div class=\"tip\">3. Compruebo que JSON Server está funcionando. Abro la consola (F12), pruebo la acción y reviso si los datos han cambiado en db.json.</div>"}
];

// Selecciono el idioma. Los ejemplos de programación conservan la sintaxis original.
let language='es';
const ui={
 es:{headline:'JavaScript paso a paso · Guía de consulta',sub:'Para aprender, practicar y consultar durante cualquier proyecto o examen · Sin Internet',choose:'Elige un bloque',learn:'📘 Aprender JavaScript',project:'🛠 Resolver proyectos',search:'Ej.: botón, carrito...',large:'Aumentar letra',normal:'Tamaño normal',hint:'Elige un tema. Solo se muestra uno cada vez para facilitar la lectura.',prev:'← Anterior',next:'Siguiente →',print:'Imprimir guía',copy:'Copiar código',copied:'Copiado',learnDesc:'Conceptos y ejemplos siguiendo el temario de clase.',projectDesc:'Orden de trabajo, navegación, tienda, JSON Server y CRUD.',missing:'No encuentro ese término en este bloque. Prueba en el otro bloque.',section:'Apartado',source:'Explicación completa original en castellano'},
 eu:{headline:'JavaScript pausoz pauso · Kontsulta-gida',sub:'Ikasteko, praktikatzeko eta edozein proiektu edo azterketatan kontsultatzeko · Internetik gabe',choose:'Aukeratu bloke bat',learn:'📘 JavaScript ikasi',project:'🛠 Proiektuak egin',search:'Adib.: botoia, saskia...',large:'Letra handitu',normal:'Ohiko letra-tamaina',hint:'Aukeratu gai bat. Aldi bakoitzean gai bakarra erakusten da.',prev:'← Aurrekoa',next:'Hurrengoa →',print:'Gida inprimatu',copy:'Kodea kopiatu',copied:'Kopiatuta',learnDesc:'Ikasgelako gaiak eta adibideak.',projectDesc:'Lanaren antolaketa, nabigazioa, denda, JSON Server eta CRUD.',missing:'Ez da aurkitu. Saiatu beste blokean.',section:'Atala',source:'Jatorrizko azalpen osoa gaztelaniaz'},
 en:{headline:'JavaScript step by step · Reference guide',sub:'Learn, practise and consult during any project or exam · Works offline',choose:'Choose a block',learn:'📘 Learn JavaScript',project:'🛠 Build projects',search:'E.g. button, cart...',large:'Increase text size',normal:'Normal text size',hint:'Choose a topic. Only one topic is shown at a time.',prev:'← Previous',next:'Next →',print:'Print guide',copy:'Copy code',copied:'Copied',learnDesc:'Class topics and short examples.',projectDesc:'Work order, navigation, shop, JSON Server and CRUD.',missing:'No results. Try the other block.',section:'Section',source:'Full original explanation in Spanish'}
};
const groupNames={eu:['Sarrera eta JS HTMLn','JavaScript-en oinarriak','DOM eta gertaerak','JSON eta biltegiratzea','Fetch eta asinkronia','Programatzen hasi aurretik','Egitura eta nabigazioa','Formularioak eta denda','JSON Server','CRUD: kopiatu eta egokitu','Berrikusi eta zuzendu'],en:['Introduction and JS in HTML','JavaScript fundamentals','DOM and events','JSON and storage','Fetch and asynchronous code','Before coding','Structure and navigation','Forms and shop','JSON Server','CRUD: copy and adapt','Review and debug']};
const terms=[['Orden de trabajo','Lanaren ordena','Work order'],['Introducción','Sarrera','Introduction'],['Variables','Aldagaiak','Variables'],['Funciones','Funtzioak','Functions'],['Condiciones','Baldintzak','Conditions'],['Bucles','Begiztak','Loops'],['Eventos','Gertaerak','Events'],['Navegación','Nabigazioa','Navigation'],['Estructura','Egitura','Structure'],['Formularios','Formularioak','Forms'],['Carrito','Saskia','Cart'],['Productos','Produktuak','Products'],['Producto','Produktua','Product'],['Errores','Erroreak','Errors'],['Copiar y adaptar','Kopiatu eta egokitu','Copy and adapt'],['copiar y adaptar','kopiatu eta egokitu','copy and adapt'],['Cómo empezar','Nola hasi','How to start'],['Cómo organizo','Nola antolatzen dut','How I organise'],['Qué debo cambiar','Zer aldatu behar dut','What I need to change'],['Mapa rápido','Mapa azkarra','Quick map'],['Almacenamiento','Biltegiratzea','Storage'],['Ejemplo','Adibidea','Example'],['Práctica','Praktika','Practice'],['JavaScript en HTML','JavaScript HTMLn','JavaScript in HTML'],['Crear','Sortu','Create'],['Modificar','Aldatu','Update'],['Eliminar','Ezabatu','Delete'],['Mostrar','Erakutsi','Display'],['Buscar','Bilatu','Search'],['Páginas','Orriak','Pages'],['páginas','orriak','pages'],['Revisar','Berrikusi','Review'],['JSON Server','JSON Server','JSON Server']];
function trTitle(s){if(language==='es')return s;
    let out=s;
    for(const [es,eu,en] of terms)out=out.replaceAll(es,language==='eu'?eu:en);
    return out}
function applyLanguage(){const t=ui[language];
    document.documentElement.lang=language;
    document.querySelector('header h1').textContent=t.headline;
    document.querySelector('header p').textContent=t.sub;
    document.querySelector('nav > strong').textContent=t.choose;
    document.getElementById('tabLearn').textContent=t.learn;
    document.getElementById('tabProject').textContent=t.project;
    document.getElementById('search').placeholder=t.search;
    document.getElementById('larger').textContent=document.body.classList.contains('large')?t.normal:t.large;
    document.querySelector('nav > p.small:last-child').textContent=t.hint;
    document.getElementById('prev').textContent=t.prev;
    document.getElementById('next').textContent=t.next;
    document.getElementById('print').textContent=t.print;
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
    document.getElementById('blockDescription').textContent=block==='learn'?t.learnDesc:t.projectDesc;show(current)}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.lang;applyLanguage()}));
function translatedTopic(topic){if(language==='es')return topic.html;
    const title=trTitle(topic.title);
    const eu=language==='eu';
    const instructions=eu?['1. Irakurri ariketaren enuntziatua eta identifikatu behar dituzun elementuak.','2. Aztertu beheko adibidea eta kopiatu behar duzun kodea.','3. Egokitu IDak, aldagaiak, fitxategi-izenak eta JSON Server-eko helbidea.','4. Probatu urratsez urrats eta begiratu kontsolan erroreak dauden.']:['1. Read the task and identify the HTML elements you need.','2. Study the example below and copy the code you need.','3. Adapt IDs, variables, file names and the JSON Server URL.','4. Test each step and check the console for errors.'];
    const pres=[...topic.html.matchAll(/<pre(?:\s[^>]*)?>([\s\S]*?)<\/pre>/gi)].map(x=>x[0]);
    const note=eu?'Kodea erreferentzia gisa erabil dezakezu. Ez duzu buruz ikasi behar.':'You can use the code as a reference. You do not need to memorise it.';
    const codeHeading=eu?'Kode-adibideak (kopiatu eta egokitu)':'Code examples (copy and adapt)';
    const source=ui[language].source;return `<h2>${title}</h2><div class="translated-note"><p>${note}</p><ol>${instructions.map(x=>`<li>${x}</li>`).join('')}</ol></div><h3>${codeHeading}</h3>${pres.join('')||'<p>'+ (eu?'Atal honetan ez dago kopiatzeko kode-blokerik.':'This section has no copyable code block.')+'</p>'}<details class="source-details"><summary>${source}</summary>${topic.html}</details>`}

const links=document.getElementById('links'), content=document.getElementById('content'), status=document.getElementById('status');
let current=0;
// Aquí coloreo las palabras del código para facilitar la lectura.
function highlight(raw){let html=raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    return html.replace(/(\/\/[^\n]*|&lt;!--[\s\S]*?--&gt;|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:const|let|function|return|if|else|new|throw)\b|\b\d+\b)/g,token=>{let cls=token.startsWith('//')||token.startsWith('&lt;!--')?'com':token.startsWith('"')||token.startsWith("'")?'str':/^\d+$/.test(token)?'num':'kw';
    return `<span class="${cls}">${token}</span>`})}
function show(i){current=Math.max(0,Math.min(topics.length-1,i));
    const topic=topics[current];content.innerHTML=translatedTopic(topic);
    content.querySelectorAll('pre').forEach(pre=>{const code=pre.textContent;
        pre.innerHTML=highlight(code);
        const button=document.createElement('button');
        button.textContent=ui[language].copy;
        button.type='button';
        button.style.cssText='margin-top:8px;padding:6px 10px;border-radius:7px;border:1px solid #9eb2d0;cursor:pointer';
        button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(code);
            button.textContent=ui[language].copied}catch(e){button.textContent='Selecciona y copia el código'}});
            pre.after(button)});
            const order=(block==='learn'?learnGroups:projectGroups).flatMap(g=>g.ids);
            const position=order.indexOf(current);status.textContent=`${block==='learn'?ui[language].learn:ui[language].project} · ${ui[language].section} ${position+1} / ${order.length}`;renderLinks();document.getElementById('prev').disabled=position<=0;document.getElementById('next').disabled=position>=order.length-1;}
// Divido la guía en dos bloques. Los contenidos originales siguen disponibles.
const learnGroups=[
 {name:'1 · Introducción y JS en HTML',ids:[13,12]},
 {name:'2 · Fundamentos de JavaScript',ids:[2,3,14,23]},
 {name:'3 · DOM y eventos',ids:[4,15,16,22]},
 {name:'4 · JSON y Storage',ids:[6,24]},
 {name:'5 · Fetch y asincronía',ids:[7,25]}
];
const projectGroups=[
 {name:'1 · Antes de programar',ids:[0,1,11,27,35]},
 {name:'2 · Estructura y navegación',ids:[28,29,8,30,34]},
 {name:'3 · Formularios y tienda',ids:[5,17,18,19,20,21]},
 {name:'4 · JSON Server',ids:[9,31]},
 {name:'5 · CRUD: copiar y adaptar',ids:[10,32,33,36,37,38,39,40]},
 {name:'6 · Revisar y corregir',ids:[26]}
];
let block='learn';
function chooseBlock(value){block=value;
    document.getElementById('search').value='';
    document.getElementById('tabLearn').setAttribute('aria-pressed',String(block==='learn'));
    document.getElementById('tabProject').setAttribute('aria-pressed',String(block==='project'));
    document.getElementById('blockDescription').textContent=block==='learn'?ui[language].learnDesc:ui[language].projectDesc;
    const first=(block==='learn'?learnGroups:projectGroups)[0].ids[0];
    show(first)}
function renderLinks(){
    const q=document.getElementById('search').value.toLowerCase().trim();links.innerHTML='';
const groups=block==='learn'?learnGroups:projectGroups;
groups.forEach(group=>{
    const matches=group.ids.filter(i=>{const t=topics[i];
    return !q||(`${t.title} ${t.tags} ${t.html.replace(/<[^>]*>/g,' ')}`).toLowerCase().includes(q)});
    if(!matches.length)return;
    const heading=document.createElement('div');
    heading.className='group-title';
    heading.textContent=language==='es'?group.name:group.name.replace(/^(\d+ · ).*/,(_,n)=>n+groupNames[language][(block==='learn'?learnGroups:projectGroups).indexOf(group)+(block==='learn'?0:5)]);
    links.appendChild(heading);
    matches.forEach(i=>{const b=document.createElement('button');
        b.textContent=trTitle(topics[i].title);
        b.type='button';
        if(i===current)b.setAttribute('aria-current','page');
        b.addEventListener('click',()=>show(i));
        links.appendChild(b)})});
    if(!links.children.length){const p=document.createElement('p');
        p.textContent=ui[language].missing;links.appendChild(p)}}
document.getElementById('tabLearn').addEventListener('click',()=>chooseBlock('learn'));
document.getElementById('tabProject').addEventListener('click',()=>chooseBlock('project'));
function move(delta){
    const order=(block==='learn'?learnGroups:projectGroups).flatMap(g=>g.ids);
const at=order.indexOf(current);show(order[Math.max(0,Math.min(order.length-1,at+delta))])}
document.getElementById('search').addEventListener('input',renderLinks);
document.getElementById('prev').addEventListener('click',()=>move(-1));
document.getElementById('next').addEventListener('click',()=>move(1));
document.getElementById('larger').addEventListener('click',()=>{document.body.classList.toggle('large');
    document.getElementById('larger').textContent=document.body.classList.contains('large')?ui[language].normal:ui[language].large});
    document.getElementById('print').addEventListener('click',()=>{const original=current;
        const all=topics.map(t=>`<section style="break-after:page">${t.html}</section>`).join('');
        const win=window.open('','_blank');if(!win){alert('Permite las ventanas emergentes para imprimir.');
            return}win.document.write(`<html><head><meta charset="utf-8"><title>Guía JavaScript</title><style>body{font:15px/1.5 Arial;padding:25px}pre{white-space:pre-wrap;background:#eee;padding:12px}section{break-after:page}
.block-tabs{display:grid;gap:8px;margin:12px 0}.block-tabs button{padding:11px 8px;border:1px solid #b8cbe2;border-radius:8px;background:white;font:inherit;cursor:pointer;text-align:left}.block-tabs button[aria-pressed="true"]{background:#dceaff;border:2px solid #2056a5;font-weight:700}.group-title{font-weight:700;color:#1d497f;border-top:1px solid #dce3ed;padding:14px 5px 5px;margin-top:8px}.block-intro{font-size:.95rem;color:#536178}nav .links button{font-size:.95rem}#search{min-width:0}
 .langbar{display:flex;gap:9px;flex-wrap:wrap;margin-top:14px}.langbar button{border:1px solid #b7d5ff;border-radius:8px;padding:9px 16px;background:#fff;color:#173c78;font:inherit;cursor:pointer}.langbar button[aria-pressed="true"]{background:#bcd8ff;border:2px solid #fff;font-weight:800}.translated-note{border-left:4px solid #2056a5;padding:12px 16px;background:#f1f6ff;margin-bottom:20px}.source-details{margin-top:20px} </style></head><body>${all}</body></html>`);
 win.document.close();
 win.focus();
 win.print()});
 chooseBlock('learn');
 applyLanguage();