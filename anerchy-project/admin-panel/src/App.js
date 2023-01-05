import './styles/styles.css';
import './styles/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import ContentWrapper from './components/ContentWrapper';
import Select from 'react-select';


function App(){
  return (
    <>
      <Navbar />
      <ContentWrapper title = "Blog posts" />
    </>);
}

export default App;
