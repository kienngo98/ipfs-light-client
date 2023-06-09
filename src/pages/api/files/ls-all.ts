// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FilePath, fetchFilePaths } from "@/utils/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FilePath[]>
) {
  const files: FilePath[] = await fetchFilePaths();
  res.json(files);
}
