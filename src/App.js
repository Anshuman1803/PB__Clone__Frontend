import './App.css';
import AppRouter from './Router/AppRouter';
import HeaderComponent from './UI-Components/HeaderComponent';

function App() {
  return (
    <>
    <HeaderComponent/>
    <AppRouter/>
   <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  );
}

export default App;
