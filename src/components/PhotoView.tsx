import { ShowMore } from './ShowMore'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'

interface PhotoViewProps {
  name: string
  photos: string[]
}

export const PhotoViewer: React.FC<PhotoViewProps> = ({
  name,
  photos
}) => {
  return (
    <>
      <PhotoProvider>

        <PhotoView
          src='/template.png'
        >
          <img
            src='/template.png' alt={name} className=' object-contain p-7  h-[400px] w-full bg-white rounded-3xl'
          />
        </PhotoView>

        <div className=' flex gap-[6px] overflow-hidden w-full mt-2'>
          {
            photos?.slice(0, 3)
              .map((photo, index) => (
                <PhotoView
                  key={index}
                  src='/template.png'
                >
                  <img
                    src='/template.png'
                    alt={name}
                    className='object-contain p-2 size-24 rounded-3xl border-2 bg-white hover:bg-neutral-200 transition-colors cursor-pointer '
                  />
                </PhotoView>
              ))
        }
          <PhotoView
            src='/template.png'
          >

            <div className=' cursor-pointer size-24 bg-white rounded-3xl border-2 hover:bg-neutral-200 text-neutral-500 p-6'>
              <ShowMore />
            </div>
          </PhotoView>
        </div>

      </PhotoProvider>
    </>
  )
}
