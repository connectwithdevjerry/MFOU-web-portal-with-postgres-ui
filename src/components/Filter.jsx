import { useState } from "react";

const Filter = ({
  setShowFilter,
  showFilter,
  handleSearch,
  selectedOptions,
  setSelectedOptions,
}) => {
  const searchDisabled =
    !selectedOptions.blockNumber || !selectedOptions.plotNumber;

  return (
    <div className="filter-wrapper">
      <div
        className="checkbox-wrapper"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <h3>Filters</h3>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: showFilter.close ? "#589ee0" : "red",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onClick={() =>
            setShowFilter({ ...showFilter, close: !showFilter.close })
          }
        >
          {showFilter.close ? "^" : "x"}
        </button>
      </div>
      {!showFilter.close && (
        <>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="checkbox-wrapper">
              <input
                type="number"
                value={selectedOptions.blockNumber}
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectedOptions,
                    blockNumber: e.target.value,
                  })
                }
                name=""
                placeholder="Block"
              />
              <input
                type="number"
                value={selectedOptions.plotNumber}
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectedOptions,
                    plotNumber: e.target.value,
                  })
                }
                name=""
                placeholder="Plot"
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "green", color: "#fff" }}
              onClick={handleSearch}
              disabled={searchDisabled}
            >
              Search
            </button>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          />
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="all"
              name="condition"
              checked={showFilter.condition === "all"}
              value="all"
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="commercial">All</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="unoccupied"
              name="condition"
              checked={showFilter.unoccupied}
              value="unoccupied"
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="unoccupied">Unoccupied</label>
          </div>

          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="commercial"
              name="condition"
              value="commercial"
              checked={showFilter.condition === "commercial"}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="commercial">Commercial</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="residential"
              name="condition"
              value="residential"
              checked={showFilter.condition === "residential"}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="residential">Residential</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="institutional"
              name="condition"
              value="Institution"
              checked={showFilter.condition === "Institution"}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="institutional">Institutional</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="transportation"
              name="condition"
              value="Transportat"
              checked={showFilter.condition === "Transportat"}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="transportation">Transportational</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="radio"
              id="public"
              name="condition"
              value="Public Spac"
              checked={showFilter.condition === "Public Spac"}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  condition: e.target.value,
                })
              }
            />
            <label htmlFor="public">Public Space</label>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          />
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="checkbox"
              id="showSearchResults"
              name="showSearchResults"
              checked={showFilter.showSearchResults}
              value={showFilter.showSearchResults}
              onChange={() =>
                setShowFilter({
                  ...showFilter,
                  showSearchResults: !showFilter.showSearchResults,
                })
              }
            />
            <label htmlFor="showSearchResults">Show Search</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="checkbox"
              id="showBuildings"
              name="showBuildings"
              checked={showFilter.buildings}
              value={showFilter.buildings}
              onChange={() =>
                setShowFilter({
                  ...showFilter,
                  buildings: !showFilter.buildings,
                })
              }
            />
            <label htmlFor="showBuildings">Show Buildings</label>
          </div>

          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="checkbox"
              id="showPlots"
              name="showPlots"
              checked={showFilter.plots}
              value={showFilter.plots}
              onChange={() =>
                setShowFilter({ ...showFilter, plots: !showFilter.plots })
              }
            />
            <label htmlFor="showPlots">Show Plots</label>
          </div>

          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="checkbox"
              id="showBlocks"
              name="showBlocks"
              checked={showFilter.blocks}
              value={showFilter.blocks}
              onChange={() =>
                setShowFilter({ ...showFilter, blocks: !showFilter.blocks })
              }
            />
            <label htmlFor="showBlocks">Show Blocks</label>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#000",
              margin: "10px 0",
            }}
          />
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="color"
              id="buildingsColor"
              name="buildingsColor"
              value={showFilter.buildingsBoundColor}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  buildingsBoundColor: e.target.value,
                })
              }
            />
            <label htmlFor="buildingsColor">Buildings Color</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="color"
              id="plotsColor"
              name="plotsColor"
              checked={showFilter.plotsBoundColor}
              value={showFilter.plotsBoundColor}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  plotsBoundColor: e.target.value,
                })
              }
            />
            <label htmlFor="plotsColor">Plots Color</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              className="filterInput"
              type="color"
              id="blocksColor"
              name="blocksColor"
              value={showFilter.blocksBoundColor}
              onChange={(e) =>
                setShowFilter({
                  ...showFilter,
                  blocksBoundColor: e.target.value,
                })
              }
            />
            <label htmlFor="blocksColor">Blocks Color</label>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
