// faça o log da primeira tec do matan
const list = [
  {
    users: [
      {
        name: "matan",
        tecs: ["react", "node", "next"],
      },
    ],
  },
  {
    users: [
      {
        name: "alpha",
        tecs: ["*"],
      },
    ],
  },
];

const users = list[0].users[0];

console.log(users);

console.log(findFirstTech);
