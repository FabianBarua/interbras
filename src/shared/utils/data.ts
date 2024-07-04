export interface Root {
  products: Category[]
}

export interface Category {
  id: string
  name: string
  children: Children[]
  description: string
  shortDescription?: string
}

export interface Children {
  id: string
  name: string
  popular: boolean
  info: Info
  variants: Variant[]
}

export interface Info {
  review: string
  included: string | null
  specs: string
}

export interface Variant {
  id: string
  name: string
  color: string
  photos: string[]
}

const airfryer: Category = {
  id: 'airfryer',
  name: 'airfryer.name',
  description: 'airfryer.description',
  shortDescription: 'airfryer.shortDescription',
  children: [
    {
      id: 's10',
      name: 'airfryer.children.s10.name',
      popular: true,
      info: {
        review: 'airfryer.children.s10.info.review',
        included: null,
        specs: 'airfryer.children.s10.info.specs'
      },
      variants: [
        {
          id: 's10-1',
          name: 'Airfryer S10 - 1',
          color: 'colors.black',
          photos: [
            '/product/airfryer/s10-v1-1.webp'
          ]
        },
        {
          id: 's10-2',
          name: 'Airfryer S10 - 2',
          color: 'colors.white',
          photos: [
            '/product/airfryer/s10-v2-1.webp'
          ]
        }
      ]
    },
    {
      id: 's20',
      name: 'airfryer.children.s20.name',
      popular: false,
      info: {
        review: 'airfryer.children.s20.info.review',
        included: null,
        specs: 'airfryer.children.s20.info.specs'
      },
      variants: [
        {
          id: 's20-1',
          name: 'Airfryer S20 - 1',
          color: 'colors.black',
          photos: [
            '/product/airfryer/s20-v1-1.webp'
          ]
        },
        {
          id: 's20-2',
          name: 'Airfryer S20 - 2',
          color: 'colors.white',
          photos: [
            '/product/airfryer/s20-v2-1.webp'
          ]
        }
      ]
    },
    {
      id: 's30',
      name: 'airfryer.children.s30.name',
      popular: false,
      info: {
        review: 'airfryer.children.s30.info.review',
        included: null,
        specs: 'airfryer.children.s30.info.specs'
      },
      variants: [
        {
          id: 's30-1',
          name: 'Airfryer S30 - 1',
          color: 'colors.inox',
          photos: [
            '/product/airfryer/s30-v1-1.webp'
          ]
        }
      ]
    },
    {
      id: 's40',
      name: 'airfryer.children.s40.name',
      popular: false,
      info: {
        review: 'airfryer.children.s40.info.review',
        included: null,
        specs: 'airfryer.children.s40.info.specs'
      },
      variants: [
        {
          id: 's40-1',
          name: 'Airfryer S40 - 1',
          color: 'colors.black',
          photos: [
            '/product/airfryer/s40-v1-1.webp'
          ]
        }
      ]
    }
  ]
}

const scooters: Category = {
  id: 'scooters',
  name: 'scooters.name',
  description: 'scooters.description',
  shortDescription: 'scooters.shortDescription',
  children: [
    {
      id: '8.5',
      name: 'scooters.children.85.name',
      popular: true,
      info: {
        review: 'scooters.children.85.info.review',
        included: null,
        specs: 'scooters.children.85.info.specs'
      },
      variants: [
        {
          id: '8.5-1',
          name: 'Scooter 8.5 - 1',
          color: 'colors.black',
          photos: [
            '/product/scooters/8.5-v1-1.webp'
          ]
        }
      ]
    },
    {
      id: '10.5pro',
      name: 'scooters.children.10pro.name',
      popular: false,
      info: {
        review: 'scooters.children.10pro.info.review',
        included: null,
        specs: 'scooters.children.10pro.info.specs'
      },
      variants: [
        {
          id: '10.5pro-1',
          name: 'Scooter 10.5 Pro - 1',
          color: 'colors.black',
          photos: [
            '/product/scooters/10.5pro-v1-1.webp'
          ]
        }
      ]
    },
    {
      id: 'cross',
      name: 'scotters.children.cross.name',
      popular: false,
      info: {
        review: 'scooters.children.cross.info.review',
        included: null,
        specs: 'scooters.children.cross.info.specs'
      },
      variants: [
        {
          id: 'cross-1',
          name: 'Scooter Cross - 1',
          color: 'colors.black',
          photos: [
            '/product/scooters/cross-v1-1.webp'
          ]
        }
      ]
    },
    {
      id: 'crosspro',
      name: 'scooters.children.crosspro.name',
      popular: false,
      info: {
        review: 'scooters.children.crosspro.info.review',
        included: null,
        specs: 'scooters.children.crosspro.info.specs'
      },
      variants: [
        {
          id: 'crosspro-1',
          name: 'Scooter Cross Pro - 1',
          color: 'colors.black',
          photos: [
            '/product/scooters/crosspro-v1-1.webp'
          ]
        }
      ]
    }
  ]
}

