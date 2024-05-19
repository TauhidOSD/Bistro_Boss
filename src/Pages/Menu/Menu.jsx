import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Footer/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import desserImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
    const [menu]=useMenu();
    const desserts =menu.filter(item =>item.category === 'dessert');
    const soup =menu.filter(item => item.category === 'soup');
    const salad =menu.filter(item => item.category === 'salad');
    const pizza =menu.filter(item =>item.category === 'pizza');
    const offered =menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" ></Cover>
            {/* main cover */}
            <div className='md:w-4/12 mx-auto text-center my-8'>
            <h2 className='text-yellow-600 mb-2'>--- Don't Miss ---</h2>
            <p className='text-3xl uppercase border-y-4 py-4'>today's offer</p>
            </div>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title ='Dessert' img={desserImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;