import React from 'react';
import '../assets/css/main.css';
import MainContent from './MainContent';
import Footer from './Footer';

function ContentWrapper() {
    return (
        // <!-- Content Wrapper -->
        <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <MainContent/>
            <Footer/>
        </div>
        // <!-- End of Content Wrapper -->
  );
}

export default ContentWrapper;
