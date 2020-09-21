import React from 'react';
import '../assets/css/main.css';
import TopRowSmallCard from './TopRowSmallCard';

let product = {
    title: 'Products in Data Base',
    value: '135',
    color: 'primary',
    icon: 'fa-clipboard-list'
};
let amount = {
    title: 'Amount in products',
    value: '$546.456',
    color: 'success',
    icon: 'fa-dollar-sign'
};
let users = {
    title: 'Users quantity',
    value: '38',
    color: 'warning',
    icon: 'fa-user-check'
};
let cards = [product,amount,users];

function PageContentTop() {
    return (
    // <!-- Page Content Top Row -->
    <div className="row">
        {
            cards.map((elements,i) => {
                return <TopRowSmallCard {...elements} key={i}/>
            })
        }
    </div>
    );
}

export default PageContentTop;