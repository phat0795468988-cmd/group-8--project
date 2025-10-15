let users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };