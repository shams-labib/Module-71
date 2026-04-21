"use client";
import React from "react";

const FeedBackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const massage = e.target.massage.value;

    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ massage }),
    });

    const data = await res.json(); // ✅ FIX

    if (data.insertedId) {
      alert("success");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 text-center ">
        <textarea
          required
          name="massage"
          className="w-xl border border-dashed p-3"
          cols="30"
          rows="10"
        ></textarea>
        <hr />
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedBackForm;
