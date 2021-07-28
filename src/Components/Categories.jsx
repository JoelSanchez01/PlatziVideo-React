import React from 'react';
import '../assets/styles/Components/Categories.scss'
const Categories = ({children, text}) => (
    <div className="Categories">
    <h3 className="categories__title">{text}</h3>
    {children}
    </div>
);



export default Categories