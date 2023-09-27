# La tiendita de los horrores

La tiendita de los horrores es un e-commerce donde puede comprarse accesorios, ropa y algo de electronica.

Lo que puede hacerse dentro de la tienda es:

- Buscar los productos desde el catalogo (solo muestra los primeros 12)
- Buscar por categoría de producto. En las categorías podemos ver el total de productos en cada una.
- Desde cada item se puede acceder al detalle
    - Dentro del detalle se puede seleccionar la cantidad (siempre mayor a 1 y menor o igual al stock del producto) y agregarlo al carro.
    - Luego de agregado al carro, se puede acceder al mismo con "Finalizar compra" o volver al catalogo o categorías desde el menú.
- Cuando se cargan los productos, se puede entrar al carro desde el icono arriba a la derecha (hasta este momento oculto).
- En el carro, se muestran los artículos seleccionados:
    - Su descripción
    - Cantidad
    - Precio unitario
    - Subtotal
- Cada producto tiene su botón para eliminarlo del carro.
- Al finalizar la compra desde el carro, se accede a una nueva pagina donde ingresaremos los datos para poder finalizar la compra.
- Luego de finalizada la compra, se muestra el Id de la orden creada y el carro se vacía para poder iniciar un nuevo proceso.
- Las ordenes guardan:
    - Los productos comprados: id, titulo, cantidad y precio unitario
    - Los datos del usuario, ingresados en el formulario
    - La fecha de compra
    - El monto total

La tienda trabaja usando la base de datos de firebase.
Contiene 2 colecciones: orders y products.

¡Espero que disfruten de su compra!