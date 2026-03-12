import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { WorkoutWeek } from './pages/WorkoutWeek';
import { Header } from './components/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/workout/:routineId',
    element: (
      <Layout>
        <WorkoutWeek />
      </Layout>
    ),
  },
]);
