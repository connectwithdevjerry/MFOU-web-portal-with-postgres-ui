import proj4 from "proj4";

export const utmToWGS84 = (pol, zone = 32) => {
  const geographic = "EPSG:4326";
  const utmProjection = `+proj=utm +zone=${zone} +datum=WGS84 +ellps=WGS84 +k=0.9996 +x_0=500000 +y_0=0 +units=m +no_defs`;

  const converted = pol.map((p) => {
    let val = p;
    if (p.x) {
      val = [p.x, p.y];
    }
    const [easting, northing] = val;
    const [latitude, longitude] = proj4(utmProjection, geographic, [
      easting,
      northing,
    ]);
    return [longitude, latitude];
  });
  return converted;
};
