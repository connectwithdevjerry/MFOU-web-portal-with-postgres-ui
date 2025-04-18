export const MY_ROUTES = {
  HOME: "/",
  MAP: "/map",
  SEARCH: "/search",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about",
};

const localhost = "http://localhost:5000/spatial";
// const localhost = "https://mfou-web-portal-express.onrender.com/spatial";

export const ENDPOINTS = {
  GETBLOCKS: `${localhost}/blocks`,
  GETPLOTS: `${localhost}/plots`,
  GETBUILDINGS: `${localhost}/buildings`,
  GETPLOTSEARCH: `${localhost}/seachplots`,
};

export const THIRD_PARTY_API = {
  arcgisEarthTile:
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  arcgisLabelTile:
    "https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
  arcgisAttribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
  superbase_project_url: "https://pxqinyelrsonhpremvjc.supabase.co",
  superbase_api_key:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4cWlueWVscnNvbmhwcmVtdmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDY2MzksImV4cCI6MjA1Mzk4MjYzOX0.w79Cpp5ZIyuG5OFptiE7jA_5iP0awRFvYhDvgvfrPAA",
};
