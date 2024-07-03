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
  name: 'Airfryer',
  description: 'Cocina de manera saludable y sin\naceite con nuestras freidoras de aire.',
  shortDescription: 'Cocina mas saludable.',
  children: [
    {
      id: 's10',
      name: 'Airfryer S10',
      popular: true,
      info: {
        review: 'La Air Fryer S10 de Interbras es perfecta para el uso familiar,\npermitiendo cocinar de manera saludable con una reducción del 80%\nen el uso de aceite. Con una potencia de 1200W y una capacidad de 4 litros,\nesta freidora ofrece siete funciones de cocción diferentes, adaptándose a tus necesidades culinarias.\nSu control de temperatura ajustable de 80°C a 200°C y su temporizador facilitan la preparación de tus platos favoritos con resultados perfectos.',
        included: null,
        specs: 'Potencia: 1200W\nReducción de aceite: 80%\nRango de temperatura: 80°C - 200°C\nFunciones de cocción: 7\nCapacidad: 4L\nControl de temperatura: Sí\nTemporizador: Sí\nVisor: Sí\nCesta: Extraíble'
      },
      variants: [
        {
          id: 's10-1',
          name: 'Airfryer S10 - 1',
          color: 'Negro',
          photos: [
            '/product/airfryer/s10-v1-1.png'
          ]
        },
        {
          id: 's10-2',
          name: 'Airfryer S10 - 2',
          color: 'Blanco',
          photos: [
            '/product/airfryer/s10-v2-1.png'
          ]
        }
      ]
    },
    {
      id: 's20',
      name: 'Airfryer S20',
      popular: false,
      info: {
        review: 'Esta freidora de aire es tu aliado perfecto en la cocina, diseñada para preparar platos crujientes y jugosos sin la necesidad de usar grandes cantidades de aceite. \nIdeal para aquellos que buscan una opción más saludable sin sacrificar el sabor ni la textura de sus comidas favoritas. \nCon esta freidora, podrás disfrutar de patatas fritas, pollo, pescado y mucho más, todo con un 80% menos de aceite. \nSu capacidad de 7 litros y su potente rendimiento de 1500W aseguran una cocción uniforme y rápida, permitiéndote preparar comidas deliciosas para toda la familia. \nAdemás, su rango de temperatura ajustable de 80°C a 200°C te da el control total sobre el proceso de cocción, adaptándose a diferentes recetas y preferencias.',
        included: null,
        specs: '1500w de potencia\n80% menos aceite\n80°C hasta 200°C\n7 Litros'
      },
      variants: [
        {
          id: 's20-1',
          name: 'Airfryer S20 - 1',
          color: 'Negro',
          photos: [
            '/product/airfryer/s20-v1-1.png'
          ]
        },
        {
          id: 's20-2',
          name: 'Airfryer S20 - 2',
          color: 'Blanco',
          photos: [
            '/product/airfryer/s20-v2-1.png'
          ]
        }
      ]
    },
    {
      id: 's30',
      name: 'Airfryer S30',
      popular: false,
      info: {
        review: 'El airfryer Inerbras puede cocinar una gran variedad de alimentos de forma saludable, utilizando tecnología de aire caliente para preparar platos sin necesidad de aceite. \nEs ideal para quienes desean disfrutar de comidas crujientes y jugosas sin el uso excesivo de grasas. \nDesde patatas fritas hasta pollo y vegetales, esta freidora de aire te permite preparar tus recetas favoritas de manera rápida y eficiente. \nAdemás, su diseño moderno y fácil de usar garantiza una experiencia de cocina cómoda y placentera, ayudándote a mantener una alimentación balanceada sin sacrificar el sabor.',
        included: null,
        specs: '1700W\n80% menos aceite\n80°C hasta 200°C\n8 Litros\nCajones con ventana y luz interna'
      },
      variants: [
        {
          id: 's30-1',
          name: 'Airfryer S30 - 1',
          color: 'Inox',
          photos: [
            '/product/airfryer/s30-v1-1.png'
          ]
        }
      ]
    },
    {
      id: 's40',
      name: 'Airfryer S40',
      popular: false,
      info: {
        review: 'Maximiza tu cocina con la AirFryer Interbras Doble, que ofrece alta eficiencia con una reducción significativa en el uso de aceite. \nCon una capacidad de 8 litros distribuidos en dos cestas de 4 litros cada una, permite la preparación simultánea de varios platos, optimizando tiempo y energía. \nEste innovador electrodoméstico es ideal para familias grandes o para quienes disfrutan de preparar comidas variadas en una sola sesión. \nLa tecnología avanzada de aire caliente asegura una cocción uniforme, conservando el sabor y la textura de los alimentos sin necesidad de añadir grasa. \nAdemás, su diseño moderno y funcional se adapta perfectamente a cualquier cocina, proporcionando una experiencia de usuario cómoda y eficiente. \nCon la AirFryer Interbras Doble, disfrutarás de una alimentación más saludable sin renunciar a tus platos favoritos, haciendo de cada comida una ocasión especial.',
        included: null,
        specs: '1000+1000W\nReducción del 80% en el uso de aceite\n80° Hasta 200° C\nCocina simultánea\n4L + 4L'
      },
      variants: [
        {
          id: 's40-1',
          name: 'Airfryer S40 - 1',
          color: 'Negro',
          photos: [
            '/product/airfryer/s40-v1-1.png'
          ]
        }
      ]
    }
  ]
}

