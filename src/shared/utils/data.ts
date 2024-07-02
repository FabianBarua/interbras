export interface Root {
  products: Category[]
}

export interface Category {
  id: string
  name: string
  children: Children[]
  description: string
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
  included: string
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
  description: 'Airfryer is a great product.',
  children: [
    {
      id: 's10',
      name: 'Airfryer S10',
      popular: true,
      info: {
        review: 'Los scooters eléctricos han revolucionado la movilidad urbana con su diseño ágil, ecológico y práctico. \nEstos vehículos ofrecen una alternativa eficiente a los medios de transporte tradicionales, permitiendo desplazamientos rápidos y sin emisiones nocivas para el medio ambiente.\nCon su versatilidad y facilidad de uso, los scooters eléctricos se han convertido en una opción popular para aquellos que buscan una forma conveniente y sostenible de moverse por la ciudad.',
        included: '2 - Ruedas de respaldo\n1 - Scooter X Pro',
        specs: 'Autonomía: 20-30 km\nPotencia máxima: 250-350 W\nVelocidad máxima: 25 km/h\nCapacidad máxima: 120 kg'
      },
      variants: [
        {
          id: 's10-1',
          name: 'Airfryer S10 - 1',
          color: 'Negro',
          photos: [
            '/products/airfryer/s10-v1-1.jpg',
            '/products/airfryer/s10-v1-2.jpg',
            '/products/airfryer/s10-v1-3.jpg'
          ]
        },
        {
          id: 's10-2',
          name: 'Airfryer S10 - 2',
          color: 'Blanco',
          photos: [
            '/products/airfryer/s10-v2-1.jpg',
            '/products/airfryer/s10-v2-2.jpg',
            '/products/airfryer/s10-v2-3.jpg'
          ]
        }
      ]
    },
    {
      id: 's20',
      name: 'Airfryer S20',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 's20-1',
          name: 'Airfryer S20 - 1',
          color: 'Negro',
          photos: [
            '/products/airfryer/s20-v1-1.jpg',
            '/products/airfryer/s20-v1-2.jpg',
            '/products/airfryer/s20-v1-3.jpg'
          ]
        },
        {
          id: 's20-2',
          name: 'Airfryer S20 - 2',
          color: 'Gris',
          photos: [
            '/products/airfryer/s20-v2-1.jpg',
            '/products/airfryer/s20-v2-2.jpg',
            '/products/airfryer/s20-v2-3.jpg'
          ]
        }
      ]
    },
    {
      id: 's30',
      name: 'Airfryer S30',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 's30-1',
          name: 'Airfryer S30 - 1',
          color: 'Blanco',
          photos: [
            '/products/airfryer/s30-v1-1.jpg',
            '/products/airfryer/s30-v1-2.jpg',
            '/products/airfryer/s30-v1-3.jpg'
          ]
        },
        {
          id: 's30-2',
          name: 'Airfryer S30 - 2',
          color: 'Gris',
          photos: [
            '/products/airfryer/s30-v2-1.jpg',
            '/products/airfryer/s30-v2-2.jpg',
            '/products/airfryer/s30-v2-3.jpg'
          ]
        }
      ]
    },
    {
      id: 's40',
      name: 'Airfryer S40',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 's40-1',
          name: 'Airfryer S40 - 1',
          color: 'Inox',
          photos: [
            '/products/airfryer/s40-v1-1.jpg',
            '/products/airfryer/s40-v1-2.jpg',
            '/products/airfryer/s40-v1-3.jpg'
          ]
        },
        {
          id: 's40-2',
          name: 'Airfryer S40 - 2',
          color: 'Plata',
          photos: [
            '/products/airfryer/s40-v2-1.jpg',
            '/products/airfryer/s40-v2-2.jpg',
            '/products/airfryer/s40-v2-3.jpg'
          ]
        }
      ]
    }
  ]
}

