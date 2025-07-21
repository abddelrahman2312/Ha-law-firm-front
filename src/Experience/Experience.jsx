import React from "react";
import me from "../assets/me.jpg";
import "./experience.css";
export default function Experience() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>تعريف</h1>
      <div className="experience" id="about">
        <div className="experience-content">
          <img src={me} alt="" />
          <div className="experience-text">
            <p>
              أعمل محاميًا للشركات ومحاميًا مؤسسيًا مؤهلًا، ولديّ اكثر من 24
              عامًا من الخبرة المهنية، ومسار ناجح للعمل بكفاءة في الشؤون
              القانونية والتقاضي. أتمتع بخبرة في جميع أنواع العقود متعددة
              التخصصات. تشمل مجالات تخصصي مجموعة واسعة من المسائل القانونية
              والإدارية، بالإضافة إلى تأسيس الشركات بمختلف أنواعها
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