const aires: Category = {
  id: 'aires',
  name: 'aires.name',
  description: 'aires.description',
  shortDescription: 'aires.shortDescription',
  children: [
    {
      id: 'itb-12000iv',
      name: 'aires.children.1.name',
      popular: false,
      info: {
        review: 'aires.children.1.info.review',
        included: null,
        specs: 'aires.children.1.info.specs'
      },
      variants: [
        {
          id: 'itb-12000iv-1',
          name: 'ITB 12000IV - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.webp'
          ]
        }
      ]
    },
    {
      id: 'itp-12000iv',
      name: 'aires.children.2.name',
      popular: false,
      info: {
        review: 'aires.children.2.info.review',
        included: null,
        specs: 'aires.children.2.info.specs'
      },
      variants: [
        {
          id: 'itp-12000iv-1',
          name: 'ITP 12000IV - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.webp'
          ]
        }
      ]
    },
    {
      id: 'itb-12000of',
      name: 'aires.children.3.name',
      popular: false,
      info: {
        review: 'aires.children.3.info.review',
        included: null,
        specs: 'aires.children.3.info.specs'
      },
      variants: [
        {
          id: 'itp-12000iv-1',
          name: 'ITB 12000OF - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.webp'
          ]
        }
      ]
    },
    {
      id: 'itp-12000of',
      name: 'aires.children.4.name',
      popular: false,
      info: {
        review: 'aires.children.4.info.review',
        included: null,
        specs: 'aires.children.4.info.specs'
      },
      variants: [
        {
          id: 'itp-12000iv-1',
          name: 'ITP 12000OF - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.webp'
          ]
        }
      ]
    },
    {
      id: 'itb-18000iv',
      name: 'aires.children.5.name',
      popular: false,
      info: {
        review: 'aires.children.5.info.review',
        included: null,
        specs: 'aires.children.5.info.specs'
      },
      variants: [
        {
          id: 'itb-18000iv-1',
          name: 'ITP 12000OF - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.webp'
          ]
        }
      ]
    },
    {
      id: 'itp-24000iv',
      name: 'aires.children.6.name',
      popular: false,
      info: {
        review: 'aires.children.6.info.review',
        included: null,
        specs: 'aires.children.6.info.specs'
      },
      variants: [
        {
          id: 'itp-24000iv-1',
          name: 'ITP 24000IV - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.webp'
          ]
        }
      ]
    }
  ]
}

const tvs: Category = {
  id: 'tvs',
  name: 'Televisores',
  description: 'La mejor calidad de imagen y sonido.',
  shortDescription: 'Eficientes y elegantes.',
  children: [
    {
      id: 'IN3200TV',
      name: 'Tv IN3200TV',
      popular: false,
      info: {
        review: 'La Smart TV de 32 pulgadas modelo IN3200TV QLED HD de Interbras es la elección perfecta para quienes buscan una experiencia de entretenimiento completa en un tamaño compacto.\nCon su pantalla QLED HD, ofrece colores vibrantes y detalles nítidos, transformando cualquier espacio en un centro de entretenimiento.',
        included: null,
        specs: 'Tamaño de pantalla: 32 pulgadas\nResolución: QLED HD\nFunciones adicionales:\nAcceso a una vasta biblioteca de películas y series con\nXplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube, \nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco), \nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN3200TV-1',
          name: 'IN3200TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN3200TV-1.webp',
            '/product/tvs/IN3200TV-2.webp',
            '/product/tvs/IN3200TV-3.webp'
          ]
        }
      ]
    },
    {
      id: 'IN4300TV',
      name: 'Tv IN4300TV',
      popular: false,
      info: {
        review: 'La Smart TV de 43 pulgadas modelo IN4300TV QLED FHD de Interbras te ofrece una experiencia visual superior con su pantalla QLED Full HD.\nDisfruta de colores intensos y detalles precisos, convirtiendo tu hogaren un cine personal.\nCon acceso a plataformas de streaming como Netflix y YouTube, tienes entretenimientoilimitado al alcance de tu mano. Su diseño estilizado y sin marco complementacualquier espacio, brindando un toque de modernidad y elegancia.',
        included: null,
        specs: 'Tamaño de pantalla: 43 pulgadas\nResolución: QLED FHD\nFunciones adicionales:\nAcceso a una vasta biblioteca de películas y series \ncon Xplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube,\nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco), \nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN4300TV-1',
          name: 'IN4300TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN4300TV-1.webp',
            '/product/tvs/IN4300TV-2.webp',
            '/product/tvs/IN4300TV-3.webp',
            '/product/tvs/IN4300TV-4.webp'
          ]
        }
      ]
    },
    {
      id: 'IN5000TV',
      name: 'Tv IN5000TV',
      popular: false,
      info: {
        review: 'La Smart TV de 50 pulgadas modelo IN5000TV QLED de Interbras es ideal para aquellos que desean una pantalla grande con una calidad de imagen excepcional. Con tecnología QLED, disfrutarás de colores vivos y contrastes profundos.\nAccede fácilmente a tus contenidos favoritos en plataformas como Netflix y HBO Max, y transforma tu sala en un centro de entretenimiento.\nSu diseño elegante y sin marco se integra perfectamente en cualquier entorno, ofreciendo una experiencia visual amplia e inmersiva.',
        included: null,
        specs: 'Tamaño de pantalla: 50 pulgadas\nResolución: QLED\nFunciones adicionales:\nAcceso a una vasta biblioteca de películas y series \ncon Xplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube,\nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco),\nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN5000TV-1',
          name: 'IN5000TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN5000TV-1.webp',
            '/product/tvs/IN5000TV-2.webp',
            '/product/tvs/IN5000TV-3.webp',
            '/product/tvs/IN5000TV-4.webp'
          ]
        }
      ]
    },
    {
      id: 'IN5500TV',
      name: 'Tv IN5500TV',
      popular: false,
      info: {
        review: 'La Smart TV de 55 pulgadas modelo IN5500TV QLED de Interbras lleva el entretenimiento en casa a un nuevo nivel.\nCon su pantalla QLED, ofrece una calidad de imagen impresionante con colores vibrantes y detalles nítidos.\nDisfruta de acceso ilimitado a una variedad de servicios de  streaming, incluyendo Netflix y YouTube, para nunca quedarte sin opciones de entretenimiento. \nSu diseño sin marco añade un toque sofisticado a cualquier espacio, creando una experiencia visual más inmersiva y moderna.',
        included: null,
        specs: 'Tamaño de pantalla: 55 pulgadas\nResolución: QLED\nFunciones adicionales: Acceso a una vasta biblioteca\nde películas y series con Xplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube,\nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco), \nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN5500TV-1',
          name: 'IN5500TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN5500TV-1.webp',
            '/product/tvs/IN5500TV-2.webp',
            '/product/tvs/IN5500TV-3.webp',
            '/product/tvs/IN5500TV-4.webp'
          ]
        }
      ]
    },
    {
      id: 'IN6500TV',
      name: 'Tv IN6500TV',
      popular: false,
      info: {
        review: 'La Smart TV de 65 pulgadas modelo IN6500TV SQLED de Interbras es ideal para quienes buscan una experiencia visual envolvente en una pantalla grande. Gracias a su tecnología SQLED, disfrutarás de colores intensos y una claridad impresionante.\nEsta TV te permite acceder fácilmente a tus plataformas destreaming favoritas como Netflix y HBO Max, transformando tu sala en un centro de entretenimiento.\nCon su diseño sin marco, no solo aporta modernidad, sino que también se integra armoniosamente en cualquier espacio.',
        included: null,
        specs: 'Tamaño de pantalla: 65 pulgadas\nResolución: SQLED\nFunciones adicionales: Acceso a una vasta biblioteca \nde películas y series con Xplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube, \nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco), \nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN6500TV-1',
          name: 'IN6500TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN6500TV-1.webp',
            '/product/tvs/IN6500TV-2.webp',
            '/product/tvs/IN6500TV-3.webp',
            '/product/tvs/IN6500TV-4.webp'
          ]
        }
      ]
    },
    {
      id: 'IN7500TV',
      name: 'Tv IN7500TV',
      popular: false,
      info: {
        review: 'La Smart TV de 85 pulgadas modelo IN8500TV SQLED de Interbras lleva el entretenimiento en casa a otro nivel con su gran tamaño y calidad de imagen superior. La tecnología SQLED garantiza colores vibrantes y detalles nítidos, ideales para una experiencia cinematográfica. \nCon acceso a plataformas de streaming como Netflix y Prime Video, tendrás todo el contenido que amas al alcance de un botón. \nSu diseño elegante y sin marco  aporta un toque de sofisticación a cualquier sala.',
        included: null,
        specs: 'Tamaño de pantalla: 85 pulgadas\nResolución: SQLED\nFunciones adicionales: Acceso a una vasta biblioteca\nde películas y series con Xplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube,\nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco),\nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN7500TV-1',
          name: 'IN7500TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN7500TV-1.webp',
            '/product/tvs/IN7500TV-2.webp',
            '/product/tvs/IN7500TV-3.webp',
            '/product/tvs/IN7500TV-4.webp'
          ]
        }
      ]
    },
    {
      id: 'IN8500TV',
      name: 'Tv IN8500TV',
      popular: false,
      info: {
        review: 'La Smart TV de 85 pulgadas modelo IN8500TV SQLED de Interbras lleva el entretenimiento en casa a otro nivel con su gran tamaño y calidad de imagen superior. La tecnología SQLED garantiza colores vibrantes y detalles nítidos, ideales para una experiencia cinematográfica. \nCon acceso a plataformas de streaming como Netflix y Prime Video, tendrás todo el contenido que amas al alcance de un botón. \nSu diseño elegante y sin marco  aporta un toque de sofisticación a cualquier sala.',
        included: null,
        specs: 'Tamaño de pantalla: 85 pulgadas\nResolución: SQLED\nFunciones adicionales: Acceso a una vasta biblioteca\nde películas y series con Xplus Prime y Cinema Prime\nConectividad: HDMI, USB, WiFi, Bluetooth\nServicios de streaming compatibles: Netflix, YouTube,\nHBO Max, Prime Video, Spotify, YouTube Kids\nSistema operativo: Android\nTecnología de imagen: Frameless (sin marco),\nTrue Colors, Smart\nSintonizador: ISDB-T'
      },
      variants: [
        {
          id: 'IN8500TV-1',
          name: 'IN8500TV - 1',
          color: 'Negro',
          photos: [
            '/product/tvs/IN8500TV-1.webp',
            '/product/tvs/IN8500TV-2.webp',
            '/product/tvs/IN8500TV-3.webp',
            '/product/tvs/IN8500TV-4.webp'
          ]
        }
      ]
    }]
}

