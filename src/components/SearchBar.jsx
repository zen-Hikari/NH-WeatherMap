import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes untuk validasi properti

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [animateSearchBar, setAnimateSearchBar] = useState(false); // State untuk animasi SearchBar

  useEffect(() => {
    setAnimateSearchBar(true); // Mulai animasi saat komponen pertama kali dimuat
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div className="flex sm:flex-wrap justify-center items-center mt-8">
      <form
        onSubmit={handleSubmit}
        className={`flex w-full max-w-lg p-2 bg-gray-700 rounded-xl shadow-xl transition-all duration-1000 ease-in-out ${
          animateSearchBar
            ? "w-full" // Setelah animasi selesai, lebar menjadi normal
            : "w-0" // Dimulai dari ukuran kecil
        }`}
      >
        <input
          type="text"
          className="w-full px-6 py-1 text-lg rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-200 transition duration-1000"
          placeholder="Search for a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-blue-600 px-6 py-3 ml-4 rounded-lg font-semibold hover:bg-gray-200 focus:ring-4 focus:ring-blue-500 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
