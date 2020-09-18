import React from 'react';
import '../assets/css/main.css';
import Topbar from './Topbar';
import PageContent from './PageContent';

function MainContent() {
    return (
        // <!-- Main Content -->
        <div id="content">
            <Topbar/>
            <PageContent/>
        </div>
        // <!-- End of Main Content -->
    );
}

export default MainContent;
