import React from 'react';
import '../assets/css/main.css';
import PageHeading from './PageHeading';
import PageContentTop from './PageContentTop';
import PageContentBottom from './PageContentBottom';
// import PageContentProductsTable from './PageContentProductsTable-API';
import PageContentProductsTable from './PageContentProductsTable-localData';

function PageContent() {
    return (
        // <!-- Page Content -->
        <React.Fragment> {/*Not really needed as there's a DIV acting as a container*/}
            <div className="container-fluid">
                <PageHeading/>
                {/* <!-- Page Content Top Row --> */}
                <PageContentTop />
                {/* <!-- Page Content Bottom Row --> */}
                <PageContentBottom />
                {/* <!-- Page Content Products Table --> */}
                <PageContentProductsTable />
            </div>
        </React.Fragment>
    );
}

export default PageContent;
