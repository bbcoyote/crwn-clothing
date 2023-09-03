import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory-component";

const Home = () => {
  // below in our return. Our outlet is our child component in the App.js file. If we put the Outlet below the Directory component the child component will render below the directory component. IE if we were to use a NavBar component we would want the Outlet to be on top. If we had a footer component we would put it below the directory component to keep these components Persistent
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
