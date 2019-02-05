import React from 'react';
import './Products.css';

class Products extends React.Component {

    render() {
        return (
            <section>
                <h1>Products</h1>
                <div className='Products'>
                    <div className='Products-card'>
                        <h1>E-books</h1>
                        <p>Learn what's hot in web development in 2019 and how to apply modern practices to inhance you're carreer</p>
                    </div>
                    <div className='Products-card'>
                        <h1>Wordpress Themes</h1>
                        <p>Learn what's hot in web development in 2019 and how to apply modern practices to inhance you're carreer</p>
                    </div>
                    <div className='Products-card'>
                        <h1>Wordpress Themes</h1>
                        <p>Learn what's hot in web development in 2019 and how to apply modern practices to inhance you're carreer</p>
                    </div>
                </div>
            </section>
        )
    }

}

export default Products;


