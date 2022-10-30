import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <main className="main">
        <Items />
        <Filter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
