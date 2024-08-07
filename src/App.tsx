import Header from './components/Header';
import './index.css';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col mt-[80px]'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
