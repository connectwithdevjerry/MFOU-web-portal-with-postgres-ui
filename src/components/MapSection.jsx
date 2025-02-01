import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { ENDPOINTS, THIRD_PARTY_API } from "../../paths";
import { utmToWGS84 } from "../utilFunctions";
import PopupBox from "./PopupBox";

const MapSection = ({ showFilter, setShowFilterBox, searchResult }) => {
  const [blocks, setBlocks] = useState([]);
  const [plots, setPlots] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const { arcgisAttribution, arcgisEarthTile, arcgisLabelTile } =
    THIRD_PARTY_API;

  const { GETBLOCKS, GETBUILDINGS, GETPLOTS } = ENDPOINTS;

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

        const allBlocks = myPol.map((pol) => ({
          ...pol,
          coord: utmToWGS84(pol.coord),
        }));
        setBlocks(allBlocks);
      })
      .catch((error) => {
        console.error("Error fetching blocks:", error);
      });

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
          })
        );

        const allPlots = myPol.map((pol) => ({
          ...pol,
          coord: utmToWGS84(pol.coord),
        }));
        setPlots(allPlots);
      })
      .catch((error) => {});

    axios
      .get(GETBUILDINGS)
      .then((response) => {
        const myBuildings = response.data.data.map(({ geometry, id }) => ({
          coord: geometry.coordinates[0][0],
          id,
        }));

        const allBuildings = myBuildings.map((building) => ({
          ...building,
          coord: utmToWGS84(building.coord),
        }));
        setBuildings(allBuildings);
        setShowFilterBox(true);
      })
      .catch((error) => {});
  }, []);

  const [center, setCenter] = useState([3.7962849323381196, 11.63251435351633]);
  const zoom = 17;

  if (!blocks.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "81vh", width: "100%", zIndex: 0 }}
    >
      <TileLayer attribution={arcgisAttribution} url={arcgisEarthTile} />

      {/* Labels overlay */}
      <TileLayer attribution={arcgisAttribution} url={arcgisLabelTile} />
      {showFilter.blocks &&
        blocks.length > 0 &&
        blocks.map((block, ind) => (
          <Polygon
            key={`${block.id}-${ind}`}
            positions={block.coord}
            pathOptions={{
              fillColor: "#fff",
              color: showFilter.blocksBoundColor,
            }}
          >
            <Popup>
              <PopupBox
                name={block.name}
                id={block.id}
                number={block.block_number}
              />
            </Popup>
          </Polygon>
        ))}
      {showFilter.plots &&
        plots.length > 0 &&
        plots.map((plot, ind) => (
          <Polygon
            key={`${plot.id}-${ind}`}
            positions={plot.coord}
            pathOptions={{
              fillColor: "#fff",
              color: showFilter.plotsBoundColor,
            }}
          >
            <Popup>
              <PopupBox
                id={plot.id}
                ccp_number={plot.ccp_number}
                land_use={plot.land_use}
                date_registered={plot.date_registered}
                block_number={plot.block_number}
                surveyor={plot.surveyor}
                plot_owner={plot.plot_owner}
                gender={plot.gender}
                place={plot.place}
                land_tenure={plot.land_tenure}
                plot={true}
              />
            </Popup>
          </Polygon>
        ))}
      {showFilter.buildings &&
        buildings.length > 0 &&
        buildings.map((building, ind) => (
          <Polygon
            key={`${building.id}-${ind}`}
            positions={building.coord}
            pathOptions={{
              fillColor: "#fff",
              color: showFilter.buildingsBoundColor,
            }}
          >
            <Popup>{/* <PopupBox id={building.id} /> */}</Popup>
          </Polygon>
        ))}
      {showFilter.showSearchResults && searchResult.id && (
        <Polygon
          key={searchResult.id}
          positions={utmToWGS84(searchResult.SPATIAL[0][0])}
          pathOptions={{
            fillColor: "#fff",
            color: showFilter.searchBoundColor,
          }}
        >
          <Popup>
            <PopupBox
              id={searchResult.id}
              ccp_number={searchResult.ccp_number}
              land_use={searchResult.land_use}
              date_registered={searchResult.date_registered}
              block_number={searchResult.block_number}
              surveyor={searchResult.surveyor}
              plot_owner={searchResult.plot_owner}
              gender={searchResult.gender}
              place={searchResult.place}
              land_tenure={searchResult.land_tenure}
              plot={true}
            />
          </Popup>
        </Polygon>
      )}
      {showFilter.condition === "unoccupied" &&
        plots.length > 0 &&
        plots
          .filter((plot) => plot.plot_owner == null || plot.plot_owner == "")
          .map((plot, ind) => (
            <Polygon
              key={`${plot.id}-${ind}`}
              positions={plot.coord}
              pathOptions={{
                fillColor: "#fff",
                color: showFilter.conditionBoundColor,
              }}
            >
              <Popup>
                <PopupBox
                  id={plot.id}
                  ccp_number={plot.ccp_number}
                  land_use={plot.land_use}
                  date_registered={plot.date_registered}
                  block_number={plot.block_number}
                  surveyor={plot.surveyor}
                  plot_owner={plot.plot_owner}
                  gender={plot.gender}
                  place={plot.place}
                  land_tenure={plot.land_tenure}
                  plot={true}
                />
              </Popup>
            </Polygon>
          ))}
      {showFilter.condition !== "all" &&
        plots.length > 0 &&
        plots
          .filter(
            (plot) =>
              plot.land_use.toLowerCase().trim() === showFilter.condition
          )
          .map((plot, ind) => (
            <Polygon
              key={`${plot.id}-${ind}`}
              positions={plot.coord}
              pathOptions={{
                fillColor: "#fff",
                color: showFilter.conditionBoundColor,
              }}
            >
              <Popup>
                <PopupBox
                  id={plot.id}
                  ccp_number={plot.ccp_number}
                  land_use={plot.land_use}
                  date_registered={plot.date_registered}
                  block_number={plot.block_number}
                  surveyor={plot.surveyor}
                  plot_owner={plot.plot_owner}
                  gender={plot.gender}
                  place={plot.place}
                  land_tenure={plot.land_tenure}
                  plot={true}
                />
              </Popup>
            </Polygon>
          ))}
    </MapContainer>
  );
};

export default MapSection;
