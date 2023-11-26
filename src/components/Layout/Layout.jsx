import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <FallingLines
            color="black"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
