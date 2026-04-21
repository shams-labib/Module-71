import FeedbackCard from "@/components/cards/FeedBackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "feedbacks",
};

const getFeedbacks = async () => {
  const res = await fetch("http://localhost:3000/api/feedback");

  return res.json();
};

const page = async () => {
  const feedbacks = await getFeedbacks();
  console.log(feedbacks);

  return (
    <div>
      <div className="text-2xl font-bold">
        {" "}
        <span className="text-teal-500">{feedbacks.length}</span> Feedbacks
        Found
      </div>

      <div className="my-5">
        <Link href={"/feedbacks/add"} className="btn ">
          Add Feedback
        </Link>
      </div>

      <div className="my-3 space-y-5">
        {feedbacks.map((item) => (
          <FeedbackCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
