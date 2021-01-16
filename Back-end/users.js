const users = [];

const addUser = ({ id, name, room }) => {
  //ajoute un utilisateur d'ID "id", de nom "name" dans la salle "room"
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);
  //vérificateur pour doublons d'utilisateurs

  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is already taken.' };

  const user = { id, name, room };
  //si l'utilisateur est nouveau, alors il est créer

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  //supprime un utilisateur grace à son ID
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);
//récupère l'utilisateur d'ID id

const getUsersInRoom = (room) => users.filter((user) => user.room === room);
//récupère tous les utilisateurs présents dans une salle

module.exports = { addUser, removeUser, getUser, getUsersInRoom };