const scooters: Category = {
  id: 'scooters',
  name: 'Scooters',
  description: 'Scooters is a great product.',
  children: [
    {
      id: '8.5',
      name: 'Scooter 8.5',
      popular: true,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: '8.5-1',
          name: 'Scooter 8.5 - 1',
          color: '#ff0000',
          photos: [
            '/products/scooters/8.5-v1-1.jpg',
            '/products/scooters/8.5-v1-2.jpg',
            '/products/scooters/8.5-v1-2.jpg',
            '/products/scooters/8.5-v1-2.jpg',
            '/products/scooters/8.5-v1-2.jpg',
            '/products/scooters/8.5-v1-2.jpg',
            '/products/scooters/8.5-v1-3.jpg'
          ]
        }
      ]
    },
    {
      id: '10.5pro',
      name: 'Scooter 10.5 Pro',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: '10.5pro-1',
          name: 'Scooter 10.5 Pro - 1',
          color: '#00ff00',
          photos: [
            '/products/scooters/10.5pro-v1-1.jpg',
            '/products/scooters/10.5pro-v1-2.jpg',
            '/products/scooters/10.5pro-v1-3.jpg'
          ]
        }
      ]
    },
    {
      id: 'cross',
      name: 'Scooter Cross',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 'cross-1',
          name: 'Scooter Cross - 1',
          color: '#0000ff',
          photos: [
            '/products/scooters/cross-v1-1.jpg',
            '/products/scooters/cross-v1-2.jpg',
            '/products/scooters/cross-v1-3.jpg'
          ]
        }
      ]
    },
    {
      id: 'crosspro',
      name: 'Scooter Cross Pro',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 'crosspro-1',
          name: 'Scooter Cross Pro - 1',
          color: '#ffff00',
          photos: [
            '/products/scooters/crosspro-v1-1.jpg',
            '/products/scooters/crosspro-v1-2.jpg',
            '/products/scooters/crosspro-v1-3.jpg'
          ]
        }
      ]
    }
  ]
}

const aires: Category = {
  id: 'aires',
  name: 'Aires',
  description: 'Aires is a great product.',
  children: [
    {
      id: 'itb-12000iv',
      name: 'ITB 12000IV',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 'itb-12000iv-1',
          name: 'ITB 12000IV - 1',
          color: '#ff0000',
          photos: [
            '/products/aires/itb-12000iv-v1-1.jpg',
            '/products/aires/itb-12000iv-v1-2.jpg',
            '/products/aires/itb-12000iv-v1-3.jpg'
          ]
        }
      ]
    },
    {
      id: 'itb-12000of',
      name: 'ITB 12000OF',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 'itb-12000of-1',
          name: 'ITB 12000OF - 1',
          color: '#00ff00',
          photos: [
            '/products/aires/itb-12000of-v1-1.jpg',
            '/products/aires/itb-12000of-v1-2.jpg',
            '/products/aires/itb-12000of-v1-3.jpg'
          ]
        }
      ]
    },
    {
      id: 'itb-18000iv',
      name: 'ITB 18000IV',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 'itb-18000iv-1',
          name: 'ITB 18000IV - 1',
          color: '#0000ff',
          photos: [
            '/products/aires/itb-18000iv-v1-1.jpg',
            '/products/aires/itb-18000iv-v1-2.jpg',
            '/products/aires/itb-18000iv-v1-3.jpg'
          ]
        }
      ]
    },
    {
      id: 'itb-24000iv',
      name: 'ITB 24000IV',
      popular: false,
      info: {
        review: 'review and rating',
        included: 'included items',
        specs: 'specs and features'
      },
      variants: [
        {
          id: 'itb-24000iv-1',
          name: 'ITB 24000IV - 1',
          color: '#ffff00',
          photos: [
            '/products/aires/itb-24000iv-v1-1.jpg',
            '/products/aires/itb-24000iv-v1-2.jpg',
            '/products/aires/itb-24000iv-v1-3.jpg'
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
    scooters,
    scooters,
    scooters,
    scooters,
    scooters,
    scooters
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
