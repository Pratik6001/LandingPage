// import React from "react";
// import NewsCard from "../utils/cards/NewsCard";
// export default function News() {
//   return (
//     <div className=" flex gap-6 space-y-6">
//       <div className=" space-y-12">
//         <h1 className="  flex items-start gap-4 text-4xl  font-semibold">
//           Tala <span className=" ">In</span>{" "}
//           <span className=" font-bold ">News</span>
//         </h1>
//         <NewsCard />
//       </div>
//     </div>
//   );
// }
import React from "react";
import NewsCard from "../utils/cards/NewsCard";

export default function News() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-12 bg-black text-white">
      <div className=" mx-auto space-y-12">
        <h1 className="text-3xl sm:text-4xl font-bold flex flex-wrap items-start gap-2">
          Tala <span className="font-normal">In</span>{" "}
          <span className="font-bold">News</span>
        </h1>
        <NewsCard />
      </div>
    </div>
  );
}
