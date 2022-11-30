import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Home/AllProducts/ProductCard/ProductCard';

const ProductsByCategory = () => {
    const products = useLoaderData()
    
    return (
        <div>
            <h2 className='text-center text-3xl my-3'>Products By Category </h2>
            <div className="grid grid-cols-3 gap-8 my-5">
                {
                    products.map(product => <ProductCard 
                        key={product._id}
                        product={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsByCategory;