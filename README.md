# API CRUD de Productos

## Endpoints
1. **Listar todos los productos**  
   **GET** `/producto`  
   - Devuelve un array con todos los documentos de la colección.  
   - **Respuesta (200)**  
     ```json
     [
       {
         "_id": "650f2a3b1c4d5e6f7a8b9c0d",
         "nombre": "Teclado mecánico",
         "precio": 12000,
         "stock": 5,
         "categoria": "Electrónicos",
         "descripcion": "Switches azules, retroiluminación RGB"
       },
       …
     ]
     ```

2. **Crear un producto**  
   **POST** `/producto`  
   - **Body (JSON)**  
     ```json
     {
       "nombre": "Monitor 24\"",
       "precio": 45000,
       "stock": 8,
       "categoria": "Electrónicos",
       "descripcion": "Full HD, 75Hz"
     }
     ```  
   - Crea un nuevo documento.  
   - **Respuesta (201)**: devuelve el producto creado con su `_id`.

3. **Obtener un producto por ID**  
   **GET** `/producto/:id`  
   - **Parámetro**: `:id` (identificador del producto).  
   - **Respuesta (200)**: retorna el objeto producto.  
   - **Error (404)**  
     ```json
     { "error": "No se encontró el producto" }
     ```

4. **Actualizar un producto**  
   **PUT** `/producto/:id`  
   - **Parámetro**: `:id`.  
   - **Body (JSON)**: campos a modificar.  
   - Devuelve el documento actualizado (`{ new: true }`).  
   - **Respuesta (200)**: el objeto modificado.

5. **Eliminar un producto**  
   **DELETE** `/producto/:id`  
   - **Parámetro**: `:id`.  
   - Elimina el documento correspondiente.  
   - **Respuesta (200)**  
     ```json
     { "msg": "Producto eliminado" }
     ```

## Estructura de archivos
productos/
#├── index.js
#├── package.json
#├── package-lock.json
#├── models/
#│ └── Producto.js
#└── routes/
#└── productoRoutes.js

## Nota adicional
La ruta **GET /producto** es completamente pública, de modo que cualquier usuario puede consultarla sin autenticación
