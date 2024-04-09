export async function getCountries(fields: Array<string> = []) {
  let query = "https://restcountries.com/v3.1/all";

  if (fields) {
    query = `https://restcountries.com/v3.1/all?fields=`;
    fields.forEach((field) => {
      query += field + ",";
    });
  }

  const res = await fetch(query);

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}

export async function getCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}
