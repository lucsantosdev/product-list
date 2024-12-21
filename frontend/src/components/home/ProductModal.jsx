import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenLight } from "react-icons/pi";
import { BiUserCircle }from 'react-icons/bi'

const ProductModal = ({ product, onClose }) => {
    return (
        <div 
          className="fixed bg-black bg-opacity-60 top-0 left-0 riht-0 bottom-0 z-50 flex justify-center items-center"
          onClick={onClose}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-[60px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
          >
            <AiOutlineClose 
              className="absolute right-6 top-6 text-2xl text-red-600 cursor-pointer"
              onClick={onClose}
            />
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                {product.description}
            </h2>
            <h4 className='my-2 text-gray-500'>{product._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiProductOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{product.name}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{product.type}</h2>
            </div>
            <p className="mt-4">Anything You Want to Show</p>
            <p className="my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, in voluptatibus perferendis consectetur, nesciunt, quidem quasi mollitia laboriosam tenetur quo voluptas sequi incidunt nisi quaerat placeat debitis delectus vitae exercitationem.</p>
          </div>
        </div>
    )
}

export default ProductModal