const scooters: Category = {
  id: 'scooters',
  name: 'Scooters',
  description: 'Movilidad urbana eficiente y ecológica.',
  shortDescription: 'Movilidad mas ecológica',
  children: [
    {
      id: '8.5',
      name: 'Scooter 8.5',
      popular: true,
      info: {
        review: 'El X-Scooter Pro 8.5 de Interbras es ideal para quienes buscan una mezcla de elegancia y funcionalidad.\nEquipado con un motor de 350W y una batería de 36V/10.4Ah, este scooter asegura una conducción estable y eficiente.\nSu suspensión avanzada y el sistema de frenos E-ABS te ofrecen un viaje cómodo y seguro.\nAdemás, puedes controlar todas sus funciones a través de la aplicación móvil, asegurándote de tener siempre una experiencia personalizada y conveniente.',
        included: null,
        specs: 'Motor: 350W\nBatería: 36V/10.4Ah, autonomía extendida\nVelocidad: Estable y controlada\nSuspensión avanzada: Para mayor comodidad\nFrenos: E-ABS, sistema de frenos electrónicos\nConectividad: Control mediante aplicación móvil\nIluminación LED: Seguridad nocturna mejorada'
      },
      variants: [
        {
          id: '8.5-1',
          name: 'Scooter 8.5 - 1',
          color: 'Negro',
          photos: [
            '/product/scooters/8.5-v1-1.png'
          ]
        }
      ]
    },
    {
      id: '10.5pro',
      name: 'Scooter 10.5 Pro',
      popular: false,
      info: {
        review: 'El X-Scooter Pro 10.5 de Interbras es la solución definitiva para los entusiastas del transporte eléctrico urbano.\nCon su motor optimizado de 350W y una batería potente de 36V/10.5Ah, este scooter ofrece una autonomía extendida para aventuras más largas.\nSu sistema de recuperación de energía cinética y los frenos E-ABS garantizan máxima eficiencia y seguridad.\nEl diseño plegable en tres segundos permite un almacenamiento rápido y conveniente, ideal para la vida urbana acelerada.',
        included: null,
        specs: 'Motor: 350W\nBatería: 36V/10.4Ah, \nVelocidad: Estable y eficiente\nRecuperación de energía: Sistema cinético\nFrenos: E-ABS, sistema de frenos electrónicos\nConectividad: Control mediante aplicación móvil\nDiseño plegable: Almacenamiento rápido y sencillo\nSuspensión avanzada: Mayor confort y seguridad\nIluminación LED: Seguridad nocturna mejorada'
      },
      variants: [
        {
          id: '10.5pro-1',
          name: 'Scooter 10.5 Pro - 1',
          color: 'Negro',
          photos: [
            '/product/scooters/10.5pro-v1-1.png'
          ]
        }
      ]
    },
    {
      id: 'cross',
      name: 'Scooter Cross',
      popular: false,
      info: {
        review: 'El X-Scooter Cross de Interbras es perfecto para los entusiastas de la vida urbana que buscan un scooter robusto y confiable.\nEquipado con un motor de 500W, este scooter puede alcanzar una velocidad máxima de 45 km/h, ofreciendo un rendimiento impresionante en cualquier trayecto.\nLa batería de 48V 10Ah proporciona una autonomía de hasta 50 km, ideal para desplazamientos largos sin preocuparse por la recarga.\nSu suspensión delantera y trasera garantiza una conducción suave y estable, mientras que los neumáticos de 10 pulgadas aseguran una excelente tracción en diversas superficies. ',
        included: null,
        specs: 'Velocidad máxima: 45 km/h\nMotor: 500W\nBatería: 48V 10Ah\nAplicación móvil: Minirobot App\nSuspensión: Delantera + trasera\nNeumáticos: 10 pulgadas\nAutonomía: 45-50 km\nResistencia al agua: IP54\nIluminación LED: Seguridad nocturna mejorada'
      },
      variants: [
        {
          id: 'cross-1',
          name: 'Scooter Cross - 1',
          color: 'Negro',
          photos: [
            '/product/scooters/cross-v1-1.png'
          ]
        }
      ]
    },
    {
      id: 'crosspro',
      name: 'Scooter Cross Pro',
      popular: false,
      info: {
        review: 'El X-Scooter Cross Pro de Interbras combina tecnología avanzada y diseño robusto para ofrecer una experiencia de conducción superior. \nCon un motor de 500W, alcanza una velocidad máxima de 45 km/h, permitiendo desplazamientos rápidos y eficientes.\nSu batería de 48V 12.5Ah ofrece una autonomía extendida de hasta 50 km, ideal para largas distancias.\nEquipado con suspensión delantera y trasera, garantiza un viaje cómodo y seguro en cualquier terreno.',
        included: null,
        specs: 'Velocidad máxima: 45 km/h\nMotor: 500W\nBatería: 48V 12.5Ah\nAplicación móvil: Minirobot App\nSuspensión: Delantera + trasera\nNeumáticos: 10 pulgadas\nAutonomía: 45-50 km\nResistencia al agua: IP54\nIluminación LED: Seguridad nocturna mejorada'
      },
      variants: [
        {
          id: 'crosspro-1',
          name: 'Scooter Cross Pro - 1',
          color: 'Negro',
          photos: [
            '/product/scooters/crosspro-v1-1.png'
          ]
        }
      ]
    }
  ]
}

