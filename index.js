addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': '*',
}
const hello = async (request) => {
  const { name } = await request.json()
  return new Response(JSON.stringify(name), {
    headers: {
      'Content-Type': 'text/plain',
      ...corsHeaders,
    },
  })
}


async function handleRequest(request) {

  if (request.method === 'OPTIONS') {
    return new Response('', {
      headers: corsHeaders
    })
  }
  const url = new URL(request.url)

  if (request.method === 'POST') {
    if (url.pathname === '/') {
      return hello(request)
    }
  }
}