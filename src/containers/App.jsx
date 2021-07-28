import React, {useState, useEffect} from 'react'
import '../assets/styles/App.scss'
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Search from '../Components/Search';
import useInitialState from '../hooks/useInitialState';



const API = 'http://localhost:3000/initialState';

const App = () => {
   const intialState = useInitialState(API);
    return(
    <div className="App">
        <Header />
        <Search />
        {intialState.mylist.length > 0 **
        <Categories text="Mi Lista">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
        }

        <Categories text="Tendencias">
            <Carousel>
                {
                    intialState.trends.map(item =>(
                        <CarouselItem key={item.id} {...item} />
                    ))
                    
                }
        </Carousel>
        </Categories>


        <Categories text="Originales">
        <Carousel>
                {
                    intialState.originals.map(item =>(
                        <CarouselItem key={item.id} {...item} />
                    ))
                    
                }
        </Carousel>
        </Categories>

        
        <Footer />,
    </div>
    )
};

export default App;