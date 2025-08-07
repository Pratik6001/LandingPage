import React from "react";
import img1 from "../../assets/gallery/51b8ac75072a008e4436aad85c0de3ef7e045a10.jpg";
import img2 from "../../assets/gallery/a89e99325d5e2f8096252ed2a2c788dcc26293677.jpg";
import img3 from "../../assets/gallery/cf73073447e6ea7bbd8dec8b7b23ec59a551d075.jpg";
import img4 from "../../assets/gallery/dab4b837a0d0d6d20ed1c6333cb0c08732515cf2.jpg";
import img5 from "../../assets/gallery/a89e99325d5e2f8096252ed2a2c788dcc2629367.jpg";
import img6 from "../../assets/gallery/c02ab6c9402cd374af6ab350a42fcfabfe485954.jpg";
import img7 from "../../assets/gallery/705f03c999cf9339978086343f1d0cefa2e0a6da.jpg";
import img8 from "../../assets/gallery/8f1a5b8e169f4818add73b93c625cfa07ccaa2cb.jpg";

export default function GalleryCard() {
  const rows = [
    { left: img1, right: img2, leftWide: true },
    { left: img3, right: img4, leftWide: false },
    { left: img5, right: img6, leftWide: true },
    { left: img7, right: img8, leftWide: false },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-[300px]"
        >
          <div
            className={`${
              row.leftWide ? "sm:w-2/3" : "sm:w-1/3"
            } w-full h-[200px] sm:h-full overflow-hidden  rounded-md`}
          >
            <img
              src={row.left}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
          <div
            className={`${
              row.leftWide ? "sm:w-1/3" : "sm:w-2/3"
            } w-full h-[200px] sm:h-full overflow-hidden rounded-md`}
          >
            <img
              src={row.right}
              alt=""
              className="w-full h-full object-cover rotate-180"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
