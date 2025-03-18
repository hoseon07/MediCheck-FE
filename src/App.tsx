import {QeuryClientProvider, QueryClient} from "react-query";
import './Styles/index.css';
import Router from './router';

function App() {
  const queryClient = new QueryClient();

  return (
    <QeuryClientProvider client={queryClient}>
      <Router />
    </QeuryClientProvider>
  )
}

export default App;