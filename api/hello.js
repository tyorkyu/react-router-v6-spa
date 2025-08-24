export function GET(request) {
    console.log(request);
    return Response.json({
        name: '/api/get',
        des: 'api'
    });
}