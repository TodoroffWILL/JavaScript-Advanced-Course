const processListCommands = () => {
  let collection = [];

  return {
    add: (str) => {
      collection.push(str);
    },
    remove: (str) => {
      collection = collection.filter((item) => item !== str);
    },
    print: () => {
      console.log(collection.join(','));
    },
  };
};

const processCommands = (input) => {
  const commands = processListCommands();
  input.forEach((line) => {
    const tokens = line.split(' ');
    const command = tokens[0];
    switch (command) {
      case 'add':
        commands.add(tokens[1]);
        break;
      case 'remove':
        commands.remove(tokens[1]);
        break;
      case 'print':
        commands.print();
        break;
    }
  });
};
const input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
