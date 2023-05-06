**Schema (MySQL v5.7)**

    CREATE TABLE productos (id SERIAL PRIMARY KEY, nombre VARCHAR(100) NOT NULL, descripcion TEXT, precio DECIMAL(10,2) NOT NULL, inventario INTEGER NOT NULL);

    INSERT INTO productos (nombre, descripcion, precio, inventario) VALUES ('Producto 1', 'Descripcion del producto 1', 10.99, 100), ('Producto 2', 'Descripcion del producto 2', 19.99, 50), ('Producto 3', 'Descripcion del producto 3', 5.99, 200);

---

**Listar todos los productos**

    SELECT * FROM productos;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |
| 3   | Producto 3 | Descripcion del producto 3 | 5.99   | 200        |

---

**Listar un solo producto por nombre**

    SELECT * FROM productos WHERE nombre = 'Producto 2';

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |

---

**Listar un solo producto por ID**

    SELECT * FROM productos WHERE id = 3;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 3   | Producto 3 | Descripcion del producto 3 | 5.99   | 200        |

---

**Actualizar un producto por precio**

    UPDATE productos
    SET precio = 8.00
    WHERE id = 2;

There are no results to be displayed.

---

**Listar el producto actualizado anteriormente**

    SELECT * FROM productos
    WHERE id = 2;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 2   | Producto 2 | Descripcion del producto 2 | 8.00   | 50         |

---

**Eliminar un producto**

    DELETE FROM productos
    WHERE id = 2;

There are no results to be displayed.

---

**Listar los productos y evidenciar que no está el producto que se eliminó anteriormente**

    SELECT * FROM productos;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 3   | Producto 3 | Descripcion del producto 3 | 5.99   | 200        |

---

6 mayo de 2023

**Schema (PostgreSQL v9.4)**
-- Inicialmente se debe verificar que tengamos la base de datos seteada para PostgreSQL, última versión --

    CREATE TABLE productos (id SERIAL PRIMARY KEY, nombre VARCHAR(100) NOT NULL, descripcion TEXT, precio DECIMAL(10,2) NOT NULL, inventario INTEGER NOT NULL);

        INSERT INTO productos (nombre, descripcion, precio, inventario) VALUES ('Producto 1', 'Descripcion del producto 1', 10.99, 100), ('Producto 2', 'Descripcion del producto 2', 19.99, 50), ('Producto 3', 'Descripcion del producto 3', 5.99, 200);

---

**Listar todos los productos**

    SELECT * FROM productos;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |
| 3   | Producto 3 | Descripcion del producto 3 | 5.99   | 200        |

---

**Ordenar por precio y mostrar el inventario asociado a cada precio**

    SELECT * FROM productos ORDER BY precio, inventario ASC;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 3   | Producto 3 | Descripcion del producto 3 | 5.99   | 200        |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |

---

**Ordenar por inventario y mostrar los precios para cada inventario**

    SELECT * FROM productos ORDER BY inventario, precio ASC;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 3   | Producto 3 | Descripcion del producto 3 | 5.99   | 200        |

---

**Limitando los productos a mostrar**

    SELECT * FROM productos LIMIT 2;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |

---

**Limitando los productos a mostrar indicando donde empezar (OFFSET) y donde terminar (LIMIT)**

    SELECT * FROM productos
    WHERE inventario > 0
    ORDER BY precio ASC
    OFFSET 1
    LIMIT 2
    ;

| id  | nombre     | descripcion                | precio | inventario |
| --- | ---------- | -------------------------- | ------ | ---------- |
| 1   | Producto 1 | Descripcion del producto 1 | 10.99  | 100        |
| 2   | Producto 2 | Descripcion del producto 2 | 19.99  | 50         |

---

[View on DB Fiddle](https://www.db-fiddle.com/)
