import Entries from "./components/Entries";
import Header from "./components/Header";
import data from "./data";
const entries = data.map((location) => {
  return (
    <Entries
      key={location.id}
      //   src={location.img.src}
      //   alt={location.img.alt}
      //   country={location.country}
      //   dates={location.dates}
      //   mapsLink={location.googleMapsLink}
      //   text={location.text}
      //   title={location.title}
      entry={location}
    />
  );
});
const App = () => {
  return (
    <>
      <Header />
      <main className="main">{entries}</main>
    </>
  );
};

export default App;
