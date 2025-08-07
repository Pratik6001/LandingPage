// import React from "react";
// import img1 from "../../assets/news/705f03c999cf9339978086343f1d0cefa2e0a6da.jpg";
// import img2 from "../../assets/news/c58c9de62d80ad7b9730d7f210891596c561c0e2.jpg";
// import img3 from "../../assets/news/41060f57f528dd9026fa418a6040afa701b85e98.jpg";
// import img4 from "../../assets/news/ccc523126c1ba7860b178ac839fc449f3dddf6c3.jpg";
// import img5 from "../../assets/news/5f0e84cee65e4d4c4d750e5cfd867ce060c824a5.jpg";
// import img6 from "../../assets/news/40414cf6d1a69af57617aa36f0c83d7c9c567f6c.jpg";
// export default function NewsCard() {
//   return (
//     <div className=" grid grid-cols-3 lg:grid-cols-3  md:grid-cols-2  max-md:grid-cols-2  max-sm:grid-cols-1  gap-8">
//       <div className=" space-y-6">
//         <img className=" rotate-180" src={img1} alt="" />
//         <h1 className="text-xl flex md:text-lg max-md:text-sm items-start font-semibold text-red-600">
//           Encouraging Craftsmanship
//         </h1>{" "}
//         <p className="text-left  text-xs  font-[400] leading-[26px] ">
//           Learning provides the environment and inspiration to create and
//           exhibit that brings people together to build connections to community.
//         </p>
//       </div>
//       <div className=" space-y-6">
//         <img className=" rotate-180" src={img2} alt="" />
//         <h1 className="text-xl flex  md:text-lg max-md:text-sm items-start font-semibold text-red-600">
//           Encouraging Craftsmanship
//         </h1>{" "}
//         <p className="text-left  text-xs  font-[400] leading-[26px] ">
//           Learning provides the environment and inspiration to create and
//           exhibit that brings people together to build connections to community.
//         </p>
//       </div>
//       <div className=" space-y-6">
//         <img className=" rotate-180" src={img3} alt="" />
//         <h1 className="text-xl flex  md:text-lg max-md:text-sm items-start font-semibold text-red-600">
//           Encouraging Craftsmanship
//         </h1>{" "}
//         <p className="text-left  text-xs  font-[400] leading-[26px] ">
//           Learning provides the environment and inspiration to create and
//           exhibit that brings people together to build connections to community.
//         </p>
//       </div>
//       <div className=" space-y-6">
//         <img className=" rotate-180" src={img4} alt="" />
//         <h1 className="text-xl flex  md:text-lg max-md:text-sm items-start font-semibold text-red-600">
//           Encouraging Craftsmanship
//         </h1>{" "}
//         <p className="text-left  text-xs  font-[400] leading-[26px] ">
//           Learning provides the environment and inspiration to create and
//           exhibit that brings people together to build connections to community.
//         </p>
//       </div>
//       <div className=" space-y-6">
//         <img className=" rotate-180" src={img5} alt="" />
//         <h1 className="text-xl flex md:text-lg max-md:text-sm items-start font-semibold text-red-600">
//           Encouraging Craftsmanship
//         </h1>{" "}
//         <p className="text-left  text-xs  font-[400] leading-[26px] ">
//           Learning provides the environment and inspiration to create and
//           exhibit that brings people together to build connections to community.
//         </p>
//       </div>
//       <div className=" space-y-6">
//         <img className=" rotate-180" src={img6} alt="" />
//         <h1 className="text-xl flex md:text-lg max-md:text-sm items-start font-semibold text-red-600">
//           Encouraging Craftsmanship
//         </h1>{" "}
//         <p className="text-left  text-xs  font-[400] leading-[26px] ">
//           Learning provides the environment and inspiration to create and
//           exhibit that brings people together to build connections to community.
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import img1 from "../../assets/news/705f03c999cf9339978086343f1d0cefa2e0a6da.jpg";
import img2 from "../../assets/news/c58c9de62d80ad7b9730d7f210891596c561c0e2.jpg";
import img3 from "../../assets/news/41060f57f528dd9026fa418a6040afa701b85e98.jpg";
import img4 from "../../assets/news/ccc523126c1ba7860b178ac839fc449f3dddf6c3.jpg";
import img5 from "../../assets/news/5f0e84cee65e4d4c4d750e5cfd867ce060c824a5.jpg";
import img6 from "../../assets/news/40414cf6d1a69af57617aa36f0c83d7c9c567f6c.jpg";

const newsData = [
  { image: img1, title: "Encouraging Craftsmanship" },
  { image: img2, title: "Crafts in the Community" },
  { image: img3, title: "Art Meets Heart" },
  { image: img4, title: "Reviving Traditions" },
  { image: img5, title: "The Power of Process" },
  { image: img6, title: "Modern Heritage" },
];

export default function NewsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsData.map((item, index) => (
        <div key={index} className="space-y-4">
          <img
            src={item.image}
            alt={item.title}
            className="rotate-180 w-full rounded-md object-cover"
          />
          <h2 className="text-lg sm:text-xl text-left font-semibold text-red-600">
            {item.title}
          </h2>
          <p className="text-xs text-left text-gray-300 leading-relaxed">
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>
        </div>
      ))}
    </div>
  );
}
