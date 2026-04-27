import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>,
);

// function TempName() {
//   return (
//     <main>
//       <div>
//         <img src="react-logo.png" alt="" width={"40px"} />
//       </div>
//       <br />
//       <div>
//         <h1>Fun Facts About React</h1>
//         <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walker</li>
//           <li>Has well over 100K stars on GitHub</li>
//           <li>Is maintained by Meta</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//       </div>
//     </main>
//   );
// }
