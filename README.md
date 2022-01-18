# React PoC Valtech

***Consigna Principal:*** Desarrollar una PDP (Product Detail Page), donde el usuario 
pueda ver el detalle de un producto.

### Funcionalidades:
+ Obtener información del producto (por medio de una API provista debajo)
+ Header:
    + Abrir/cerrar carrito
        + Eliminar producto
        + Ver cantidad productos + total
        + El boton checkout no es funciona
    + Nav:
        + Foto de usuario
    + Logo
    + Carrito: 
        + Agregar al carrito/Sumar cantidad del producto
        + Eliminar Producto
+ Carousel de producto (Animacion/Transicion requerida a gusta del dev)
    + Lightbox (Cuando el usuario hace click en la imagen, tiene que disparar un lightbox con el carousel)
+ Info de producto:
    + Marca
    + Titulo
    + Descripción
    + Precio original
    + Descuento
    + Precio con descuento aplicado
    + Box de cantidad (Incrementar o disminuir cantidad)
    + Botón “Add to cart” (Estos cambios se tienen que ver reflejados cuando el usuario abre el carrito en el header)
        + El botón tiene que estar deshabilitado si la cantidad es 0.
        + Cuando el usuario agrega un producto, reflejar la cantidad en el icono tal cual diseño.

### API: https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f

### Requerimientos:
- Esto tiene que ser creado con ***CRA*** (Create React App)
- No utilizar libs como material design, bootstrap, etc.
- No es requerido (pero permitido) utilizar alguna librería para el manejo de  estado como Redux. 
- La parte mobile que está en los diseños es ***requerida***. La app tiene que ser  totalmente ***responsive***.

# Live Version https://02-react-poc.vercel.app/
