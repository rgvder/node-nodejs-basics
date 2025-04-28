const parseArgs = () => {
  const result = process.argv.reduce((res, item, index, array) => {
    const value = array[index + 1];

    if (item.startsWith('--') && value) {
      res.push(`${item.slice(2)} is ${value}`);
    }

    return res;
  }, []).join(', ');

  console.log(result);
};

parseArgs();
