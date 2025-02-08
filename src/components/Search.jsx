import { useEffect, useRef, useState } from "react";
import { ENDPOINTS, MY_ROUTES } from "../../paths";
import axios from "axios";
import { utmToWGS84 } from "../utilFunctions";
import { Link } from "react-router";

const Search = () => {
  const { GETBLOCKS, GETPLOTS, GETPLOTSEARCH } = ENDPOINTS;
  const [blocks, setBlocks] = useState([]);
  const [plots, setPlots] = useState([]);
  const [searchResult, setSearchResult] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({
    blockNumber: "",
    plotNumber: "",
  });

  const [disableSearch, setDisableSearch] = useState(false);

  useEffect(() => {
    axios
      .get(GETBLOCKS)
      .then((response) => {
        // setBlocks(response.data);
        const myPol = response.data.data.map(
          ({ geometry, name, block_numb, id }) => ({
            coord: geometry.coordinates[0][0],
            name,
            block_number: block_numb,
            id,
          })
        );
        // console.log({ coord: myPol });
        const allBlocks = myPol.map((pol) => ({
          ...pol,
          coord: utmToWGS84(pol.coord),
        }));
        setBlocks(allBlocks);
      })
      .catch((error) => {
        console.error("Error fetching blocks:", error);
      });

    if (selectedOptions.blockNumber) {
      axios
        .get(GETPLOTS)
        .then((response) => {
          const myPol = response.data.data.map(
            ({
              geometry,
              id,
              Plot_owner,
              land_use,
              surveyor,
              ccp_number,
              date_registered,
              block_number,
              plot_number,
              gender,
              place,
              land_tenure,
            }) => ({
              coord: geometry.coordinates[0][0],
              surveyor,
              land_use,
              ccp_number,
              date_registered,
              plot_owner: Plot_owner,
              block_number,
              id,
              gender,
              place,
              land_tenure,
              plot_number,
            })
          );
          // console.log({ plots: myPol });
          const allPlots = myPol.filter(
            (pol) => pol.block_number === selectedOptions.blockNumber
          );
          setPlots(allPlots);
        })
        .catch((error) => {});
    }
  }, [selectedOptions]);

  console.log({ plots });

  const handleSearch = () => {
    setDisableSearch(true);
    axios
      .get(GETPLOTSEARCH, { params: { ...selectedOptions } })
      .then((response) => {
        console.log("response.data.data", response.data.data);
        setSearchResult(response.data.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          alert("No plot found!");
        }
        setDisableSearch(false);
      });
  };

  console.log(selectedOptions);
  console.log(searchResult);

  return (
    <div className="search-wrapper">
      <h1 className="search-description">
        {`Block ${selectedOptions.blockNumber} / plot ${selectedOptions.plotNumber}
        information`}
      </h1>
      <div>
        <div className="my-search-main">
          <div id="login-form">
            <div>
              <div>
                <input
                  placeholder="Select Blocks"
                  onChange={(e) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      blockNumber: e.target.value,
                    })
                  }
                  min={1}
                  type="number"
                  list="blocksRef"
                />
                <datalist id="blocksRef">
                  {blocks.map((block) => (
                    <option key={block.id}>{block.id}</option>
                  ))}
                </datalist>
              </div>
            </div>
            <div>
              <input
                placeholder="Select Plots"
                type="number"
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectedOptions,
                    plotNumber: e.target.value,
                  })
                }
                min={1}
                list="plotsRef"
              />
              <datalist id="plotsRef" style={{ height: "50vh" }}>
                {plots.map((plot) => (
                  <option key={plot.id}>{plot.plot_number}</option>
                ))}
              </datalist>
            </div>
          </div>
          <button type="submit" onClick={handleSearch} disabled={disableSearch}>
            Search
          </button>
        </div>
        <table className="table">
          <tr className="tr">
            <th className="th">Block No</th>
            <th className="th">Plot No</th>
            <th className="th">Owner</th>
            <th className="th">ccp no</th>
            <th className="th">Land Use</th>
            <th className="th">Date Reg</th>
            <th className="th">Surveyor</th>
            <th className="th">Gender</th>
            <th className="th">Land Rate</th>
            <th className="th">Land Value</th>
            <th className="th">Block Name</th>
            <th className="th">Land Tenure</th>
            <th className="th">Place</th>
          </tr>
          {/* {selectedOptions.blockNumber &&
            selectedOptions.plot &&
            searchResult.map((plot) => ( */}
          <tr key={searchResult.id} className="tr">
            <td value={searchResult.id} className="td">
              {searchResult.block_number}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.plot_number}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.Plot_owner}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.ccp_number}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.land_use}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.date_registered}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.surveyor}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.gender}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.land_rate}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.land_value}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.block_name}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.land_tenure}
            </td>
            <td value={searchResult.id} className="td">
              {searchResult.place}
            </td>
          </tr>
          {/* ))} */}
        </table>
        <Link
          style={{ color: "#fff", fontStyle: "italic", fontWeight: 400 }}
          to={MY_ROUTES.MAP}
        >
          Check parcel location on Map
        </Link>
      </div>
    </div>
  );
};

export default Search;
