import { NextApiRequest } from "next";
import data from "../../../data/task-data.json";

export async function POST(req:NextApiRequest) {
    const apiUrl = 'https://testd5-img.azurewebsites.net/api/imgdownload';
    const { api_secret } = data;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({api:api_secret}), 
      });
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: response.status });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
  }