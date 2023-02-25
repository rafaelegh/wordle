import HelpIcon from '@mui/icons-material/Help';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import { useStore } from '../../Context/Store';

function NavBar(props) {

  const { setOpenStatitics, dark } = useStore();

  return (
    <div className="navbar flex w-100 justify-between items-center py-5 text-black dark:bg-dark2 dark:text-white bg-navbar	rounded-2xl	my-20">
      <div className='ml-6'>
        <HelpIcon
          color="action"
          sx={{ fontSize: 27, color: `${dark ? "#DADCE0" : "#818181" }`}}
          onClick={() => {
            props.help(true);
          }}
        />
      </div>
      <h1 className="text-title">WORDLE</h1>
      <div className='flex items-center dark:text-white'>
        <AnalyticsIcon
          sx={{ fontSize: 32, color: `${dark ? "#FFF" : "#818181"}` }}
          onClick={() => {
            setOpenStatitics(true);
          }}
        />
        <DarkModeSwitch />
      </div>
    </div>
  );
}

export default NavBar;
