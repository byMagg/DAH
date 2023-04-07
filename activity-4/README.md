# Actividad 4 - TODOS

¿Cómo se consigue que un usuario acceda solo a los productos que él ha creado?
A la hora de obtener los productos podemos filtrar por la id del usuario ya que cada usuario tienen un documento con la lista de productos.

¿Cómo se consigue que las listas de productos se actualicen dinámicamente si se insertan nuevos registros?
Podríamos crear un snapshot para nuestro documento de productos con doc.onSnapshot(), entonces cada vez que se actualice este registro recibirá un evento.

¿Cómo se podrían crear nuevos usuarios desde nuestra aplicación Ionic sin tener que crearlos a través de la consola de Firebase?
Deberías crear una nueva función donde llamamos a la función createUserWithEmailAndPassword (con email y password) pasandole el email y password del nuevo usuario.

También se debe modificar la aplicación para cumplir con las siguientes características:

- [x] La página de inicio debe tener dos botones:

    - [x] Un botón para acceder a la página de inicio de sesión.

    - [x] Otro botón para acceder a un listado de productos que están a la venta. Dicho listado de productos estarán asociados a un usuario específico. En este listado se mostrará la imagen, el nombre y la descripción, pero no existirá una opción para ver detalles del artículo. Desde la página de este listado no se podrán añadir nuevos productos.

- [x] El mensaje de salida cuando el usuario no existe en Firebase o cuando la contraseña no es correcta debe estar personalizado.
    HAY QUE MIRAR EL ERROR QUE SALE EN CONSOLA

- [x] Se debe implementar la funcionalidad para ver los detalles de un artículo en la página products.

- [x] Se debe implementar la funcionalidad para eliminar un artículo.