const mixteras: Category = {
  id: 'mixteras',
  name: 'Mixteras',
  description: 'Sándwiches perfectos, sin esfuerzo.',
  shortDescription: 'Sándwiches, sin esfuerzo.',
  children: [
    {
      id: 'G10',
      name: 'Mixtera G10',
      popular: false,
      info: {
        review: 'La Mixtera G10 de Interbras es ideal para transformar ingredientes simples en bocadillos increíbles.\nPerfecta para preparar sándwiches deliciosos de forma rápida y práctica, asegurando resultados crujientes y sabrosos en cada uso.',
        included: null,
        specs: 'Potencia: 750W\nIndicadores: de Encendido y Listo\nTamaño: Compacta y Fácil de Almacenar\nDiseño: Acabado Elegante'
      },
      variants: [
        {
          id: 'G10',
          name: 'G10',
          color: 'Negro',
          photos: [
            '/product/mixteras/G10-1.webp'
          ]
        }
      ]
    },
    {
      id: 'G20',
      name: 'Mixtera G20',
      popular: false,
      info: {
        review: 'La Mixtera G20 de Interbras está diseñada para aquellos que buscan conveniencia en la preparación de sándwiches.\nOfrece un calentamiento rápido y uniforme para resultados dorados y crujientes, con una operación fácil y almacenamiento compacto.',
        included: null,
        specs: 'Potencia: 750W\nIndicadores: Encendido y Listo\nTamaño: Compacta y Fácil de Almacenar\nDiseño: Acabado Elegante'
      },
      variants: [
        {
          id: 'G20',
          name: 'G20',
          color: 'Negro',
          photos: [
            '/product/mixteras/G20-1.webp'
          ]
        }
      ]
    }, {
      id: 'G30',
      name: 'Mixtera G30',
      popular: false,
      info: {
        review: 'La Mixtera G30 de Interbras es perfecta para preparar sándwiches crujientes y calientes rápidamente.\nSu diseño compacto y elegante facilita su uso y almacenamiento, proporcionando resultados deliciosos con facilidad.',
        included: null,
        specs: 'Potencia: 1400W\nIndicadores: Encendido y Listo\nTamaño: Compacta y Fácil de Almacenar\nDiseño: Acabado Elegante'
      },
      variants: [
        {
          id: 'G30',
          name: 'G30',
          color: 'Negro',
          photos: [
            '/product/mixteras/G30-1.webp'
          ]
        }
      ]
    }, {
      id: 'G40',
      name: 'Mixtera G40',
      popular: false,
      info: {
        review: 'La Mixtera 3 en 1 G40 de Interbras es la elección perfecta para quienes buscan versatilidad en la cocina. \nIncluye 3 placas intercambiables para preparar diferentes tipos de alimentos: grill, sándwich y waffle.\nIdeal para variar tus recetas y obtener siempre resultados deliciosos.',
        included: null,
        specs: 'Potencia: 800W\nIndicadores: Encendido y Listo\nTamaño: Compacta y Fácil de Guardar\nFuncionalidad: 3 en 1: grill, sándwich y waffle'
      },
      variants: [
        {
          id: 'G40',
          name: 'G40',
          color: 'Negro',
          photos: [
            '/product/mixteras/G40-1.webp'
          ]
        }
      ]
    }, {
      id: 'G50',
      name: 'Mixtera G50',
      popular: false,
      info: {
        review: 'La Mixtera 4 en 1, G50 de Interbras ofrece una versatilidad inigualable en la preparación de bocadillos.\nCon 4 placas intercambiables, permite preparar diferentes tipos de alimentos: \ngrill, sándwich, nutty y waffle, garantizando siempre un resultado perfecto y sabroso.',
        included: null,
        specs: 'Potencia: 800W\nIndicadores: Encendido y Listo\nTamaño: Compacta y Fácil de Guardar\nFuncionalidad: 4 en 1: grill, sándwich, nutty y waffle'
      },
      variants: [
        {
          id: 'G50',
          name: 'G50',
          color: 'Negro',
          photos: [
            '/product/mixteras/G50-1.webp'
          ]
        }
      ]
    }
  ]
}

