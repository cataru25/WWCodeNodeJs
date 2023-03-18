const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.results.map((item) => `${item.id} ${item.name}`));
    console.log(data.results.length);
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchApi;
