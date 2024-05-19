import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <div className="md:w-4/12 mx-auto text-center my-8">
        <h2 className="text-yellow-600 mb-2">--- Check it out ---</h2>
        <p className="text-3xl uppercase border-y-4 py-4">Featured item</p>
      </div>
      <div className="flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
      <div >
        <img src={featuredImg} alt="" />
      </div>
      <div className="ml-10">
        <p>Aug 20, 2029</p>
        <p className="uppercase">where can i get some?</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          pariatur nam nihil rem sit incidunt fugiat maxime? Aut facere
          reprehenderit excepturi mollitia, suscipit omnis doloribus blanditiis
          a eius quidem, sequi voluptates. Dolor, eos? Nihil illo optio
          obcaecati est inventore, neque temporibus sint voluptatibus voluptates
          rerum quam voluptatum? Deserunt, exercitationem fugit.
        </p>
        <button className="btn btn-outline border-0 border-b-4  mt-4">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Featured;