const cocinas: Category = {
  id: 'cocinas',
  name: 'Cocinas',
  description: 'Innovación compacta para tu cocina en tu mesa.',
  shortDescription: 'Innovación compacta.',
  children: [
    {
      id: 'C10',
      name: 'Cocina electrica C10',
      popular: false,
      info: {
        review: 'La cocina eléctrica C10 de Interbras es la solución ideal para quienes buscan una forma eficiente y práctica de calentar alimentos. \nCon una placa de operación y múltiples opciones de calentamiento, esta cocina es perfecta para el uso diario en cualquier hogar.',
        included: null,
        specs: 'Potencia: 1000W\nCaracterísticas destacadas: \nProtección contra sobrecalentamiento\nOperación sencilla \nFácil limpieza.'
      },
      variants: [
        {
          id: 'C10',
          name: 'C10',
          color: 'Blanco',
          photos: [
            '/product/cocinas/C10-1.webp'
          ]
        }
      ]
    },
    {
      id: 'C20',
      name: 'Cocina electrica C20',
      popular: false,
      info: {
        review: 'La cocina eléctrica C20 de Interbras proporciona una excelente opción para cocinar con rapidez y eficiencia. \nCon su diseño compacto y elegante, es perfecta para cualquier espacio de cocina, brindando múltiples opciones de calentamiento.',
        included: null,
        specs: 'Potencia: 1000W\nCaracterísticas destacadas: \nProtección contra sobrecalentamiento\nOperación sencilla \nFácil limpieza'
      },
      variants: [
        {
          id: 'C20',
          name: 'C20',
          color: 'Negro',
          photos: [
            '/product/cocinas/C20-1.webp'
          ]
        }
      ]
    },
    {
      id: 'C30',
      name: 'Cocina electrica C30',
      popular: false,
      info: {
        review: 'La cocina eléctrica C30 de Interbras es perfecta para quienes necesitan más capacidad de cocción. \nCon dos placas de operación y luz indicadora, ofrece una versatilidad superior para preparar una amplia variedad de alimentos de manera rápida y eficiente.',
        included: null,
        specs: 'Potencia: 1000W por placa\nCaracterísticas destacadas: \nProtección contra sobrecalentamiento\nOperación sencilla\nFácil limpieza'
      },
      variants: [
        {
          id: 'C30',
          name: 'C30',
          color: 'Negro',
          photos: [
            '/product/cocinas/C30-1.webp'
          ]
        }
      ]
    }
  ]
}

