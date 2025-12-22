import React from "react";
import { SlPicture } from "react-icons/sl";
// import image1 from "../../assets/map.png";

const AddNewProparty = () => {
  return (
    <div className="w-full ">
      {/* 1st section  */}
      <div>
        <h1 className="text-[16px] font-medium my-5 rounded-xl p-5 w-full bg-white">
          {" "}
          Add new proparty
        </h1>
      </div>
      {/* 2nd section  */}
      <div className="bg-white rounded-xl p-5">
        <h1 className="text-2xl font-semibold">Add New Property</h1>
        <h2 className="text-2xl pt-10 font-semibold">Overview</h2>
        <div>
          <h1 className="py-2">
            Property Title <a className="text-red-600">*</a>
          </h1>
          <input
            type="text"
            placeholder="Property title"
            className="input text-sm  w-full"
          />
        </div>
        <div>
          <h1 className="py-2">
            Write about property <a className="text-red-600">*</a>
          </h1>
          <input
            type="text"
            placeholder="Write about property"
            className="input text-sm pt-5 pb-20 w-full"
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-5 py-5">
          {/* 1st input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Category <a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>Apartments</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 2nd input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Listed In <a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>All listing</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 3rd input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Price <a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>Your Price</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 4th input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Yearly Tax Rate<a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>Tax Rate</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
        </div>
      </div>
      {/* 3rd section  */}
      <div className="bg-white rounded-xl mt-5 p-5">
        <h1 className="text-2xl font-semibold">Listing Details</h1>
        <div className="w-full grid  sm:grid-cols-2 gap-5 py-5">
          {/* 1st input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Size in ft <a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>Ex. 3,210 sqft</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 2nd input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Bedrooms <a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>0</option>
              <option>Crimson</option>
              <option>Amber</option> 
              <option>Velvet</option>
            </select>
          </div>
          {/* 3rd input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Bathrooms <a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>0</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 4th input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Kitchens<a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>0</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 5th input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Garages<a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>0</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 6th input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Garage Size<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="Ex. 3,210 sqft"
              className="input w-full"
            />
          </div>
          {/* 7th input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Year Built<a className="text-red-600">*</a>
            </h1>
            <select defaultValue="Pick a color" className="select w-full">
              <option disabled={true}>0</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          {/* 8th input  */}
          <div>
            <h1 className="pb-2 font-medium text-sm">
              Floors No<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="Ex. 3,210 sqft"
              className="input w-full"
            />
          </div>
          {/* 9th input  */}
          <div className=" col-span-2">
            <h1 className="pb-2 font-medium text-sm">
              Description<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="Write about property"
              className="input pt-5 pb-20 w-full"
            />
          </div>
        </div>
      </div>
      {/* 4th section  */}
      <div className="my-5 rounded-xl p-5 bg-white">
        <h1 className="text-2xl pb-8 font-semibold">
          Photo & Video Attachment
        </h1>
        <h2 className="py-2 font-medium text-sm">
          Yearly Tax Rate<a className="text-red-600">*</a>
        </h2>
        {/* 1st  */}
        <div className="sm:flex  gap-5">
          <div className="p-3 px-4 border border-gray-100 rounded-xl w-40">
            <div className="bg-gray-100 flex justify-center rounded-xl p-5 w-32">
              <SlPicture className="text-2xl  text-center rounded-xl  w-full" />
            </div>
          </div>
          {/* 2nd   */}
          <div className="p-3 px-4 mt-5 sm:mt-0 border border-gray-100 rounded-xl w-40">
            <div className="bg-gray-100 flex justify-center rounded-xl p-5 w-32">
              <SlPicture className="text-2xl  text-center rounded-xl  w-full" />
            </div>
          </div>
        </div>
        <button className=" btn mt-5 rounded-xl text-sm font-medium bg-green-400">+Upload File</button>
        <button className=" btn mt-5 rounded-xl text-sm font-medium ml-5 ">Uploadfile.jpg.png.mp4</button>
      </div>
      {/* 5th section  */}
      <div className="bg-white p-5 rounded-xl  " >
         <h1 className="text-2xl pb-8 font-semibold">
          Select Amenities
        </h1>
       <div className=" grid grid-cols-2 sm:grid-cols-5 gap-5" >
        {/* 1st */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]" >A/C Heating</h1>
        </div>
        {/* 2nd */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1 className="text-sm text-[#171C19B2]">Garage</h1>
        </div>
        {/* 3rd */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]" >Swimming Pool</h1>
        </div>
        {/* 4th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]" >Parking</h1>
        </div>
        {/* 5th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Lake View</h1>
        </div>
        {/* 6th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">garden</h1>
        </div>
        {/* 7th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Disabled Access</h1>
        </div>
        {/* 8th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Pet Friendly</h1>
        </div>
        {/* 9th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1 className="text-sm text-[#171C19B2]">Ceiling Height</h1>
        </div>
        {/* 10th  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Outdoor Shower</h1>
        </div>
        {/* 11  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Refrigerator</h1>
        </div>
        {/* 12  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Fireplace</h1>
        </div>
        {/* 13  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Wifi</h1>
        </div>
        {/* 14  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">TV Cable</h1>
        </div>
        {/* 15 */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Barbeque</h1>
        </div>
         {/* 16  */}
          <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Laundry</h1>
        </div>
        {/* 17  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Dryer</h1>
        </div >
        {/* 18  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Lawn</h1>
        </div>
        {/* 19  */}
         <div className="flex gap-2" >
          <input type="checkbox" defaultChecked className="checkbox" />
          <h1  className="text-sm text-[#171C19B2]">Elevator</h1>
        </div>
       </div>
      </div>
      {/* 6th section */}
      <div className=" bg-white mt-5 rounded-xl p-5">
          <h1 className="text-2xl font-semibold">Listing Details</h1>
            <div>
            <h1 className="pb-2 py-2 font-medium text-sm">
                 Address<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="456 Elm Street, Apt 3"
              className="input w-full"
            />
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-4 gap-5">
            {/* 1st  */}
            <div>
            <h1 className="pb-2 py-2 font-medium text-sm">
                 Country<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="USA"
              className="input w-full"
            />
          </div>
          {/* 2nd  */}
          <div>
            <h1 className="pb-2 py-2 font-medium text-sm">
                 State<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="California"
              className="input w-full"
            />
          </div>
          {/* 3rd  */}
          <div>
            <h1 className="pb-2 py-2 font-medium text-sm">
                 City<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="Los Angeles"
              className="input w-full"
            />
          </div>
          {/* 4th  */}
          <div>
            <h1 className="pb-2 py-2 font-medium text-sm">
                 Zip Code<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="90001"
              className="input w-full"
            />
          </div>
          </div>
           <div>
            <h1 className="pb-2 py-2 font-medium text-sm">
                Map Location<a className="text-red-600">*</a>
            </h1>
            <input
              type="text"
              placeholder="Ab125357874541"
              className="input w-full"
            />
          </div>
          {/* <div className="w-full h-full">
            <img src={"image11"} alt="" className=" w-full h-full" />
          </div> */}
      </div>
    </div>
  );
};

export default AddNewProparty;
