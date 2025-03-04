import { Navbar } from "../components";

const About = () => {
  return (
    <div className="map-wrapper cus">
      <Navbar />
      <main className="container mx-auto px-6 py-12 mt-16 flex col-about">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            About My Project
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            This project was carried out by Sur. DIOM Jasper YAM CARTO/TD/42301
            under the supervision of Mr. Paul B. Borisade at the African
            Regional Institute for Geospatial Information Sciences and
            Technology (AFRIGIST), Ile-Ife, Nigeria. This work is submitted as a
            partial fulfillment of the requirements for the award of a
            Technologist Diploma in Geo-information Production and Management
            (GPM).
          </p>
        </section>

        <section className="text-center mt-10">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Project Objectives
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The main objective of this study is to build a comprehensive web
            base land information system integrating Spatial and non-spatial
            attributes to facilitate decision making and information sharing
            within the Mfou Municipality.
          </p>
        </section>

        {/* <section className="text-center mt-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Research questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            How can the cadastre in the Mfou municipality be converted to a
            digital format?
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            How can the database be optimized to ensure proper search for
            cadastre information within the municipality
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            How can the data be access by Mfou Municipality?
          </p>
        </section> */}
      </main>
    </div>
  );
};

export default About;
