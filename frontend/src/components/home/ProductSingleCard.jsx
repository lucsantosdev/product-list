import { Link } from 'react-router-dom'
import { PiProductOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

const ProductSingleCard = ({product}) => {
    return (
        <div
                  key={product._id}
                  className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shad'
                >
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
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
                    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                        <Link to={`/products/details/${product._id}`}>
                          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                        </Link> to={`/products/edit/${product._id}`}
                        <Link>
                           <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                        </Link>
                        <Link to={`/products/delete/${product._id}`}>
                          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                        </Link>
                    </div>
                </div>
    )
}

export default ProductSingleCard