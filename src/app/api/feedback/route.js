import { connect } from "@/app/lib/dbConnect";

const feedbackConnection = connect("feedbackDB");
export async function GET(request) {
  const result = await feedbackConnection.find().toArray();

  return Response.json(result);
}
export async function POST(request) {
  const { massage } = await request.json();
  if (!massage || typeof massage !== "string") {
    return Response.json({
      status: 400,
      massage: "Please send a massage",
    });
  }

  const newFeedBack = { massage, date: new Date().toISOString() };

  const result = await feedbackConnection.insertOne(newFeedBack);

  return Response.json(result);
}
