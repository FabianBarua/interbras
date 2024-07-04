import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <main className='  sm:w-[80%] w-[90%] flex flex-col gap-3 mx-auto flex-1 text-center justify-center items-center'>
      <h1 className=' text-4xl  font-semibold'>Producto no encontrado</h1>
      <p className=' text-lg font-light'>El producto que buscas no existe</p>
      <Link to='/' className=' text-lg text-white bg-interbrasGreen-500 p-2 rounded-3xl px-8'>Volver al inicio</Link>
    </main>
  )
}
