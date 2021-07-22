const getSessionData = async (date) => {
  const year = date.format('YYYY');
  const month = date.format('MM');
  const url = `http://localhost:3000/api/sessions/group/${year}/${month}`;
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

export default getSessionData;
