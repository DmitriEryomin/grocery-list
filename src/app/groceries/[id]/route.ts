import {ObjectId} from 'mongodb';
import {NextResponse, NextRequest} from 'next/server';

import clientPromise from '@/app/lib/mongodb';

export async function PUT(
  request: NextRequest,
  context: {params: Record<string, any>}
) {
  try {
    const {
      params: {id},
    } = context;

    const client = await clientPromise;
    const grocery = await request.json();

    const tasks = client.db('gojilabs').collection('groceries');

    await tasks.updateOne({_id: new ObjectId(id)}, {$set: grocery});

    return NextResponse.json({ok: true}, {status: 200});
  } catch (error) {
    return NextResponse.json('Something went wrong!', {status: 500});
  }
}

export async function GET(
  request: NextRequest,
  context: {params: Record<string, any>}
) {
  try {
    const {
      params: {id},
    } = context;

    const client = await clientPromise;
    const tasks = client.db('gojilabs').collection('groceries');

    const [grocery] = await tasks.find({_id: new ObjectId(id)}).toArray();

    return NextResponse.json({grocery}, {status: 200});
  } catch (error) {
    return NextResponse.json('Something went wrong!', {status: 500});
  }
}
