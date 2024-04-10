
'use client'
import type { Country } from "../../../lib/types";
import { useState, useEffect } from "react";
import { getCountries } from "../../../lib/api";
import TopNavigation from "@/components/TopNav";
import Footer from "@/components/Footer";
import RootLayout from "../layout";

export default function Page() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCountries(["name"])
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!countries) return <p>Country not found</p>;
  /*
  return country.map((obj: Country) => (
    <li className="ml-6 list-disc" key={obj.name.common}>
      {obj.name.common}
    </li>
  ));
  */
  console.log(countries[0]);
  const countryLinks = countries.map((obj: Country) => (
    <a className="max-w-32" key={obj.name.common} href={`/countries/${obj.name.common}`}>{obj.name.common}</a>))

  return (
 
    <div className="page-container">
      <main className="main-content">
        <div className="grid grid-cols-6 m-10">
          {countryLinks}
        </div>
        
      </main>

    </div>
 
  );
}