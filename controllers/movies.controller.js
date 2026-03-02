export const MovieIndex = (req, res) => {
  res.send("Get a Moview");
};

export const CreateMovie = (req, res) => {
  console.log(req.body);
  return res.json(req.body);
};

export const UpdateMovie = (req, res) => {
  res.send("Update a movies");
};

export const DeleteMovie = (req, res) => {
  res.send("Delete movie");
};
