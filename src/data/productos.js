// Datos simulados del catálogo mientras no exista un backend.
const imagenes = import.meta.glob('../assets/productos/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const imagen = (ruta) => {
  const url = imagenes[`../assets/productos/${ruta}`]

  if (!url) {
    throw new Error(`No se encontró la imagen: ${ruta}`)
  }

  return url
}

const fotosRemotas = {
  arroz: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
  pan: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  huevos: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80',
  atun: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
  cafe: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
}

const producto = (
  id,
  nombre,
  categoria,
  subcategoria,
  precio,
  unidad,
  descripcion,
  rutaImagen,
  stock,
  destacado = false,
) => ({
  id,
  nombre,
  categoria,
  subcategoria,
  precio,
  unidad,
  descripcion,
  imagen: rutaImagen.startsWith('http') ? rutaImagen : imagen(rutaImagen),
  stock,
  destacado,
})

export const productos = [
  producto(1, 'Arroz Costeño', 'Despensa', 'Abarrotes', 4.9, '1 kg', 'Arroz extra largo de grano seleccionado, ideal para el día a día.', fotosRemotas.arroz, 12, true),
  producto(2, 'Leche Gloria', 'Lácteos', 'Leches', 4.2, '400 g', 'Leche entera fortificada con vitaminas A y D, presentación de 400 g.', 'lacteos/lechegloria_caja.jpg', 18, true),
  producto(3, 'Pan de molde', 'Panadería', 'Panes', 8.5, '500 g', 'Pan de molde suave y esponjoso, perfecto para sándwiches y tostadas.', fotosRemotas.pan, 8, true),
  producto(4, 'Huevos de corral', 'Lácteos', 'Huevos', 10.9, '12 unidades', 'Huevos frescos de corral, ideales para el desayuno y la repostería.', fotosRemotas.huevos, 10, true),
  producto(5, 'Atún en conserva', 'Despensa', 'Abarrotes', 6.9, '170 g', 'Atún en conserva en aceite vegetal, listo para ensaladas y sándwiches.', fotosRemotas.atun, 7, true),
  producto(6, 'Café tostado', 'Despensa', 'Abarrotes', 13.9, '200 g', 'Café tostado y molido de aroma intenso, ideal para preparar en casa.', fotosRemotas.cafe, 6, true),
  producto(7, 'Leche condensada', 'Lácteos', 'Leches', 7.5, '397 g', 'Leche condensada azucarada, perfecta para postres y bebidas.', 'lacteos/leche_condensada.jpg', 14),
  producto(8, 'Leche Danlac', 'Lácteos', 'Leches', 4.0, '400 g', 'Leche entera en caja de 400 g, con calcio y vitaminas.', 'lacteos/leche_danlac.jpg', 16),
  producto(9, 'Leche Gloria Niños', 'Lácteos', 'Leches', 4.8, '400 g', 'Leche especialmente formulada para niños, con vitaminas y minerales.', 'lacteos/leche_gloria_niños.jpg', 12),
  producto(10, 'Leche Laive bolsa', 'Lácteos', 'Leches', 6.2, '900 ml', 'Leche entera Laive en bolsa de 900 ml, práctica y rendidora.', 'lacteos/leche_laive_bolsa.jpg', 15),
  producto(11, 'Leche light lata', 'Lácteos', 'Leches', 5.5, '400 g', 'Leche evaporada light, ideal para preparaciones bajas en grasa.', 'lacteos/leche_lata_light.jpg', 9),
  producto(12, 'Leche Laive tarro', 'Lácteos', 'Leches', 5.8, '400 g', 'Leche evaporada entera Laive en tarro de 400 g.', 'lacteos/leche_tarro_laive.jpg', 11),
  producto(13, 'Queso andino', 'Lácteos', 'Quesos', 9.9, '250 g', 'Queso andino fresco de sabor suave, ideal para desayunos y sándwiches.', 'lacteos/queso_andino.jpg', 8),
  producto(14, 'Queso Edam', 'Lácteos', 'Quesos', 12.9, '250 g', 'Queso Edam semimaduro, delicioso para picar o gratinar.', 'lacteos/queso_edam.jpg', 7),
  producto(15, 'Queso Gouda', 'Lácteos', 'Quesos', 13.9, '250 g', 'Queso Gouda cremoso y ligeramente dulce, perfecto para tablas.', 'lacteos/quesogouda.jpg', 6),
  producto(16, 'Queso mozzarella', 'Lácteos', 'Quesos', 11.9, '250 g', 'Queso mozzarella ideal para pizzas, lasañas y gratinados.', 'lacteos/queso_mozzarella.jpg', 8),
  producto(17, 'Yogurt de fresa', 'Lácteos', 'Yogures', 8.5, '1 kg', 'Yogurt de fresa cremoso, ideal para el desayuno o la merienda.', 'lacteos/yogurt_fresa.jpg', 10),
  producto(18, 'Yogurt frutado Tigo', 'Lácteos', 'Yogures', 7.9, '1 L', 'Yogurt frutado Tigo, una opción práctica para toda la familia.', 'lacteos/yogurt_frutado_tigo.jpg', 13),
  producto(19, 'Yogurt griego', 'Lácteos', 'Yogures', 12.9, '1 kg', 'Yogurt griego natural, cremoso y con alto contenido de proteína.', 'lacteos/yogurt_griego.jpg', 7),
  producto(20, 'Yogurt kefir', 'Lácteos', 'Yogures', 10.9, '1 L', 'Yogurt kefir de sabor suave, ideal para acompañar tus comidas.', 'lacteos/yogurt_kefir.jpg', 6),
  producto(21, 'Coca-Cola botella personal', 'Bebidas', 'Gaseosas', 3.5, '500 ml', 'Gaseosa Coca-Cola sabor original en botella personal de 500 ml.', 'bebidas/cocacola_botellapersonal.jpg', 24),
  producto(22, 'Coca-Cola lata', 'Bebidas', 'Gaseosas', 3.0, '350 ml', 'Gaseosa Coca-Cola sabor original en lata de 350 ml.', 'bebidas/cocacola_lata.jpg', 30, true),
  producto(23, 'Coca-Cola sin azúcar', 'Bebidas', 'Gaseosas', 3.5, '500 ml', 'Coca-Cola sin azúcar, sabor original en botella personal.', 'bebidas/cocacola_sinazucar.jpg', 18),
  producto(24, 'Inca Kola Duo 3 L', 'Bebidas', 'Gaseosas', 12.9, '3 L', 'Inca Kola sabor original, formato duo de 3 litros.', 'bebidas/cocainka_duo3L.jpg', 10),
  producto(25, 'Inca Kola 3 L', 'Bebidas', 'Gaseosas', 10.9, '3 L', 'Gaseosa Inca Kola sabor original en botella de 3 litros.', 'bebidas/inkacola_3L.jpg', 12),
  producto(26, 'Inca Kola personal', 'Bebidas', 'Gaseosas', 3.5, '500 ml', 'Inca Kola sabor original en presentación personal de 500 ml.', 'bebidas/inkacola_personal.jpg', 26, true),
  producto(27, 'Guaraná 2 L', 'Bebidas', 'Gaseosas', 7.5, '2 L', 'Gaseosa Guaraná sabor original en botella de 2 litros.', 'bebidas/guarana_2L.jpg', 14),
  producto(28, 'Guaraná 3 L', 'Bebidas', 'Gaseosas', 9.9, '3 L', 'Gaseosa Guaraná sabor original en botella de 3 litros.', 'bebidas/guarana_3L.jpg', 11),
  producto(29, 'Guaraná personal', 'Bebidas', 'Gaseosas', 3.2, '500 ml', 'Guaraná sabor original en presentación personal de 500 ml.', 'bebidas/guarana_perosnal.jpg', 20),
  producto(30, 'Oro 3 L', 'Bebidas', 'Gaseosas', 8.9, '3 L', 'Gaseosa Oro sabor original en botella de 3 litros.', 'bebidas/oro_3L.jpg', 12),
  producto(31, 'Oro lata', 'Bebidas', 'Gaseosas', 2.8, '350 ml', 'Gaseosa Oro sabor original en lata de 350 ml.', 'bebidas/oro_lata.jpg', 24),
  producto(32, 'Oro personal', 'Bebidas', 'Gaseosas', 3.0, '500 ml', 'Gaseosa Oro sabor original en botella personal de 500 ml.', 'bebidas/oro_personal.jpg', 22),
  producto(33, 'Sprite', 'Bebidas', 'Gaseosas', 3.2, '500 ml', 'Gaseosa Sprite sabor limón en presentación personal.', 'bebidas/sprite.jpg', 18),
  producto(34, 'KR fresa', 'Bebidas', 'Gaseosas', 2.5, '500 ml', 'Gaseosa KR sabor fresa en botella personal de 500 ml.', 'bebidas/kR_fresa.jpg', 20),
  producto(35, 'KR negra', 'Bebidas', 'Gaseosas', 2.5, '500 ml', 'Gaseosa KR sabor original en botella personal de 500 ml.', 'bebidas/kR_negra.jpg', 20),
  producto(36, 'KR piña', 'Bebidas', 'Gaseosas', 2.5, '500 ml', 'Gaseosa KR sabor piña en botella personal de 500 ml.', 'bebidas/kR_piña.jpg', 20),
  producto(37, 'Agua Cielo', 'Bebidas', 'Aguas', 1.5, '625 ml', 'Agua mineral Cielo sin gas, botella de 625 ml.', 'bebidas/agua_cielo.jpg', 30, true),
  producto(38, 'Agua San Luis', 'Bebidas', 'Aguas', 1.8, '625 ml', 'Agua mineral San Luis sin gas, botella de 625 ml.', 'bebidas/agua_sanluis.jpg', 28),
  producto(39, 'Agua San Mateo', 'Bebidas', 'Aguas', 2.0, '600 ml', 'Agua mineral San Mateo sin gas, botella de 600 ml.', 'bebidas/agua_sanmateo.jpg', 24),
  producto(40, 'Baileys', 'Bebidas', 'Bebidas alcohólicas', 49.9, '750 ml', 'Licor cremoso Baileys, ideal para disfrutar solo o con hielo.', 'bebidas/baileys_alcoholicas.jpg', 5),
  producto(41, "Mike's", 'Bebidas', 'Bebidas alcohólicas', 8.9, '355 ml', "Bebida alcohólica Mike's sabor limón, lista para servir.", 'bebidas/mikes_alcoholicas.jpg', 12),
  producto(42, 'Smirnoff manzana', 'Bebidas', 'Bebidas alcohólicas', 39.9, '700 ml', 'Vodka Smirnoff sabor manzana, ideal para cócteles.', 'bebidas/smirnoff_manzana_alcocholica.jpg', 6),
  producto(43, 'Whisky Black', 'Bebidas', 'Bebidas alcohólicas', 69.9, '750 ml', 'Whisky Black etiqueta negra, de sabor intenso y ahumado.', 'bebidas/whisky_black.jpg', 4),
  producto(44, 'Fideos canuto', 'Pastas', 'Fideos', 3.2, '500 g', 'Fideos canuto de sémola, ideales para sopas y guisos.', 'pastas/fideos_canuto.jpg', 16),
  producto(45, 'Fideos corbata', 'Pastas', 'Fideos', 3.2, '500 g', 'Fideos corbata de sémola, perfectos para sopas y entradas.', 'pastas/fideos_corbata.jpg', 14),
  producto(46, 'Fideos tallarín', 'Pastas', 'Fideos', 3.2, '500 g', 'Fideos tallarín de sémola, clásicos para saltados y guisos.', 'pastas/fideos_tallarin.jpg', 18, true),
  producto(47, 'Fideos tornillo', 'Pastas', 'Fideos', 3.2, '500 g', 'Fideos tornillo de sémola, ideales para ensaladas y pastas.', 'pastas/fideos_tornillo.jpg', 15),
  producto(48, 'Tallarín Molitalia', 'Pastas', 'Fideos', 3.9, '450 g', 'Tallarín Molitalia de 450 g, práctico para preparar en casa.', 'pastas/tallarin_molitadia_450g.jpg', 12),
  producto(49, 'Papas Lays clásicas', 'Snacks', 'Papas', 7.5, '150 g', 'Papas fritas Lays clásicas, snack crujiente para compartir.', 'snacks/lays_papas.jpg', 18, true),
  producto(50, 'Papas Duo', 'Snacks', 'Papas', 7.9, '150 g', 'Papas fritas Duo sabor original, snack crujiente en presentación individual.', 'snacks/papas_duo.jpg', 15),
  producto(51, 'Galletas Coronita', 'Snacks', 'Galletas', 2.5, '6 unidades', 'Galletas Coronita de vainilla, irresistibles para la hora del té.', 'snacks/coronita_galleta.jpg', 22),
  producto(52, 'Chocman', 'Snacks', 'Galletas', 2.0, '1 unidad', 'Chocman, delicioso snack de chocolate para el antojo.', 'snacks/chocman.jpg', 24),
  producto(53, 'Tortees clásicos', 'Snacks', 'Galletas', 2.8, '6 unidades', 'Galletas Tortees sabor clásico, crujientes y prácticas.', 'snacks/tortees_clasicos.jpg', 20),
  producto(54, 'Tortees picante', 'Snacks', 'Galletas', 2.8, '6 unidades', 'Galletas Tortees con toque picante, ideal para los que buscan sabor.', 'snacks/tortees_picante.jpg', 18),
  producto(55, 'Galletas Cancún', 'Snacks', 'Galletas', 2.5, '6 unidades', 'Galletas Cancún de textura suave, perfectas para acompañar el café.', 'snacks/cancun.jpg', 18),
  producto(56, 'Chifles', 'Snacks', 'Chifles y extruidos', 3.0, '100 g', 'Chifles crocantes de plátano, snack peruano para cualquier momento.', 'snacks/chifles.jpg', 20),
  producto(57, 'Camotes fritos', 'Snacks', 'Chifles y extruidos', 3.2, '100 g', 'Camotes fritos crocantes, una opción dulce y natural para picar.', 'snacks/camotes.jpg', 16),
  producto(58, 'Chizitos', 'Snacks', 'Chifles y extruidos', 2.5, '100 g', 'Chizitos de maíz con sabor a queso, snack crujiente y divertido.', 'snacks/chizitos.jpg', 22),
  producto(59, 'Cheese Tris queso', 'Snacks', 'Chifles y extruidos', 2.8, '100 g', 'Extruido de maíz Cheese Tris sabor queso, snack para compartir.', 'snacks/cheese_tris_queso.jpg', 20),
  producto(60, 'Cheese Tris picante', 'Snacks', 'Chifles y extruidos', 2.8, '100 g', 'Cheese Tris sabor picante, ideal para los amantes del sabor intenso.', 'snacks/cheese_tris_picante.jpg', 18),
  producto(61, 'Takis original', 'Snacks', 'Chifles y extruidos', 4.5, '90 g', 'Takis original, snack intenso y crujiente con sabor a chile.', 'snacks/takis.jpg', 14),
  producto(62, 'Takis Blue', 'Snacks', 'Chifles y extruidos', 4.5, '90 g', 'Takis Blue, snack crujiente con un toque de sabor azul.', 'snacks/takis_blue.jpg', 12),
  producto(63, 'Takis Explosión', 'Snacks', 'Chifles y extruidos', 4.5, '90 g', 'Takis Explosión, combinación intensa de sabores y picante.', 'snacks/takis_explosion.jpg', 12),
  producto(64, 'Takis Fuego', 'Snacks', 'Chifles y extruidos', 4.5, '90 g', 'Takis Fuego, snack picante para los que buscan emociones fuertes.', 'snacks/takis_fuego.jpg', 12),
  producto(65, 'Apio', 'Verduras y frutas', 'Verduras', 2.5, '1 unidad', 'Apio fresco, ideal para sopas, jugos y ensaladas.', 'verduras-frutas/apio.jpg', 14),
  producto(66, 'Brócoli', 'Verduras y frutas', 'Verduras', 3.5, '1 unidad', 'Brócoli fresco y crujiente, perfecto para salteados y guisos.', 'verduras-frutas/brocoli.jpg', 12),
  producto(67, 'Cebolla', 'Verduras y frutas', 'Verduras', 3.9, '1 kg', 'Cebolla fresca de primera calidad, básica para la cocina diaria.', 'verduras-frutas/cebolla.jpg', 18),
  producto(68, 'Cebolla picada', 'Verduras y frutas', 'Verduras', 2.5, '250 g', 'Cebolla fresca picada, lista para preparar tus comidas.', 'verduras-frutas/cebola_picada.jpg', 10),
  producto(69, 'Ensalada fresca', 'Verduras y frutas', 'Verduras', 4.5, '250 g', 'Mezcla de verduras frescas lista para acompañar tus platos.', 'verduras-frutas/ensalada.jpg', 8),
  producto(70, 'Tomate', 'Verduras y frutas', 'Verduras', 4.9, '1 kg', 'Tomate fresco y jugoso, ideal para ensaladas y salsas.', 'verduras-frutas/tomates.jpg', 16, true),
  producto(71, 'Zanahoria y alberja picada', 'Verduras y frutas', 'Verduras', 3.5, '250 g', 'Mezcla de zanahoria y alberja picada, práctica para tus recetas.', 'verduras-frutas/zanahoria_alberja_picada.jpg', 9),
  producto(72, 'Zapallo', 'Verduras y frutas', 'Verduras', 4.5, '1 kg', 'Zapallo fresco, ideal para sopas, guisos y purés.', 'verduras-frutas/zapallo.jpg', 10),
  producto(73, 'Arándanos', 'Verduras y frutas', 'Frutas', 7.9, '125 g', 'Arándanos frescos, pequeños, dulces y llenos de antioxidantes.', 'verduras-frutas/arandanos.jpg', 8),
  producto(74, 'Chirimoya', 'Verduras y frutas', 'Frutas', 8.9, '1 kg', 'Chirimoya fresca, dulce y cremosa, ideal para disfrutar al natural.', 'verduras-frutas/chirimoya_fruta.jpg', 6),
  producto(75, 'Fresa', 'Verduras y frutas', 'Frutas', 7.5, '500 g', 'Fresas frescas y dulces, perfectas para postres, batidos y ensaladas.', 'verduras-frutas/fresa_fruta.jpg', 9, true),
  producto(76, 'Kiwi', 'Verduras y frutas', 'Frutas', 9.9, '1 kg', 'Kiwi fresco, dulce y ácido, ideal para desayunos y postres.', 'verduras-frutas/kiwi_fruta.jpg', 6),
  producto(77, 'Mandarina', 'Verduras y frutas', 'Frutas', 4.5, '1 kg', 'Mandarinas frescas y jugosas, fáciles de pelar y ricas en vitamina C.', 'verduras-frutas/mandarina_fruta.jpg', 12),
  producto(78, 'Naranja', 'Verduras y frutas', 'Frutas', 3.9, '1 kg', 'Naranjas frescas y jugosas, ideales para jugos y postres.', 'verduras-frutas/naranja_fruta.jpg', 14),
  producto(79, 'Detergente Bolívar', 'Limpieza', 'Detergentes', 8.9, '780 g', 'Detergente Bolívar en polvo, potente contra las manchas.', 'limpieza/detergente_bolivar.jpg', 12, true),
  producto(80, 'Detergente limón', 'Limpieza', 'Detergentes', 8.9, '780 g', 'Detergente en polvo con aroma a limón, ideal para la ropa diaria.', 'limpieza/detergente_limon.jpg', 10),
  producto(81, 'Detergente líquido', 'Limpieza', 'Detergentes', 9.9, '800 ml', 'Detergente líquido de 800 ml, rinde y cuida los colores.', 'limpieza/detergente_liquido_800ml.jpg', 9),
  producto(82, 'Detergente Patito', 'Limpieza', 'Detergentes', 8.5, '780 g', 'Detergente Patito en polvo, de limpieza profunda y aroma fresco.', 'limpieza/detergente_patito.jpg', 11),
  producto(83, 'Jabón Bolívar', 'Limpieza', 'Jabones', 3.5, '250 g', 'Jabón de ropa Bolívar, ideal para dejar tu ropa limpia y fresca.', 'limpieza/jabon_bolivar.jpg', 18),
  producto(84, 'Jabón Bolívar Baby', 'Limpieza', 'Jabones', 3.8, '250 g', 'Jabón Bolívar Baby, suave con la ropa de los más pequeños.', 'limpieza/jabon_bolivar_baby.jpg', 14),
  producto(85, 'Jabón Caricia', 'Limpieza', 'Jabones', 3.2, '250 g', 'Jabón de tocador Caricia, en presentación de 250 g.', 'limpieza/jabon_caricia.jpg', 16),
  producto(86, 'Lejía Clorox', 'Limpieza', 'Lejías', 4.5, '636 ml', 'Lejía Clorox 636 ml, desinfectante para la limpieza del hogar.', 'limpieza/lejia_clorox_636ml.jpg', 15),
  producto(87, 'Lejía Sapolio', 'Limpieza', 'Lejías', 16.9, '4.8 kg', 'Lejía Sapolio de 4.8 kg, ideal para grandes superficies.', 'limpieza/lejia_sapolio_4.8kg.jpg', 7),
  producto(88, 'Paños de limpieza', 'Limpieza', 'Limpiadores', 2.5, '1 unidad', 'Paños multiusos para la limpieza diaria de la cocina y el hogar.', 'limpieza/paños_limpieza.jpg', 20),
  producto(89, 'Poett', 'Limpieza', 'Limpiadores', 6.9, '450 ml', 'Limpiador Poett 450 ml, deja una agradable fragancia.', 'limpieza/poet_bb.jpg', 13),
  producto(90, 'Poett galón', 'Limpieza', 'Limpiadores', 19.9, '3.8 L', 'Limpiador Poett galón de 3.8 L, rendidor y práctico.', 'limpieza/poet_galon.jpg', 6),
  producto(91, 'Cepillo dental Colgate', 'Cuidado personal', 'Higiene dental', 5.9, '1 unidad', 'Cepillo dental Colgate de cerdas suaves para una limpieza profunda.', 'cuidadopersonal/cepillo_dental_colgate.jpg', 18),
  producto(92, 'Enjuague bucal Colgate', 'Cuidado personal', 'Higiene dental', 9.9, '500 ml', 'Enjuague bucal Colgate para una sensación de frescura prolongada.', 'cuidadopersonal/enjuage_bucal_colgate.jpg', 12),
  producto(93, 'Hilo dental Oral-B', 'Cuidado personal', 'Higiene dental', 8.5, '1 unidad', 'Hilo dental Oral-B, ideal para una limpieza completa.', 'cuidadopersonal/hilo_dental_oral-b.jpg', 14),
  producto(94, 'Jabón Dove', 'Cuidado personal', 'Jabones', 4.5, '90 g', 'Jabón Dove de tocador, hidratante y suave con la piel.', 'cuidadopersonal/dove_barrajabon.jpg', 20, true),
  producto(95, "Jabón Johnson's", 'Cuidado personal', 'Jabones', 4.2, '100 g', "Jabón Johnson's suave, ideal para el cuidado diario de la piel.", 'cuidadopersonal/jabon_johnsons.jpg', 16),
  producto(96, 'Jabón Protex', 'Cuidado personal', 'Jabones', 3.8, '110 g', 'Jabón Protex con protección antibacteriana.', 'cuidadopersonal/jabon_protex.jpg', 18),
  producto(97, 'Jabón Palmolive', 'Cuidado personal', 'Jabones', 3.5, '90 g', 'Jabón Palmolive de aroma fresco, para el cuidado diario.', 'cuidadopersonal/palmolive_jabonbarra.jpg', 17),
  producto(98, 'CeraVe crema', 'Cuidado personal', 'Cremas', 49.9, '340 g', 'Crema CeraVe con ceramidas, ideal para hidratar la piel.', 'cuidadopersonal/ceraV_crema.jpg', 5),
  producto(99, "Crema corporal Johnson's", 'Cuidado personal', 'Cremas', 18.9, '400 ml', "Crema corporal Johnson's de 400 ml, para una piel suave.", 'cuidadopersonal/cremacorporal_johnsons.jpg', 9),
  producto(100, 'Isdin crema', 'Cuidado personal', 'Cremas', 59.9, '100 ml', 'Crema Isdin de textura ligera, perfecta para el cuidado diario.', 'cuidadopersonal/isdin_crema.jpg', 4),
  producto(101, "Pond's crema", 'Cuidado personal', 'Cremas', 12.9, '100 g', "Crema Pond's de 100 g, para una piel suave e hidratada.", 'cuidadopersonal/ponds_100g.jpg', 8),
  producto(102, 'Jabón facial CeraVe', 'Cuidado personal', 'Cuidado facial', 44.9, '236 ml', 'Jabón facial CeraVe, limpia y cuida la piel sensible.', 'cuidadopersonal/jabonfacial_cerave.jpg', 6),
  producto(103, "Limpiador facial Pond's", 'Cuidado personal', 'Cuidado facial', 19.9, '200 ml', "Limpiador facial Pond's, ideal para remover impurezas.", 'cuidadopersonal/limpiadorfacial_ponds.jpg', 7),
]

const ordenCategorias = [
  'Despensa',
  'Lácteos',
  'Panadería',
  'Bebidas',
  'Pastas',
  'Snacks',
  'Verduras y frutas',
  'Limpieza',
  'Cuidado personal',
]

export const categorias = ordenCategorias.filter((categoria) =>
  productos.some((producto) => producto.categoria === categoria),
)

export const subcategoriasPorCategoria = Object.fromEntries(
  categorias.map((categoria) => [
    categoria,
    [...new Set(
      productos
        .filter((producto) => producto.categoria === categoria)
        .map((producto) => producto.subcategoria),
    )],
  ]),
)
