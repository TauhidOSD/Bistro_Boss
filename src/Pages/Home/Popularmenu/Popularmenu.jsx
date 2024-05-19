// import { useEffect, useState } from "react";
import MenuItem from "../../Shared/Footer/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const Popularmenu = () => {
  
    const [menu] =useMenu();
    const populer =menu.filter(item => item.category == 'popular');
    // const [menu,setMenu] =useState([]);

    // useEffect ( () => {
    //     fetch('menu.json')
    //     .then(res =>res.json ())
    //     .then(data => {
            
    //         const popularItem =data.filter(item =>item.category === 'popular')
    //         setMenu(popularItem)})
    // },[] )
    return (
        <section className="mb-12">
             <div className='md:w-4/12 mx-auto text-center my-8'>
            <h2 className='text-yellow-600 mb-2'>--- From Our Menu ---</h2>
            <p className='text-3xl uppercase border-y-4 py-4'>Populer Items</p>
            </div>
            <div className="grid md: grid-cols-2 gap-10">
                {
                    populer.map(item=> <MenuItem  
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
         <div className="text-center">
         <button className="btn btn-outline border-0 border-b-4   mt-4">View Full Menu</button>

         </div>
        </section>
    );
};

export default Popularmenu;