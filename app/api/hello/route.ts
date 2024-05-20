import { NextRequest, NextResponse } from "next/server";

export const ALICE = { 
    'pseudo': "Alice",
    'password': "MiamLesPommes",
    'phone': "0611332022"
} 

export async function GET (request: NextRequest){
    
    return NextResponse.json(ALICE);
}

