export const getEquipment = async () => {
  const response = await fetch(`http://localhost:8088/events`);
  const data = await response.json();
  return data;
};
