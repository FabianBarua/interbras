import { Info } from '../shared/utils/data'

export const ProductInfo: React.FC<Info> = ({ review, included, specs }) => {
  return (
    // arreglar bud de telefono
    <div className='flex flex-col gap-6  mt-16   mx-auto sm:w-[60%] w-[100%]'>
      <hr className='  border-black/25' />
      <h2 className=' px-4 lg:px-0 text-3xl font-semibold'>Información del producto</h2>
      <div className='flex px-4 lg:px-0 flex-col lg:flex-row mt-5  gap-2 my-3'>
        <h2 className=' lg:w-96  text-2xl '>Review</h2>
        <p className=' flex-1 leading-5'>{
            review.split('\n').map((item, i) => (
              <span key={i.toString() + '-review'}>
                {item}
                <span className=' block my-4' />
              </span>
            ))
        }
        </p>
      </div>
      {
        included !== null && (
          <>
            <hr className='  border-black/25' />
            <div className='flex flex-col lg:flex-row gap-2 my-3'>
              <h2 className=' lg:w-96 px-4 lg:px-0 text-2xl'>¿Que hay en la caja?</h2>
              <p className=' px-4 lg:px-0 flex-1'>{
                included?.split('\n').map((item, i) => (
                  <span key={i.toString() + '-included'}>
                    {item}
                    <br />
                  </span>
                ))
            }
              </p>
            </div>
          </>
        )
      }
      <hr className='  border-black/25' />
      <div className='flex flex-col lg:flex-row gap-2 my-3'>
        <h2 className=' lg:w-96 px-4 lg:px-0 text-2xl'>Especificaciones</h2>
        <p className=' px-4 lg:px-0 flex-1'>{
                    specs.split('\n').map((item, i) => (
                      <span key={i.toString() + '-specs'}>
                        {item}
                        <br />
                      </span>
                    ))
                }
        </p>
      </div>
      <hr
        className='  border-black/25'
      />
    </div>
  )
}
