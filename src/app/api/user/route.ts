import { NextRequest } from "next/server"

export async function GET(req: NextRequest){
    console.log('get request')
    return new Response(JSON.stringify({name: 'alapottra'}), {status: 200})
}

export async function POST(req: NextRequest){
    const body = await req.json()
    console.log(body)

    return new Response('OK')

}