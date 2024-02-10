import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
const App = () => {
  // const name = "Muhammad Saifur Rizal";
  // const isSingle = false;

  // const renderStatus = (status) => {
  //   if (status) {
  //     return <h3>Saya Sudah Menikah</h3>;
  //   }
  //   return <h3>Saya Belum Menikah</h3>;
  // };
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Footer />
      {/* <h1>Halo {name}</h1>
      {isSingle ? <h3>Saya Sudah Menikah</h3> : <h3>Saya Belum Menikah</h3>}
      {renderStatus(isSingle)} */}
    </div>
  );
};

export default App;
