import { NextApiResponse, NextApiRequest } from "next";

import templates from "../../../../data/templates.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let { title } = req.query as { title: string };
  title = title.replace(/\%20/g, " ");

  if (!templates[title]) {
    return res.status(404).send(`404: story "${title}" not found`);
  }

  res.status(200).json({
    title,
    ...templates[title],
  });
};
