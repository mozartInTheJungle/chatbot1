import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API routes are working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    apiKeyPresent: !!process.env.DEEPSEEK_API_KEY,
  });
}

export async function POST() {
  return NextResponse.json({
    message: 'POST endpoint is working!',
    timestamp: new Date().toISOString(),
  });
} 