const hervidoras: Category = {
  id: 'hervidoras',
  name: 'Hervidoras',
  description: 'Ideales para cualquier cocina moderna.',
  shortDescription: 'Seguras y fáciles de usar.',
  children: [
    {
      id: 'T10',
      name: 'Hervidora T10',
      popular: false,
      info: {
        review: 'La Hervidora Eléctrica Clásica de Interbras con una capacidad de 1.8 litros y 1500W de potencia es ideal para cualquier cocina moderna.\nSu diseño ergonómico y funcional permite un manejo fácil y seguro.\nCalienta el agua rápidamente, perfecta para preparar té, café y otras bebidas calientes.',
        included: null,
        specs: 'Capacidad: 1.8L\nPotencia: 1500W\nRápido\nPráctico\nVersátil'
      },
      variants: [
        {
          id: 'T10',
          name: 'T10',
          color: 'Inox',
          photos: [
            '/product/hervidoras/T10-1.webp'
          ]
        }
      ]
    }, {
      id: 'T20',
      name: 'Hervidora T20',
      popular: false,
      info: {
        review: 'La Hervidora Eléctrica T20 de Interbras ofrece una solución rápida y eficiente para calentar agua. \nCon una capacidad de 1.8 litros y una potencia de 1500W, esta hervidora se destaca por su durabilidad y diseño elegante.\nMantiene el calor por más tiempo, lo que la hace perfecta para cualquier hogar o oficina.',
        included: null,
        specs: 'Capacidad: 1.8L\nPotencia: 1500W\nRápido\nPráctico\nVersátil\nMantiene el calor'
      },
      variants: [
        {
          id: 'T20',
          name: 'T20',
          color: 'Blanco',
          photos: [
            '/product/hervidoras/T20-1.webp'
          ]
        }
      ]
    }, {
      id: 'T30',
      name: 'Hervidora T30',
      popular: false,
      info: {
        review: 'La Hervidora Eléctrica T30 de Interbras ofrece una solución rápida y eficiente para calentar agua. \nCon una capacidad de 1.8 litros y una potencia de 1500W, esta hervidora se destaca por su durabilidad y diseño elegante.\nMantiene el calor por más tiempo, lo que la hace perfecta para cualquier hogar o oficina.',
        included: null,
        specs: 'Capacidad: 1.8L\nPotencia: 1500W\nRápido\nPráctico\nVersátil\nMantiene el calor'
      },
      variants: [
        {
          id: 'T30',
          name: 'T30',
          color: ' Negro',
          photos: [
            '/product/hervidoras/T30-1.webp'
          ]
        }
      ]
    }
  ]
}

const cafeteras: Category = {
  id: 'cafeteras',
  name: 'Cafeteras',
  description: 'Disfruta de una taza de café perfecta cada mañana.',
  shortDescription: 'Calidad en cada taza.',
  children: [
    {
      id: 'E10',
      name: 'Cafetera E10',
      popular: false,
      info: {
        review: 'La cafetera E10 de Interbras es la elección perfecta para los amantes del café que buscan versatilidad y calidad en cada taza.\nCon su capacidad para utilizar tanto cápsulas como café molido, esta cafetera se adapta a tus preferencias y te permite disfrutar de una amplia variedad de bebidas.',
        included: null,
        specs: 'Café en cápsulas\nCafé en polvo\nPotencia: 1500W\nTanque de agua: 1.24 litros\nSelección de tamaño de taza: 80 ml a 420 ml\nSistema de calefacción instantánea\nApagado automático en 2 minutos\nIndicador de limpieza\nAccesorios removibles\nPrograma de limpieza automatizado\nProtección contra sobrecalentamiento'
      },
      variants: [
        {
          id: 'E10',
          name: 'E10',
          color: 'Inox',
          photos: [
            '/product/cafeteras/E10-1.webp'
          ]
        }
      ]
    }
  ]
}

const planchas: Category = {
  id: 'planchas',
  name: 'Planchas',
  description: 'Planchado perfecto en cada prenda.',
  shortDescription: 'Planchado perfecto.',
  children: [
    {
      id: 'F10',
      name: 'Plancha F10',
      popular: false,
      info: {
        review: 'La Plancha a Vapor Eléctrica F10 de Interbras está diseñada para facilitar tu día a día. \nCon un depósito de agua de 270 ml, esta plancha ofrece un rendimiento confiable y efectivo para todas tus necesidades de planchado.\nSu base de cerámica asegura un deslizamiento suave y uniforme, mientras que su  capacidad de vapor vertical permite eliminar arrugas de prendas colgadas.',
        included: null,
        specs: 'Potencia: 1200W\nDepósito de agua: 270 ml\nBase: Cerámica\nFunciones: Rociador de agua, vapor vertical'
      },
      variants: [
        {
          id: 'F10',
          name: 'F10',
          color: 'Rojo - Negro',
          photos: [
            '/product/planchas/F10-1.webp'
          ]
        }
      ]
    }, {
      id: 'F20',
      name: 'Plancha F20',
      popular: false,
      info: {
        review: 'La Plancha a Vapor Eléctrica F20 de Interbras es ideal para quienes buscan eficiencia y comodidad en el planchado. \nCon una capacidad de depósito de 270 ml y una base de cerámica, esta plancha proporciona resultados excepcionales.\nSu función de vapor vertical es perfecta para eliminar arrugas en prendas colgadas, ofreciendo versatilidad en su uso.',
        included: null,
        specs: 'Potencia: 1200W\nDepósito de agua: 270 ml\nBase: Cerámica\nFunciones: Rociador de agua, vapor vertical'
      },
      variants: [
        {
          id: 'F20',
          name: 'F20',
          color: 'Rojo - Negro',
          photos: [
            '/product/planchas/F20-1.webp'
          ]
        }
      ]
    }, {
      id: 'F30',
      name: 'Plancha F30',
      popular: false,
      info: {
        review: 'La Plancha a Vapor Eléctrica F30 de Interbras ofrece un rendimiento excepcional con la fuerza del vapor. \nCon control de vapor variable, permite ajustar la cantidad de vapor según tus necesidades./nSu depósito de agua de 270 ml y su base de cerámica garantizan un deslizamiento suave y resultados de alta calidad en cada pasada.',
        included: null,
        specs: 'Potencia: 1200W\nDepósito de agua: 270 ml\nBase: Cerámica\nFunciones: Control de vapor variable, rociador de agua,\nvapor vertical'
      },
      variants: [
        {
          id: 'F30',
          name: 'F30',
          color: 'Azul - Blanco',
          photos: [
            '/product/planchas/F30-1.webp'
          ]
        }
      ]
    }, {
      id: 'F40',
      name: 'Plancha F40',
      popular: false,
      info: {
        review: 'La Plancha a Vapor Eléctrica F40 de Interbras está equipada con una base de cerámica de alta calidad que proporciona un deslizamiento suave y eficiente. \nSu diseño ergonómico y su capacidad de vapor vertical permiten un uso cómodo y versátil. \nCon una potencia de 2200W, esta plancha ofrece un rendimiento superior para todas tus necesidades de planchado.',
        included: null,
        specs: 'Potencia: 2200W\nDepósito de agua: 330 ml\nBase: Cerámica con punta de precisión doble\nFunciones: Rociador de agua, vapor vertical, \ngolpe de vapor'
      },
      variants: [
        {
          id: 'F40',
          name: 'F40',
          color: 'Gris - Bronce',
          photos: [
            '/product/planchas/F40-1.webp'
          ]
        }
      ]
    }, {
      id: 'F50',
      name: 'Plancha F50',
      popular: false,
      info: {
        review: 'La Plancha a Vapor Eléctrica F50 de Interbras es perfecta para quienes buscan un rendimiento excepcional en el planchado. \nCon un depósito de agua de 270 ml y una base de cerámica, esta plancha asegura un deslizamiento suave y resultados impecables. \nSu capacidad de vapor continuo y funciones avanzadas la hacen ideal para eliminar arrugas de manera eficiente.',
        included: null,
        specs: 'Potencia: 2200W\nDepósito de agua: 270 ml\nBase: Cerámica\nFunciones: Rociador de agua, vapor vertical,\nvapor continuo'
      },
      variants: [
        {
          id: 'F50',
          name: 'F50',
          color: 'Negro',
          photos: [
            '/product/planchas/F50-1.webp'
          ]
        }
      ]
    }
  ]
}

