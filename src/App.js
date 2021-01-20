import logo from './logo.svg';
import './App.css';
import SideBar from  './sideBar';
import sample from './sample';
import Header from './Header' ;
import { makeStyles } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

const useStyle = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyle();
  return (
    <>
      <SideBar />
      <div className={classes.appMain}>
      <Header />
      </div>
      <CssBaseline /> 
    </>
  );
}

export default App;
