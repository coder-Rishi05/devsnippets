import MainLayout from "../layouts/MainLayout";
import Main from "./Main";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <Main />
    </MainLayout>
  );
};

export default HomePage;
