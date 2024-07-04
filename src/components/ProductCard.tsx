import { Children } from '../shared/utils/data'

export const ProductCard: React.FC<{ child: Children, active: boolean, change: (child: Children) => void }> = ({ child, active, change }) => {
  return (

    <button
      className={
        `
          w-full text-lg flex p-2 py-2 rounded-3xl transition-colors border-2
        ${active ? '  bg-neutral-200' : 'hover:bg-neutral-200 '}
        `
      }
      onClick={() => change(child)}
    >
      <img
        src={child.variants[0].photos[0]} className=' size-20 p-3 object-contain rounded-3xl ' alt=''
      />

      <div className={
        `
        flex-1 ml-3 text-left my-auto
        ${active ? 'text-black ' : 'text-black/50'}
        `
      }
      >
        <p className={
          `
           text-xl font-medium
          `
        }
        >
          {child.name}
        </p>
        <div className=' flex '>
          {
            child.variants.length > 1 ? 'Colores:' : 'Color:'
          }
          <div className=' flex gap-1 items-center ml-1'>
            {
            child.variants.map((variant) => (
              <p key={variant.color.toString() + variant.id.toString()}>
                {variant.color}{child.variants.length > 1 && variant !== child.variants[child.variants.length - 1] ? ',' : ''}
              </p>
            ))
            }
          </div>
        </div>
      </div>
    </button>

  )
}
