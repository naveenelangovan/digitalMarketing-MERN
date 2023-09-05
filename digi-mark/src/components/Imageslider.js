
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function ImageSlider() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://anviam.com/blog/wp-content/uploads/2022/02/digital-marketing-services-by-mahbub-Osmane-1024x536.jpg",
      },
      {
         url: "https://neilpatel.com/wp-content/uploads/2023/05/Digital_marketing8-700x394.png",
      },
      {
      url: "https://www.workamajig.com/hs-fs/hubfs/undefined-May-31-2023-02-03-15-1698-PM.png?width=624&height=441&name=undefined-May-31-2023-02-03-15-1698-PM.png"},
   ];
   return (
      <div className="img-slide">
         <h3 className="highlight">
            {" "}
           Highlights of the Digital-Marketing
         </h3>
         <SimpleImageSlider
            width={800}
            height={400}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
         <div style = {{ fontSize: "1.5rem" }}>
           {/* {imageNum}. */}
         </div>
      </div>
   );
}