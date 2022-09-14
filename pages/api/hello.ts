// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { load } from "cheerio";
import request from "request-promise";
import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  request(
    `https://soundcloud.com/${req.query["q"]}/likes`,
    (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const HTML = load(html);

        res.status(200).json(html);
      }
    }
  );
}
