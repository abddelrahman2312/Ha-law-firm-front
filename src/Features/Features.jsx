import React from "react";
import "./features.css";
export default function Features() {
  return (
    <>
      <div className="features-section">
        <h1 className="features-title">المميزات</h1>
        <p className="features-description">
          نقدم مجموعة من المميزات لتعزيز تجربتك
        </p>
      </div>
      <div className="features">
        <div className="features-container">
          <h2>الخبره</h2>
          <p>خبره اكثر من 23 سنه</p>
        </div>
        <div className="features-container">
          <h2>الثقه</h2>
          <p>عملنا مع اكثر من 400 عميل</p>
        </div>
        <div className="features-container">
          <h2>السرعه</h2>
          <p>نقدم اسرع الاستشارات والحلول</p>
        </div>
      </div>
    </>
  );
}
