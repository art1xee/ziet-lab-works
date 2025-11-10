export async function getCabins() {
  return [
    {
      id: 1,
      name: "001",
      maxCapacity: 2,
      regularPrice: 250,
      discount: 0,
      image: "/cabin-001.jpg",
    },
    {
      id: 2,
      name: "002",
      maxCapacity: 4,
      regularPrice: 350,
      discount: 50,
      image: "/cabin-002.jpg",
    },
    {
      id: 3,
      name: "003",
      maxCapacity: 6,
      regularPrice: 450,
      discount: 100,
      image: "/cabin-003.jpg",
    },
  ];
}

export async function getCabin(id) {
  const cabins = await getCabins();
  return cabins.find((cabin) => cabin.id === parseInt(id, 10));
}
