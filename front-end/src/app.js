import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import RestroantMenu from "../components/RestorantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => {
  return import("../components/Grocery");
});

// const restoData = [

//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "KFC",
//   deliveryTime: "15-20 minutes",
//   cuisine: "Fast food, Chicken wings",
//   priceforTwo: 5000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Al Baik Fast Food",
//   deliveryTime: "30-40 minutes",
//   cuisine: "Burger, Pizza, Chicken Swarma",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Magic Chicken",
//   deliveryTime: "20-28 minutes",
//   cuisine: "Chicken Biryani, Mutton Biryani",
//   priceforTwo: 6000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Hydrabad Hunt",
//   deliveryTime: "40-50 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 7000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },
//   {
//   name: "Meghna Foods",
//   deliveryTime: "30-40 minutes",
//   cuisine: "South Indian, Biryani",
//   priceforTwo: 4000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s"
// },

// ]
//Nav Component

//restorantCard Coponent

//Body Component

//main Component that Render Everything
const App = () => {
  return (
    <div className="main-Container">
      <Header />
      <Outlet />
    </div>
  );

  /* Header
   -NavBar
    -Logo, Menu Links 
*/

  /* Body
   -Search Input, Button
   -Heading, Filter
   -Restorant Card
     -Card Image
     -title, Delivery Time,
     -Type of food they Offer, Price For Two or One
     -View More or Explore

*/
  /* footer*/
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restorant/:restroId", element: <RestroantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = document.getElementById("root");

let main = ReactDOM.createRoot(root);

main.render(<RouterProvider router={appRouter} />);
