import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../../lib/mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { locale: string } },
) {
  try {
    const client = await clientPromise;
    const { locale } = params;

    const db = client.db(locale);
    const collection = db.collection('testCollection'); // TODO: Change to your desired collection

    const data = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to fetch data' },
      { status: 500 },
    );
  }
}
