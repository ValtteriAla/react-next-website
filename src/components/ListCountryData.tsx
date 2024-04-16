"use client";
import type { Country } from "../../lib/types";
import { useState, useEffect } from "react";
import { getCountry } from "../../lib/api";


export default function ListCountryData() {
  const [country, setCountry] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    const country = window.location.href.split("/").pop() ?? ""
    console.log(country)

    getCountry(country)
      .then((data) => {
        setCountry(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  if (isLoading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>
  /*
  return country.map((obj: Country) => (
    <li className="ml-6 list-disc" key={obj.name.common}>
      {obj.name.common}
    </li>
  ));
  */

  return country.map((obj: Country) => (
    <div key={obj.name.common}>
    <p>Name: {obj.name.common}</p>
    <p>flag: {obj.flag}</p>
    <p>region: {obj.region}</p>
    <p>currencies:</p>
    <ul className='list-disc ml-10'>
      {Object.values(obj.currencies).map((value) => (
        <li key={value.name}>{value.name}</li>))}
    </ul>
    </div>
  ))
}
