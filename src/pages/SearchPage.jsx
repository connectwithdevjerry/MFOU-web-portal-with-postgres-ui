import { Search, Navbar } from "../components";

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <div className="block-search">
        <Search />
      </div>
    </>
  );
};

export default SearchPage;
