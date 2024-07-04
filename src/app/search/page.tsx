"use client"

import TabelData from "./TabelData";
import { TiCloudStorage } from "react-icons/ti";
import axios from 'axios';
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  const [data, setData] = useState<any[]>([]);
  const [filterText, setFilterText] = useState<string>('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbwdQddlb-krEXwnb_3vp_r-wQM3Vcl0ZUEx-IiJBzrAxEkTB-6nTNbZGBTETSckAA16/exec')
        setData(response.data.data);
      } catch (error){
        console.error('Error: ', error);
      }
    }
    fetchData();

  }, []);

  return (
    <>
    <SpeedInsights />
    <Analytics />
    <div className="App">
      <div className="flex justify-between items-center mt-28">
        <h1 className="flex items-center text-white md:px-12 px-4 text-4xl font-bold">Cari Data</h1>
      <form className="text-center mb-12 mt-12">
        <input
          type="text"
          placeholder="Cari dengan Name/ID"
          value={filterText}
          onChange={handleFilterChange}
          className="rounded-lg w-5/6 py-4 text-center md:mr-32  outline-none"
        />
      </form>
        </div>
      <TabelData data={data} filterText={filterText} />

    </div>
    <div className="mt-52 text-white font-bold flex justify-center" id="foot">
      <TiCloudStorage className="text-2xl align-center mr-3"/>
      Data Search Perencanaan 2024-2025
    </div>
    </>
  );
};

