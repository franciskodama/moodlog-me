import Home from './home';
import { currentUser } from '@clerk/nextjs';
import MapPage from './map/page';

const HomePage = async () => {
  const user = await currentUser();

  return <>{user ? <MapPage /> : <Home />}</>;
};
export default HomePage;
