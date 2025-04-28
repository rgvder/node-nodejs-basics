const parseEnv = () => {
  const result = Object.entries(process.env).reduce((res, item) => {
    if (item[0].startsWith('RSS_')) {
      res.push(`${item[0]}=${item[1]}`);
    }

    return res;
  }, []).join('; ');

  console.log(result);
};

parseEnv();
