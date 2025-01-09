// +page.server.ts
export const load = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const quote = await response.json();

    return {
      quote,
    };
  } catch (error) {
    console.error("Error fetching quote:", error);
    return {
      quote: null,
    };
  }
};
