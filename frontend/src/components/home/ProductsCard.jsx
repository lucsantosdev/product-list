import { Link } from 'react-router-dom'
import { PiProductOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import ProductSingleCard from './ProductSingleCard'

const ProductsCards = ({products}) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {products.map((item) => (
                <ProductSingleCard key={item._id} product={item} />
            ))}
        </div>
    )
}

export default ProductsCards