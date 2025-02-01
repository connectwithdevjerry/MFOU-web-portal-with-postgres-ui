import { useState } from "react";
import { Filter, MapSection, Navbar } from "../components";
import { ENDPOINTS } from "../../paths";
import axios from "axios";

const Map = () => {
  const [showFilter, setShowFilter] = useState({
    plots: true,
    buildings: true,
    blocks: true,
    blocksBoundColor: "blue",
    plotsBoundColor: "#000",
    buildingsBoundColor: "green",
    searchBoundColor: "yellow",
    conditionBoundColor: "white",
    close: false,
    condition: "all",
    showSearchResults: true,
  });

  const [showFilterBox, setShowFilterBox] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({
    blockNumber: "",
    plotNumber: "",
  });

  const handleSearch = () => {
    axios
      .get(ENDPOINTS.GETPLOTSEARCH, { params: { ...selectedOptions } })
      .then((response) => {
        setSearchResult(response.data.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          alert("No plot found!");
          setSearchResult({});
        }
      });
  };

  return (
    <div className="map-wrapper">
      <Navbar />
      <MapSection
        showFilter={showFilter}
        setShowFilterBox={setShowFilterBox}
        searchResult={searchResult}
      />
      {showFilterBox && (
        <Filter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          handleSearch={handleSearch}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </div>
  );
};

export default Map;
