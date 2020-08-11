import React from 'react';
import '../assets/css/main.css';
import PageHeading from './PageHeading';
import AmountProductsInDB from './AmountProductsInDB';
import TotalValueProductsInDB from './TotalValueProductsInDB';
import AmountUsersInDB from './AmountUsersInDB';
import LastProductInDB from './LastProductInDB';
import CategoriesInDB from './CategoriesInDB';

function PageContent() {
    return (
        <React.Fragment>
            <PageHeading/>
            {/* <!-- Content Row --> */}
		    <div className="row">
                <AmountProductsInDB/>
                <TotalValueProductsInDB/>
                <AmountUsersInDB/>
            </div>
            <div className="row">
                <LastProductInDB/>
                <CategoriesInDB/>
            </div>
        </React.Fragment>
  );
}

export default PageContent;
