/* eslint-disable react/jsx-no-comment-textnodes */

import Directory from "./components/directory/directory-component";

const App = () => {
  // eslint-disable-next-line
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  /* this app.js is what holds all of our components in jsx form?
    our next challenge is to create a category-directory. it will house each category hats, sneakers etc
    In the categories directory we will move our array and our categories.map method.
    in the app.js we will return <Categories /> like so and still have the same looking application
*/
  return <Directory categories={categories} />;
};

export default App;