const licuadoras: Category = {
  id: 'licuadoras',
  name: 'Licuadoras',
  description: 'Licuadoras rápidas, potentes y multifuncionales para todas tus recetas.',
  shortDescription: 'Potentes y rapidas.',
  children: [
    {
      id: 'L10',
      name: 'Licuadora L10',
      popular: false,
      info: {
        review: 'La Licuadora L10 de Interbras es ideal para preparar jugos frescos todos los días. \nCon una potencia de 1000W y cuatro cuchillas de acero inoxidable, garantiza una mezcla eficiente y rápida.\nSu vaso de plástico de 1.5L es perfecto para preparar grandes cantidades de batidos y otras bebidas.\nAdemás, cuenta con cuatro velocidades y modo pulso, permitiendo un control preciso de la textura deseada.',
        included: 'Vaso medidor removible\nIncluye 1 vaso',
        specs: 'Potencia: 1000W\nCuchillas: 4 de acero inoxidable\nCapacidad del vaso: 1.5L (plástico)\nVelocidades: 4 + modo pulso'
      },
      variants: [
        {
          id: 'L10',
          name: 'L10',
          color: 'Blanco',
          photos: [
            '/product/licuadoras/L10-1.webp'
          ]
        }
      ]
    },
    {
      id: 'L20',
      name: 'Licuadora L20',
      popular: false,
      info: {
        review: 'La Licuadora L20 de Interbras combina potencia y eficiencia en un diseño compacto. \nCon 350W de potencia y seis cuchillas de acero inoxidable, es ideal para preparar tus bebidas favoritas rápidamente.\nSu vaso de plástico de 1.5L es resistente y fácil de limpiar.\nDos velocidades y modo pulso para ajustar la mezcla a tus preferencias.',
        included: 'Vaso medidor removible\n1 Procesador',
        specs: 'Potencia: 350W\nCuchillas: 6 de acero inoxidable\nCapacidad del vaso: 1.5L (plástico)\nVelocidades: 2 + modo pulso'
      },
      variants: [
        {
          id: 'L20',
          name: 'L20',
          color: 'Blanco',
          photos: [
            '/product/licuadoras/L20-1.webp',
            '/product/licuadoras/L20-2.webp',
            '/product/licuadoras/L20-3.webp'
          ]
        }
      ]
    },
    {
      id: 'L30',
      name: 'Licuadora L30',
      popular: false,
      info: {
        review: 'La Licuadora L30 de Interbras está diseñada para ofrecer un rendimiento superior en la preparación de jugos y batidos.\nCon una potencia de 350W y seis cuchillas de acero inoxidable, esta licuadora es capaz de mezclar ingredientes con facilidad.\nSu vaso de plástico de 1.5L es duradero y apto para preparar grandes cantidades. Ofrece dos velocidades y modo pulso para un control preciso.',
        included: 'Vaso medidor removible\n1 Procesador',
        specs: 'Potencia: 350W\nCuchillas: 6 de acero inoxidable\nCapacidad del vaso: 1.5L (plástico)\nVelocidades: 2 + modo pulso'
      },
      variants: [
        {
          id: 'L30',
          name: 'L30',
          color: 'Blanco',
          photos: [
            '/product/licuadoras/L30-1.webp'
          ]
        }
      ]
    },
    {
      id: 'L40',
      name: 'Licuadora L40',
      popular: false,
      info: {
        review: 'La Licuadora 3 en 1, L40 de Interbras es la herramienta definitiva para tu cocina. \nCon 350W de potencia y seis cuchillas de acero inoxidable, esta licuadora ofrece un rendimiento excepcional. \nSu vaso de plástico de 1.5L es ideal para preparar jugos y batidos, mientras que sus accesorios adicionales permiten moler y triturar una variedad de alimentos.\nIncluye dos velocidades y modo pulso para una mezcla perfecta.',
        included: '3 envases de acero inoxidable\nMotor de licuadora\nFácil de usar y lavar',
        specs: 'Potencia: 350W\nCuchillas: 6 de acero inoxidable\nCapacidad del vaso: 1.5L (plástico)\nAccesorios: Vaso de molienda, vaso de carne\nVelocidades: 2 + modo pulso\nVaso medidor removible: Sí'
      },
      variants: [
        {
          id: 'L40',
          name: 'L40',
          color: 'Blanco',
          photos: [
            '/product/licuadoras/L40-1.webp',
            '/product/licuadoras/L40-2.webp',
            '/product/licuadoras/L40-3.webp'
          ]
        }
      ]
    }

  ]
}

