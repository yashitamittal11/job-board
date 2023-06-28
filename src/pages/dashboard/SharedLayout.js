import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <h2>Shared</h2>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;