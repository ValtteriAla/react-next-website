"use client";
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
  //console.log(countries);

  const countriesSorted = countries.sort((a: Country, b: Country) => {
    if (a.name.common > b.name.common) return 1;
    else return 0;
  });

  console.log(countriesSorted);

  let currentLetter = "A";
  let headerInserted = false;

  const countryLinks = countriesSorted.map((obj: Country) => {
    let headerElement = null;
    if (currentLetter === obj.name.common[0]) {
      if (!headerInserted) {
        headerInserted = true;
        headerElement = true;
      }
    } else {
      currentLetter = obj.name.common[0];
      headerInserted = false;
    }

    return (
      <div key={obj.name.common} className={`item ${headerElement ? "header-el" : ""}`}>
        {headerElement && <h1>{currentLetter}</h1>}
        <a
          className="max-w-32"
          
          href={`/countries/${obj.name.common}`}
        >
          {obj.name.common}
        </a>
      </div>
    );
  });

  return (
    <div className="page-container">
      <main className="main-content">
        <div className="test1">
          {countryLinks}
          </div>
      </main>
    </div>
  );
}