const beauty: Category = {
  id: 'beauty',
  name: 'Beauty',
  description: 'Cuidado personal y belleza.',
  shortDescription: 'Cuidado personal.',
  children: [
    {
      id: '603D',
      name: 'Planchita 603D',
      popular: false,
      info: {
        review: 'La Plancha de Cabello de Interbras proporciona un alisado rápido y sin dañar el cabello. \nCon un diseño elegante y características avanzadas, esta plancha es perfecta para obtener resultados profesionales en casa.',
        included: null,
        specs: 'Potencia: 1500W\nFunción 2 en 1: Secador y cepillo\nVelocidades: 3 ajustes de velocidad/calor\nRotación: 360° para un manejo fácil\nDiseño Ergonómico: Para una cómoda manipulación\nCalentamiento Rápido: Listo para usar en minutos\nCerdas Suaves: Para un peinado sin tirones\nCable Giratorio: 360° para mayor comodidad'
      },
      variants: [
        {
          id: '603D',
          name: '603D',
          color: 'Negro',
          photos: [
            '/product/beauty/603D-1.webp'
          ]
        }
      ]
    },
    {
      id: 'HB40',
      name: 'Cepillo secador HB40',
      popular: false,
      info: {
        review: 'El Spin 1500 Dryer Brush de Interbras combina la potencia de un secador con la conveniencia de un cepillo, proporcionando  un peinado rápido y eficaz.\nIdeal para alisar, dar volumen y crear rizos suaves con un solo dispositivo.',
        included: null,
        specs: 'Potencia: 1500W\nFunción 2 en 1: Secador y cepillo\nVelocidades: 3 ajustes de velocidad/calor\nRotación: 360° para un manejo fácil\nDiseño Ergonómico: Para una cómoda manipulación\nCalentamiento Rápido: Listo para usar en minutos\nCerdas Suaves: Para un peinado sin tirones\nCable Giratorio: 360° para mayor comodidad'
      },
      variants: [
        {
          id: 'HB40',
          name: 'HB40',
          color: 'Negro',
          photos: [
            '/product/beauty/HB40-1.webp'
          ]
        }
      ]
    },
    {
      id: 'HD008',
      name: 'Secador de cabello HD008',
      popular: false,
      info: {
        review: 'El secador de pelo Hair Style PRO 2200 de Interbras es la herramienta definitiva para lograr resultados profesionales en el peinado.\nCon una potencia de 2200W, este secador proporciona un secado rápido y eficaz, mientras su  tecnología iónica ayuda a eliminar el frizz, dejando el cabello suave y brillante.',
        included: null,
        specs: 'Potencia: 2200W\nFunción Iónica: Ideal para eliminar el frizz y suavizar el cabello\nConfiguraciones: 3 ajustes de temperatura y 2 de velocidad\nFunción de Aire Frío: Para fijar el peinado\nAccesorios: Con concentrador y difusor'
      },
      variants: [
        {
          id: 'HD008',
          name: 'HD008',
          color: 'Negro',
          photos: [
            '/product/beauty/HD008-1.webp'
          ]
        }
      ]
    },
    {
      id: 'RFCD865',
      name: 'Recortadora de Barba RFCD865',
      popular: false,
      info: {
        review: 'Recortadora De Barba Recargable PRO VINTAGE de Interbras combina estilo y funcionalidad para ofrecer un corte de pelo profesional en la comodidad de tu hogar.\nCon una lámina profesional de titanio y un diseño sin cables, esta maquina proporciona precisión y comodidad en cada uso.',
        included: null,
        specs: 'Lámina: Profesional de Titanio\nTiempo de Uso: 120 minutos de uso continuo\nSin Cables: Recargable con USB-C\nIndicador: LED de batería\nPeines Guía: 5 peines (1, 2, 3, 4, 5 mm)'
      },
      variants: [
        {
          id: 'RFCD865',
          name: 'RFCD865',
          color: 'Dorado',
          photos: [
            '/product/beauty/RFCD865-1.webp'
          ]
        }
      ]
    }
  ]
}

const batidoras: Category = {
  id: 'batidoras',
  name: 'Batidoras',
  description: 'Batidoras potentes y versátiles para todas tus recetas.',
  shortDescription: 'Potentes y versátiles.',
  children: [
    {
      id: 'B10',
      name: 'Batidora B10',
      popular: false,
      info: {
        review: 'La Batidora de Mano B10 de Interbras es la solución perfecta para una mezcla eficiente y rápida.\nCon una velocidad de 19500 rpm y una potencia de 250W, esta batidora ofrece siete velocidades para adaptarse a tus necesidades.\nSu tazón de 2.0 litros es ideal para preparar diversas recetas.\nIncluye dos ganchos y dos batidores para diferentes tipos de mezclas.',
        included: null,
        specs: 'Potencia: 250W\nVelocidades: 7\nCapacidad del tazón: 2.0 litros\nAccesorios: 2 ganchos, 2 batidores\nVelocidad máxima: 19500 rpm'
      },
      variants: [
        {
          id: 'B10',
          name: 'B10',
          color: 'Negro y Blanco',
          photos: [
            '/product/batidoras/B10-1.webp'
          ]
        }
      ]
    },
    {
      id: 'B20',
      name: 'Batidora B20',
      popular: false,
      info: {
        review: 'La Batidora de Mano B20 de Interbras destaca por su alta velocidad de 15000 rpm y una potencia de 350W, ideal para realizar preparaciones rápidamente. \nCon tres velocidades y una capacidad de 2.3 litros, es perfecta para diversas recetas. \nIncluye dos ganchos y dos batidores para mayor versatilidad en la cocina. \nSu diseño fácil de limpiar y operación suave la hacen una opción práctica y eficiente.',
        included: null,
        specs: 'Potencia: 350W\nVelocidades: 3\nCapacidad del tazón: 2.3 litros\nAccesorios: 2 ganchos, 2 batidores\nVelocidad máxima: 15000 rpm'
      },
      variants: [
        {
          id: 'B20',
          name: 'B20',
          color: 'Negro y Gris',
          photos: [
            '/product/batidoras/B20-1.webp'
          ]
        }
      ]
    },
    {
      id: 'B30',
      name: 'Batidora B30',
      popular: false,
      info: {
        review: 'La Batidora Planetaria B30 de Interbras es perfecta para quienes buscan versatilidad y potencia en la cocina. \nCon una potencia de 250W y cinco velocidades de operación, esta batidora ofrece un rendimiento eficiente para mezclar, batir y amasar. \nSu tazón de 3.5 litros permite preparar grandes cantidades de mezcla de manera fácil y rápida.\nAdemás, su diseño ergonómico y operación suave garantizan una experiencia de uso cómoda.',
        included: null,
        specs: 'Potencia: 250W\nVelocidades: 5\nCapacidad del tazón: 3.5 litros\nProtección anti-salpicaduras: Sí\nOperación suave: Sí'
      },
      variants: [
        {
          id: 'B30',
          name: 'B30',
          color: 'Negro',
          photos: [
            '/product/batidoras/B30-1.webp'
          ]
        }
      ]
    }
  ]
}

