
const baseUrl = "https://fakestoreapi.com"

export const fetchData = async (endpoint: string) => {
  const url = baseUrl + endpoint;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("FetchData error:", error);
    throw error;
  }
}

