import { BsMoonFill } from 'react-icons/bs';
import Head from './components/Head'
import MenuButton from './components/MenuButton';
import Theme from './components/Theme';
import Pages from './pages/Pages';
function App() {
  return (
    <div>
      <Head/>
      <MenuButton/>
      {/* <Theme /> */}
      <Pages/>
    </div>
  );
}
export default App;