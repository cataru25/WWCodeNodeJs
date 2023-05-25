Quote:
"Programamos no para nosotros ni para un cliente, tampoco para una empresa. Lo hacemos para el siguiente programador"

Generalidades:

Arquitectura es diferente a patrones de diseño
Para mayor detalles, visitar este enlace... https://refactoring.guru/es/design-patterns/factory-method

PATRONES DE DISEÑO:

<!-- Patrones de diseño de creación o creacionales -->

**Factory Method:** es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

En mis palabras y de acuerdo con lo escuchado en clase, no hay constructor y las instancias se obienen a través de las clases, no del constructor. El retorno es el mismo que en builder, pero la instancia se crea de manera diferente.

Se tiene una clase y con ella se instancian los objetos.

Ejemplo: Mongoose (cuando usamos el .create())

**Abstract Factory:** es un patrón de diseño creacional que nos permite producir familias de objetos relacionados sin especificar sus clases concretas.

**Singleton:** es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

Nativamente es el usado por NodeJs. Si no existe la instancia, creala. Si existe, usala. Siempre tendrá una validación para verificar si existe la instancia, esto es una forma de reconocer el patrón cuando se implementa.
Este patrón de diseño se utiliza en las importaciones de NodeJs y básicamente lo que pasa es que cada vez que uso el "require" apunta a la referencia donde se guardó la instancia y no la vuelve a crear porque solo existe una.

**Builder:** es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.

Permite crear pieza por pieza la instancia. Se diferencia del factory en que este devuelve completamente lo que pasa por la superclase. Usa el constructor para crear las instancias. Se reconoce por el uso de la palabra reservada "new"

**Prototype:** es un patrón de diseño creacional que nos permite copiar objetos existentes sin que el código dependa de sus clases.

<!-- Patrones de Estructura -->

Basícamente lo que hacen es "encapsular". En nodeJs no se recomiendan porque el paradigma no es propiamente orientado a objetos.

Ejemplo: mixin de SASS. Se reconocen porque los antecede una arroba @ que sería un decorador.

**Adapter:** Las instancias son privadas y accedemos a sus adaptaciones. Adaptaciones que finalmente funcionan todos bajo el mismo principio.
En este proyecto, este patrón de diseño lo podemos encontrar con el uso de sequalize, mongo, postgreSQL.
Ejemplo: Moongose. Se conecta internamente con Mongo. Adaptando una clase a otras clases
Es un patrón de diseño muy flexible. Condición: El objeto o instancia es privada. Solamente accedemos a los atributos.
El adapter, adapta las propiedades del objeto a los requerimientos.
Es el patrón de diseño estructural más común. Es el equivalente al singleton en patrones creacionales.
En ocaciones se crea una clase adaptadora,

**Bridge:** es un patrón de diseño estructural que te permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra.

**Composite:** es un patrón de diseño estructural que te permite componer objetos en estructuras de árbol y trabajar con esas estructuras como si fueran objetos individuales.

**Decorator:** es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.

**Facade:** es un patrón de diseño estructural que proporciona una interfaz simplificada a una biblioteca, un framework o cualquier otro grupo complejo de clases.

**Flyweight:** es un patrón de diseño estructural que te permite mantener más objetos dentro de la cantidad disponible de RAM compartiendo las partes comunes del estado entre varios objetos en lugar de mantener toda la información en cada objeto.

**Proxy:** es un patrón de diseño estructural que te permite proporcionar un sustituto o marcador de posición para otro objeto. Un proxy controla el acceso al objeto original, permitiéndote hacer algo antes o después de que la solicitud llegue al objeto original.

<!-- Comportamiento -->

Se usan para gestionar algoritmos, relaciones y responsabilidades entre objetos.

**Chain of responsability:** es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.

Se puede aplicar a NodeJs. Típico de cuando se trabaja con peticiones.
Se basa en el paso a paso. Evento tras evento.
Se inicia una petición, pasa por una serie de middleware que se encargan cada uno desde su responsabilidad de permitir que la petición vaya avanzando hasta llegar a su destino.

**Iterator:** es un patrón de diseño de comportamiento que te permite recorrer elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc.).

**State:** es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.
Patrón de diseño usado en React

**Observer:** Observador, Publicación-Suscripción, Modelo-patrón, Event-Subscriber, Listener
es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.

Patrón de diseño usado en Angular

State y Observer no se aplican a NodeJs
