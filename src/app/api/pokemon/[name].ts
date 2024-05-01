import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { load } from 'cheerio'; // Assuming Cheerio is installed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const url = `https://bulbapedia.bulbagarden.net/wiki/${name}`;

  try {
    const response = await axios.get(url);
    const htmlContent = response.data;
    const $ = load(htmlContent);

    const description = $('#mw-content-text .mw-parser-output p:first-of-type').text().trim();
    console.log('Description:', description);

    res.status(200).json({ description });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