const aires: Category = {
  id: 'aires',
  name: 'Aires',
  description: 'Eficientes, silenciosos y elegantes.\nPerfectos para climatizar tu hogar u oficina.',
  shortDescription: 'Eficientes y elegantes.',
  children: [
    {
      id: 'itb-12000iv',
      name: 'ITB 12000IV',
      popular: false,
      info: {
        review: 'El aire acondicionado ITB 12000IV de 12000 BTU es perfecto para mantener tu hogar fresco y confortable todo el año.\nGracias a su tecnología Inverter, ajusta el uso de energía para máxima eficiencia, ayudándote a reducir costos. ',
        included: null,
        specs: 'Modelo: ITB 12000IV\nTipo: Inverter\nCapacidad de Enfriamiento: 12,000 BTU (2700~13000)\nCapacidad de Calefacción: 12,000 BTU (2700~13000)\nConsumo de Energía (Enfriamiento): 1295W (150~1650W)\nConsumo de Energía (Calefacción): 1200W (150~1650W)\nCorriente Nominal (Enfriamiento): 6.0A (0.7~8.5A)\nCorriente Nominal (Calefacción): 5.6A (0.7~8.5A)\nConsumo Máximo: 1650W\nCorriente Máxima: 8.5A\nCompresor: Tipo rotativo, marca GMCC\nRefrigerante: R410A, carga de 600g\nDimensiones Unidad Interior (Ancho x Alto x Profundidad):\n800 x 292 x 190 mm\nPeso Neto Unidad Interior: 7.3 kg\nNivel de Ruido Unidad Interior: 39/37/34 dB (Hi/Mi/Lo)\nDimensiones Unidad Exterior (Ancho x Alto x Profundidad): \n700 x 276 x 550 mm\nPeso Neto Unidad Exterior: 24 kg\nNivel de Ruido Unidad Exterior: 49 dB\nTemperatura de Operación: -7°C a 43°C\nTemperatura Ambiental de Operación: -7°C a 48°C\nAlimentación Eléctrica: 220-240V / 60Hz\nÁrea de Aplicación: 14~21 m²'
      },
      variants: [
        {
          id: 'itb-12000iv-1',
          name: 'ITB 12000IV - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.png'
          ]
        }
      ]
    },
    {
      id: 'itp-12000iv',
      name: 'ITP 12000IV',
      popular: false,
      info: {
        review: 'El ITP 12000IV es un aire acondicionado de 12000 BTU que ofrece una climatización eficiente y confortable para cualquier espacio. \nSu tecnología Inverter permite  un ajuste preciso de la temperatura, asegurando un  ambiente agradable todo el año.',
        included: null,
        specs: 'Modelo: ITP 12000IV\nTipo: Inverter\nCapacidad de Enfriamiento: 12,000 BTU (2700~13000)\nCapacidad de Calefacción: 12,000 BTU (2700~13000)\nConsumo de Energía (Enfriamiento): 1295W (150~1650W)\nConsumo de Energía (Calefacción): 1200W (150~1650W)\nCorriente Nominal (Enfriamiento): 6.0A (0.7~8.5A)\nCorriente Nominal (Calefacción): 5.6A (0.7~8.5A)\nConsumo Máximo: 1650W\nCorriente Máxima: 8.5A\nCompresor: Tipo rotativo, marca GMCC\nRefrigerante: R410A, carga de 600g\nDimensiones Unidad Interior (Ancho x Alto x Profundidad):\n800 x 292 x 190 mm\nPeso Neto Unidad Interior: 7.3 kg\nNivel de Ruido Unidad Interior: 39/37/34 dB (Hi/Mi/Lo)\nDimensiones Unidad Exterior (Ancho x Alto x Profundidad):\n700 x 276 x 550 mm\nPeso Neto Unidad Exterior: 24 kg\nNivel de Ruido Unidad Exterior: 49 dB\nTemperatura de Operación: -7°C a 43°C\nTemperatura Ambiental de Operación: -7°C a 48°C\nAlimentación Eléctrica: 220-240V / 50Hz\nÁrea de Aplicación: 14~21 m²'
      },
      variants: [
        {
          id: 'itp-12000iv-1',
          name: 'ITP 12000IV - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.png'
          ]
        }
      ]
    },
    {
      id: 'itb-12000of',
      name: 'ITB 12000OF',
      popular: false,
      info: {
        review: 'El aire acondicionado ITB 12000OF, con capacidad de 12000 BTU,\nes una excelente opción para quienes buscan una solución de climatización eficiente y directa.\nSu diseño On/Off proporciona un control simple y efectivo, ideal para aquellos que valoran la practicidad.\nCon un funcionamiento silencioso y un diseño elegante, es perfecto para áreas de 13 a 27 m2.\nAdemás, su tecnología avanzada asegura un enfriamiento rápido y uniforme, \nmientras que su modo de ahorro de energía contribuye a reducir los costos de electricidad.\nEste aire acondicionado también cuenta con un filtro de aire lavable que mejora la calidad del aire interior,\nhaciendo que el ambiente sea más saludable y confortable.\nSu instalación es sencilla y su mantenimiento, mínimo, lo que lo convierte en una opción práctica y conveniente para cualquier hogar.',
        included: null,
        specs: 'Modelo: ITB 12000OF\nTipo: On/Off\nCapacidad de Enfriamiento: 12,000 BTU\nCapacidad de Calefacción: 12,000 BTU\nConsumo de Energía (Enfriamiento): 1165W\nConsumo de Energía (Calefacción): 1050W\nCorriente Nominal (Enfriamiento): 5.46A\nCorriente Nominal (Calefacción): 4.92A\nConsumo Máximo: 1650W\nCorriente Máxima: 7.89A\nCompresor: Tipo rotativo, marca GREE\nRefrigerante: R410A, carga de 575g\nDimensiones Unidad Interior (Ancho x Alto x Profundidad): \n800 x 292 x 190 mm\nPeso Neto Unidad Interior: 7.6 kg\nNivel de Ruido Unidad Interior: 39/37/34 dB (Hi/Mi/Lo)\nDimensiones Unidad Exterior (Ancho x Alto x Profundidad): \n700 x 276 x 550 mm\nPeso Neto Unidad Exterior: 26 kg\nNivel de Ruido Unidad Exterior: 49 dB\nTemperatura de Operación: -7°C a 43°C\nTemperatura Ambiental de Operación: -7°C a 48°C\nAlimentación Eléctrica: 220-240V / 60Hz\nÁrea de Aplicación: 13~27 m²'
      },
      variants: [
        {
          id: 'itp-12000iv-1',
          name: 'ITB 12000OF - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.png'
          ]
        }
      ]
    },
    {
      id: 'itp-12000of',
      name: 'ITP 12000OF',
      popular: false,
      info: {
        review: 'El aire acondicionado ITP 12000OF de 12000 BTU es ideal para quienes necesitan una climatización efectiva y sin complicaciones.\nCon su sistema On/Off, proporciona una experiencia de uso sencilla y directa, manteniendo tu espacio a la temperatura deseada tanto en verano como en invierno.\nEste modelo es perfecto para aquellos que buscan comodidad y eficiencia, ya que su tecnología avanzada asegura un enfriamiento rápido y uniforme.\nAdemás, su modo de ahorro de energía ayuda a reducir los costos de electricidad, convirtiéndolo en una opción económica y sostenible.\nEl diseño elegante y discreto del ITP 12000OF se adapta a cualquier decoración, mientras que su funcionamiento silencioso garantiza un ambiente tranquilo y confortable.\nIdeal para habitaciones de tamaño mediano a grande, este aire acondicionado es fácil de instalar y mantener, lo que lo hace una opción práctica y conveniente para el hogar o la oficina.',
        included: null,
        specs: 'Modelo: ITP 12000OF\nTipo: On/Off\nCapacidad de Enfriamiento: 12,000 BTU\nCapacidad de Calefacción: 12,000 BTU\nConsumo de Energía (Enfriamiento): 1165W\nConsumo de Energía (Calefacción): 1050W\nCorriente Nominal (Enfriamiento): 5.46A\nCorriente Nominal (Calefacción): 4.92A\nConsumo Máximo: 1650W\nCorriente Máxima: 7.89A\nCompresor: Tipo rotativo, marca GMCC\nRefrigerante: R410A, carga de 575g\nDimensiones Unidad Interior (Ancho x Alto x Profundidad): \n800 x 292 x 190 mm\nPeso Neto Unidad Interior: 7.6 kg\nNivel de Ruido Unidad Interior: 39/37/34 dB (Hi/Mi/Lo)\nDimensiones Unidad Exterior (Ancho x Alto x Profundidad): \n700 x 276 x 550 mm\nPeso Neto Unidad Exterior: 26 kg\nNivel de Ruido Unidad Exterior: 49 dB\nTemperatura de Operación: -7°C a 43°C\nTemperatura Ambiental de Operación: -7°C a 48°C\nAlimentación Eléctrica: 220-240V / 50Hz\nÁrea de Aplicación: 13~27 m²'
      },
      variants: [
        {
          id: 'itp-12000iv-1',
          name: 'ITP 12000OF - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.png'
          ]
        }
      ]
    },
    {
      id: 'itb-18000iv',
      name: 'ITB 18000IV',
      popular: false,
      info: {
        review: 'El modelo ITB 18000IV, con una capacidad de 18000 BTU, combina eficiencia y rendimiento para ofrecerte un ambiente siempre confortable. \nSu tecnología Inverter asegura un uso eficiente de la energía, mientras que su diseño elegante facilita la instalación y mantenimiento.',
        included: null,
        specs: 'Modelo: ITB 18000IV\nTipo: Inverter\nCapacidad de Enfriamiento: 18,000 BTU (2700~19000)\nCapacidad de Calefacción: 18,000 BTU (2700~19000)\nConsumo de Energía (Enfriamiento): 2000W (150~2500W)\nConsumo de Energía (Calefacción): 1850W (150~2500W)\nCorriente Nominal (Enfriamiento): 9.3A (0.7~11.6A)\nCorriente Nominal (Calefacción): 8.12A (0.7~11.6A)\nCompresor: Tipo rotativo, marca SANYO\nRefrigerante: R410A, carga de 1160g\nDimensiones Unidad Interior (Ancho x Alto x Profundidad): \n850 x 292 x 190 mm\nPeso Neto Unidad Interior: 8.5 kg\nNivel de Ruido Unidad Interior: 45/42/39 dB (Hi/Mi/Lo)\nDimensiones Unidad Exterior (Ancho x Alto x Profundidad): \n760 x 276 x 550 mm\nPeso Neto Unidad Exterior: 28.5 kg\nNivel de Ruido Unidad Exterior: 55 dB\nTemperatura de Operación: -7°C a 43°C\nAlimentación Eléctrica: 220-240V / 60Hz\nÁrea de Aplicación: 20～40 m²'
      },
      variants: [
        {
          id: 'itb-18000iv-1',
          name: 'ITP 12000OF - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.png'
          ]
        }
      ]
    },
    {
      id: 'itp-24000iv',
      name: 'ITP 24000IV',
      popular: false,
      info: {
        review: 'Descripción: El ITB 24000IV es un aire acondicionado potente con 24000 BTU, diseñado para mantener grandes espacios frescos y cómodos. \nLa tecnología Inverter ajusta el uso de energía para mayor eficiencia y ahorro.',
        included: null,
        specs: 'Modelo: ITB 24000IV\nTipo: Inverter\nCapacidad de Enfriamiento: 24,000 BTU (2700~25000)\nCapacidad de Calefacción: 24,000 BTU (2700~25000)\nConsumo de Energía (Enfriamiento): 2880W (300~3000W)\nConsumo de Energía (Calefacción): 2650W (300~3000W)\nCorriente Nominal (Enfriamiento): 13.3A (1.4~14.35A)\nCorriente Nominal (Calefacción): 12.3A (1.4~14.35A)\nConsumo Máximo: 3000W\nCorriente Máxima: 14.35A\nCompresor: Tipo rotativo, marca SANYO\nRefrigerante: R410A, carga de 1500g\nDimensiones Unidad Interior (Ancho x Alto x Profundidad):\n970 x 310 x 230 mm\nPeso Neto Unidad Interior: 12.5 kg\nNivel de Ruido Unidad Interior: 49/47/45 dB (Hi/Mi/Lo)\nDimensiones Unidad Exterior (Ancho x Alto x Profundidad): \n820 x 318 x 597 mm\nPeso Neto Unidad Exterior: 36 kg\nNivel de Ruido Unidad Exterior: 57 dB\nTemperatura de Operación: -7°C a 43°C\nTemperatura Ambiental de Operación: -7°C a 48°C\nAlimentación Eléctrica: 220-240V / 60Hz\nÁrea de Aplicación: 30～55 m²'
      },
      variants: [
        {
          id: 'itp-24000iv-1',
          name: 'ITP 24000IV - 1',
          color: 'Blanco',
          photos: [
            '/product/aires/general.png'
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
            '/product/tvs/IN3200TV-1.png',
            '/product/tvs/IN3200TV-2.png',
            '/product/tvs/IN3200TV-3.png'
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
            '/product/aires/general.png'
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
            '/product/aires/general.png'
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
            '/product/aires/general.png'
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
            '/product/aires/general.png'
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
            '/product/aires/general.png'
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
            '/product/mixteras/G10-1.png'
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
            '/product/mixteras/G20-1.png'
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
            '/product/mixteras/G30-1.png'
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
            '/product/mixteras/G40-1.png'
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
            '/product/mixteras/G50-1.png'
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
            '/product/mixteras/G10-1.png'
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
            '/product/mixteras/G20-1.png'
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
            '/product/mixteras/G30-1.png'
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
            '/product/mixteras/G40-1.png'
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
            '/product/mixteras/G50-1.png'
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
    cocinas
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