export function GET(request: Request) {
  return Response.json({
    name: '/api/get',
    des: 'api'
  });
}