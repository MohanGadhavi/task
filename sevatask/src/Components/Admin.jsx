import React from "react";
import { users } from "../Data/users";
import BarChart from "./BarChart";

export default function Admin() {
  const Newusers = [...users];

  const kKs = users.filter((user) => user.userType == "KK");
  const yuvaks = users.filter((user) => user.userType == "Yuvak");
  console.log(kKs);
  console.log(yuvaks);

  return (
    <>
      <div className="md:w-full">
        <h1 className="text-4xl font-black font-serif">Admin Panel</h1>

        <div className="flex flex-wrap gap-5 mt-10">
          <div className="relative h-10 w-full min-w-[200px]">
            <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quaterly">Quaterly</option>
              <option value="yearly">Yearly</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Time Filter
            </label>
          </div>
          <div className="relative h-10 w-full min-w-[200px]">
            <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value="home">Home</option>
              <option value="outside">Outside</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Place
            </label>
          </div>
        </div>
        {/* <div className="admin-cards  mt-10 h-32 flex justify-center gap-10 ">
          <div>
            <h4>total KK</h4>
            <p>{kKs.length}</p>
          </div>
          <div>
            <h4>KK with Seva</h4>
            <p>{}</p>
          </div>
          <div>
            <h4>Total Hours of Seva</h4>
            <p></p>
          </div>
          <div>
            <h4>Total Yuvaks</h4>
            <p>{}</p>
          </div>
          <div>
            <h4>Total Yuvaks Touched</h4>
            <p>{}</p>
          </div>
        </div> */}

        <div class="admin-cards mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div class="bg-white p-4 rounded shadow">
            <h4>Total KK</h4>
            <p>{45}</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h4>KK with Seva</h4>
            <p>{32}</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h4>Total Hours of Seva</h4>
            <p>{1260} Hrs</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h4>Total Yuvaks</h4>
            <p>{159}</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h4>Total Yuvaks Touched</h4>
            <p>{138}</p>
          </div>
        </div>

        <div className="charts">
          <BarChart />
        </div>
      </div>
    </>
  );
}
