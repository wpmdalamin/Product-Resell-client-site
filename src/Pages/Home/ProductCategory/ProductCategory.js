import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const ProductCategory = () => {
    const [categorys, setCategorys] = useState([])
    

    useEffect(() => {
        fetch(`https://product-server-omega.vercel.app/categorys`)
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    return (
        <div>
            <h3 className="text-3xl text-center my-6">All Category</h3>
            <div className="grid grid-cols-3 gap-8">
                {
                    categorys.map(categorys => <CategoryCard
                    key={categorys._id}
                    categorys={categorys}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;