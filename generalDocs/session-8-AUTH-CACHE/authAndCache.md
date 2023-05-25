**Definiciones**

**Autenticación:** Identificar el usuario. Qué si sea ese usuario. Evita que cualquiera pueda entrar sin que sea el usuario correcto.

**Autorización:** Sobre que recursos ese usuario está identificado. Funcionalidades protegidas y a través de los roles se otorga autorización para que los usuarios autenticados puedan hacer uso de ellos.

**Token:** Sustitución de un elemento de datos sensible por uno equivalente que pueda ser usado con mayor seguridad.

**Sesión:** Intercambio de información entre dos sistemas.
Dos tipos de sesiones:
Con estado: Statefull. Ejemplo: Un carrito de compras. Cuando paso entre páginas y mantengo la información en el carrito.

Sin estado:
Consta de peticiones y respuestas. No más.
Es confidencial. Nada aparte del servidor puede ver la información de usuario o sesión.
Es persistente. Nada aparte del servidor puede manipular la información de usuario o sesión.
Es auténtico. Nada aparte del servidor podría ser capaz de crear sesiones válidas.
