
import Favorites from "./components/Favorites/Favorites";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Modal/Modal";
import Search from "./components/Search/Search";
import { useGlobalContext } from "./Context";

function App() {
  const {showModal,favorites}=useGlobalContext()
  return (
    <>
    <Search/>
    {
      
   favorites.length>0 && <Favorites/>
    }
    <Meals/>
{
  showModal && <Modal/>
}
    </>
  );
}

export default App;
