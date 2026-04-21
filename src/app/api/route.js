export const feedback = [
  {
    id: 1,
    massage: "khabar eto tasty kno",
  },
  {
    id: 2,
    massage: "Maler dana pori geche",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    massage: "Yahoo. api created",
  });
}
