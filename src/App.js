import './App.css';
import Calendar from './components/calendar/calendar';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const data = [
    { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1,  },
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 },
    { start_date:'2020-06-8 10:00', end_date:'2020-06-8 18:00', text:'Event 3', id: 3 },
    { start_date:'2020-06-14 3:00', end_date:'2020-06-14 4:00', text:'Event 4', id: 4 },
  ];
  return (
    <>
    <Header />
    <Calendar events={data}/>
    </>
  );
}

export default App;
