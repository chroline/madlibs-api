import { NextApiResponse } from "next";

import templates from "../../../data/templates.json";

export default (_: never, res: NextApiResponse) => {
  const data = Object.entries(templates);

  const index = Math.floor(Math.random() * data.length);

  res.status(200).json({
    title: data[index][0],
    ...data[index][1],
  });
};
