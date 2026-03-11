INSERT INTO usuarios (nombre, correo, telefono, password, tipo_usuario) VALUES
('Juan López', 'juan.lopez@email.com', '5551234567', 'password123', 'vendedor'),
('María García', 'maria.garcia@email.com', '5559876543', 'password456', 'comprador'),
('Pedro Hernández', 'pedro.hernandez@email.com', '5555555555', 'password789', 'vendedor'),
('Ana Martínez', 'ana.martinez@email.com', '5552223333', 'password101', 'comprador'),
('Carlos Ramírez', 'carlos.ramirez@email.com', '5554445555', 'password202', 'comprador');

INSERT INTO productos (vendedor_id, nombre, descripcion, precio, cantidad_disponible, imagen_url, marca, peso, tags, colores, talla, largo, ancho) VALUES
(1, 'Bolso artesanal de palma', 'Bolso tejido a mano con fibras naturales de palma, ideal para uso diario.', 350.00, 15, '../media/productos_carrito/Bolso_artesanal_de_palma.png', 'ManoAMano Artesanos', 400, 'artesanal,bolso,palma', 'beige,brown,natural', 'chico,mediano,grande', 30, 25),
(1, 'Taza de barro pintada a mano', 'Taza de barro cocido con diseños tradicionales mexicanos.', 180.00, 25, '../media/productos_carrito/Taza_de_barro_pintada_a_mano.png', 'Tradición Viva', 300, 'barro,taza,cocina', 'red,blue,white,purple', 'único', 10, 8),
(3, 'Collar artesanal de chaquira', 'Collar elaborado a mano con chaquiras de colores.', 220.00, 10, '../media/productos_carrito/Collar_artesanal_de_chaquira.png', 'Arte Ancestral', 80, 'joyería,collar,chaquira', 'multicolor,blue,green', 'ajustable', 45, 2),
(3, 'Alebrije de madera', 'Figura tallada y pintada a mano con colores vibrantes.', 550.00, 8, '../media/productos_carrito/Alebrije_de_madera.png', 'Alebrijes del Sur', 600, 'alebrije,decoración,madera', 'multicolor', 'mediano', 20, 15),
(1, 'Rebozo artesanal', 'Rebozo tejido en telar tradicional.', 480.00, 12, '../media/productos_carrito/RebozoArtesanal.png', 'Raíces Mexicanas', 350, 'ropa,rebozo,textil', 'red,black,blue', 'único', 180, 60);

INSERT INTO carrito (usuario_id, producto_id, cantidad) VALUES
(2, 1, 2),
(2, 3, 1),
(4, 2, 1),
(4, 4, 3),
(5, 5, 2);

INSERT INTO ordenes (usuario_id, total, estado) VALUES
(2, 920.00, 'pendiente'),
(4, 730.00, 'procesando'),
(5, 480.00, 'enviado'),
(2, 550.00, 'entregado'),
(4, 180.00, 'pendiente');

INSERT INTO orden_productos (orden_id, producto_id, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 2, 350.00, 700.00),
(1, 3, 1, 220.00, 220.00),
(2, 2, 1, 180.00, 180.00),
(2, 4, 1, 550.00, 550.00),
(3, 5, 1, 480.00, 480.00);