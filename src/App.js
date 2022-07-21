import Footer from "./components/footer/footer";
import Header from "./components/Header/Header"
import AboutList from "./components/main/about/AboutList";
import Disain from "./components/main/disain/Disain";
import Moreinformation from "./components/main/moreinfirmation/moreinformation";
import Onlinemagasin from "./components/main/onlinemagasin/onlinemagasin";
import Production from "./components/main/production/production";
import StepDeveloper from "./components/main/stepDeveloper/stepDeveloper";



const App = () => (
  <>
    <Header />
    <AboutList />
    <Disain />
    <StepDeveloper />
    <Onlinemagasin />
    <Moreinformation />
    <Production />
    <Footer />

  </>
);

export default App;