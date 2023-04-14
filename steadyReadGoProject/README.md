**Supuestos o puntos de partida para el abordaje del proyecto Steady, ready, go!**

1. El archivo productsDB.txt aloja la base de datos local de productos.
2. El archivo productsDB.txt existe y hace parte del árbol de archivos del proyecto.
3. El archivo productsDB.txt está vacío, es decir, no hay productos en principio.

**Requerimientos del proyecto Steady, ready, go!**

1. Al hacer GET al endpoint /api/v1/products/ debe devolver toda la lista de productos
   existentes.

   Endpoint: /api/v1/products/

   Entrada: No aplica

   Salida: Lista de productos

   Anotación: En principio, la lista de productos está vacía. Una vez se hacen los post, la base de datos comienza a poblarse.

   RESULTADO DEL REQUERIMIENTO: El método GET se desarrolla y funciona de acuerdo con lo solicitado.

2. Al hacer POST al endpoint /api/v1/products/ debe crear el producto y devolver el producto
   creado con su identificador único asignado.

   Endpoint: /api/v1/products/

   Entrada: Body con los atributos del producto a crear sin ID.
   Ejemplo de entrada:
   Body para el nuevo producto:
   {
   "name":"Zapatilla",
   "description":"Calzado cómodo para hacer ejercicio",
   "price":50,
   "availableQuantity":6,
   "category":"Prendas básicas"
   }

   Salida: Nuevo producto con identificador único asignado.
   Ejemplo de salida:
   {
   "name": "Zapatilla",
   "description": "Calzado cómodo para hacer ejercicio",
   "price": 50,
   "availableQuantity": 6,
   "category": "Prendas básicas",
   "id": "bab7a4fe-078e-46ec-b04d-846fcffd7f25"
   }

   RESULTADO DEL REQUERIMIENTO: El método POST se desarrolla y funciona de acuerdo con lo solicitado.

3. Al hacer PATCH al endpoint /api/v1/products/{id} debe modificar el producto y devolver el
   producto con todos los datos creados.

   Endpoint: /api/v1/products/:productId

   Entradas:
   Id en el path
   Body con el atributo del producto a modificar y el nuevo valor.
   Ejemplo de entrada:
   /api/v1/products/bab7a4fe-078e-46ec-b04d-846fcffd7f25
   Body para el atributo del producto a modificar:
   {
   "price": 25000
   }

   Salida: Producto con el atributo modificado.
   Ejemplo de salida:
   Antes del PATCH:
   Como quedó registrado en el POST del punto 2
   Después del PATCH:
   {
   "name": "Zapatilla",
   "description": "Calzado cómodo para hacer ejercicio",
   "price": 25000,
   "availableQuantity": 6,
   "category": "Prendas básicas",
   "id": "bab7a4fe-078e-46ec-b04d-846fcffd7f25"
   }

   RESULTADO DEL REQUERIMIENTO: El método PATCH se desarrolla y funciona de acuerdo con lo solicitado.

4. Al hacer DELETE al endpoint /api/v1/products/{id} debe eliminar el producto y devolver un
   mensaje diciendo: “producto {nombreDeProducto} fue eliminado” ejemplo: “producto sombrero fue
   eliminado”.

   Endpoint: /api/v1/products/:productId

   Entradas:
   Id en el path
   Ejemplo de entrada:
   /api/v1/products/bab7a4fe-078e-46ec-b04d-846fcffd7f25

   Salida: Mensaje con el nombre del producto eliminado.
   Ejemplo de salida:
   El producto denominado Zapatilla fue eliminado

5. Los productos deben de tener: un identificador único, nombre, descripción larga, precio,unidades disponibles y categoría

RESULTADO DEL REQUERIMIENTO: Cada producto cuenta con un identificador único, nombre, descripción larga, precio,unidades disponibles y categoría

Ejemplo de producto proveniente de la base de datos local:

{"name":"Reloj","description":"Pulso de cuero y mica con apliques de oro y crital de alta gama","price":900,"quantity":2,"category":"Accesorios","id":"96135ee9-7a1e-4671-955b-e537067025a3"}
