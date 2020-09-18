import React from 'react';
import '../assets/css/main.css';
import LastProductInDB from './LastProductInDB';
import CategoriesInDB from './CategoriesInDB';

function PageContentBottom() {
    return (
    // <!-- Page Content Bottom Row -->
    <div className="row">
        <LastProductInDB/>
        <CategoriesInDB/>
    </div>
    );
}

export default PageContentBottom;