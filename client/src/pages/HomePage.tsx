import RestaurantsGrid from "../components/home/RestaurantsGrid";

const HomePage = () => {
  return (
    <div className="w-screen p-8">
      <p className="mb-6 text-6xl text-black font-medium">BeatTheQueue</p>
      <p className="mb-12 text-2xl text-gray-800">My own restaurant viewer!</p>
      <RestaurantsGrid />
    </div>
  );
};

export default HomePage;
