import { Navbar } from "../components";

const About = () => {
  return (
    <div
      className="map-wrapper cus"
    >
      <Navbar />
      <main className="container mx-auto px-6 py-12 mt-16 flex col-about">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About My Project
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            This project’s aim therefore is to provide an automated Land
            Information System that integrates both spatial and non-spatial
            attributes accessed through a web portal. Real-time checks on the
            position of the land parcel on the ground will also be provided for
            through an algorithm that converts parcel boundary coordinates into
            KML files capable of providing actual ground location through ArcGIS satellite imagery.
          </p>
        </section>

        <section className="text-center mt-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
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
