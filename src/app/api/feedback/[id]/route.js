import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const feedbackConnection = connect("feedbackDB");

export async function GET(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      massage: "Send correct _id",
    });
  }

  const query = { _id: new ObjectId(id) };

  const result = await feedbackConnection.findOne(query);

  return Response.json(result);
}

// Delete Method

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      massage: "Send correct _id",
    });
  }

  const query = { _id: new ObjectId(id) };

  const result = await feedbackConnection.deleteOne(query);

  return Response.json(result);
}
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { massage } = await request.json();
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      massage: "Send correct _id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      massage,
    },
  };

  const result = await feedbackConnection.updateOne(query, newData);
  revalidatePath("/feedbacks");

  return Response.json(result);
}
