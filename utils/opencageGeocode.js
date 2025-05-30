const API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_GEOCODING_API_KEY;

const fromAddress = async (address) => {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.results.length === 0) {
    throw new Error("No results found");
  }

  const { lat, lng } = data.results[0].geometry;
  return { lat, lng };
};

export default { fromAddress };