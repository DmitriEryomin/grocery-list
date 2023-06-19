import {NextResponse, NextRequest} from 'next/server';

import clientPromise from '../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const tasks = client.db('gojilabs').collection('groceries');
    const groceries = await tasks.find().toArray();

    return NextResponse.json({groceries}, {status: 200});
  } catch (error) {
    return NextResponse.json('Something went wrong!', {status: 500});
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const collection = client.db('gojilabs').collection('groceries');

    const grocery = await request.json();
    await collection.insertOne(grocery);

    return NextResponse.json({ok: true}, {status: 200});
  } catch (error) {
    return NextResponse.json('Something went wrong!', {status: 500});
  }
}
