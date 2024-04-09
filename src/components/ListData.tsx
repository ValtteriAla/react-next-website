'use client'
import type { Country } from "../../lib/types";
import { useState, useEffect } from "react";
import { getCountries } from "../../lib/api";

export default function ListCountryData(data: any) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  if (isLoading) return (<p>Loading...</p>)
  if (!countries) return (<p>No data.</p>)

  return countries.map((obj: Country) => (
    <li className="ml-6 list-disc" key={obj.name.common}>
      {obj.name.common}
    </li>
  ));
}
