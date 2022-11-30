import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({categorys}) => {
    return (
        <div>
            <Link key={categorys._id} categorys={categorys} to={`/category/${categorys.categoryId}`}>
                <div className="flex justify-center items-center drop-shadow-2xl border p-4 rounded">
                    <img className="w-24 h-24 mr-6" src={categorys.img} alt="" />
                    <h4 className="text-3xl">{categorys.category}</h4>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;