const arroceras: Category = {
  id: 'arroceras',
  name: 'Arroceras',
  description: 'Diseñadas para hacer tu vida más fácil y sabrosa.',
  shortDescription: 'Cocinar mas facil.',
  children: [
    {
      id: 'A10',
      name: 'Arrocera A10',
      popular: false,
      info: {
        review: 'La Olla Multicooker Interbras A10 es la solución perfecta para una cocina rápida, versátil y de gran capacidad. \nCon una capacidad de 5 litros y una potencia de 900W, esta olla multifuncional te permite preparar una amplia variedad de comidas con facilidad.\nSus 11 opciones diferentes de cocción y la función de mantener caliente aseguran que tus platos siempre estén en su punto justo, mientras que su diseño moderno y pantalla LCD facilitan su uso diario.',
        included: 'Arrocera A10\nCucharón de plástico\nEspátula para arroz\nCesta de almacenamiento\nTaza medidora\nManual',
        specs: 'Capacidad: 5L\nPotencia: 900W\n11 opciones diferentes de cocción\nFunción de mantener caliente\nPantalla LCD'
      },
      variants: [
        {
          id: 'A10',
          name: 'A10',
          color: 'Inox',
          photos: [
            '/product/arroceras/A10-1.webp'
          ]
        }
      ]
    },
    {
      id: 'P10',
      name: 'Olla a presión Electrica P10',
      popular: false,
      info: {
        review: 'Descubre una nueva forma de cocinar con la Olla a Presión Eléctrica Interbras P10. \nCon una potencia máxima de 1000W y una capacidad de 6 litros, esta olla multifuncional te permite preparar tus comidas favoritas de manera rápida y eficiente. \nSu diseño moderno y sus múltiples funciones programables hacen que cocinar sea más fácil que nunca, permitiéndote disfrutar de platos deliciosos con el mínimo esfuerzo.',
        included: null,
        specs: 'Potencia: 1000W máxima\nCapacidad: 6 litros\nMultifuncional\nDispositivo de Protección de Temperatura\nFunción Mantener Caliente'
      },
      variants: [
        {
          id: 'P10',
          name: 'P10',
          color: 'Inox',
          photos: [
            '/product/arroceras/P10-1.webp'
          ]
        }
      ]
    }
  ]
}

const bebederos: Category = {
  id: 'bebederos',
  name: 'Bebederos',
  description: 'Agua pura y fresca en todo momento.',
  shortDescription: 'Agua pura.',
  children: [
    {
      id: 'W10',
      name: 'Bebedero W10',
      popular: false,
      info: {
        review: 'El Dispensador de Agua Interbras W10 ofrece una conveniente y versátil solución para tu hogar o oficina.\nCon la capacidad de dispensar agua caliente y fría, es perfecto para preparar bebidas instantáneas o refrescarte en cualquier momento.\nSu diseño compacto y moderno se adapta fácilmente a cualquier espacio, mientras que su funcionamiento eficiente asegura un uso económico y fiable.',
        included: null,
        specs: 'Peso Neto: 4.0 kg\nPeso Bruto: 4.8 kg\nDimensiones: 260 x 280 x 320 mm\nTemperatura del Agua Caliente: 85°C – 95°C\nTemperatura del Agua Fría: 5°C – 10°C'
      },
      variants: [
        {
          id: 'W10',
          name: 'W10',
          color: 'Blanco',
          photos: [
            '/product/bebederos/W10-1.webp'
          ]
        }
      ]
    }
  ]
}

export const data: Root = {
  products: [
    airfryer,
    scooters,
    aires,
    tvs,
    mixteras,
    cocinas,
    hervidoras,
    cafeteras,
    planchas,
    licuadoras,
    beauty,
    batidoras,
    arroceras,
    bebederos
  ]
}

export interface Urls {
  name: string
  url: string
}

export const getUrls = (): Urls[] => {
  const urls: Urls[] = data.products.map(product => {
    return {
      name: product.name,
      url: '/product/' + product.id
    }
  })
  return urls
}

export const getCategories = (): Category[] => {
  return data.products
}

export const getCategory = ({ id }: { id: string }): Category => {
  const product = data.products.find(product => product.id === id)
  return product as Category
}

export const getProductsByCategory = ({ id }: { id: string }): Category => {
  const products = data.products.filter(product => product.id === id)[0]
  return products
}
