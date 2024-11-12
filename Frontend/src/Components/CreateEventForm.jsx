// import React, { useState } from 'react';

// const CreateEventForm = () => {
//   const [imagePreview, setImagePreview] = useState('');

//   const showPreview = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (event) => {
//     const pincode = event.target['event-pincode'].value;
//     const pincodePattern = /^[0-9]{6}$/;
//     if (!pincodePattern.test(pincode)) {
//       alert('Please enter a valid 6-digit pincode.');
//       event.preventDefault();
//     }
//   };

//   return (
//     <main className="container mx-auto px-4 max-w-4xl">
//       <h1 className="text-4xl font-extrabold text-center mb-10">Create Event</h1>

//       <form
//         id="create-event-form"
//         className="space-y-8 bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg backdrop-saturate-150 border border-gray-700"
//         onSubmit={handleSubmit}
//         noValidate
//       >
//         {/* Basic Information & Image Upload Section */}
//         <section className="grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
//           {/* Basic Info */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">Basic Information</h2>

//             <div>
//               <label htmlFor="event-title" className="block text-lg font-medium text-gray-200">
//                 Event Title
//               </label>
//               <input
//                 type="text"
//                 id="event-title"
//                 name="event-title"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Short Description */}
//             <div>
//               <label htmlFor="event-short-description" className="block text-lg font-medium text-gray-200">
//                 Short Description
//               </label>
//               <textarea
//                 id="event-short-description"
//                 name="event-short-description"
//                 rows="2"
//                 maxLength="100"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
//               ></textarea>
//             </div>

//             {/* Detailed Description */}
//             <div>
//               <label htmlFor="event-detailed-description" className="block text-lg font-medium text-gray-200">
//                 Detailed Description
//               </label>
//               <textarea
//                 id="event-detailed-description"
//                 name="event-detailed-description"
//                 rows="6"
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
//               ></textarea>
//             </div>
//           </div>

//           {/* Image Upload */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">Event Image</h2>

//             <label className="block text-lg font-medium text-gray-200">Upload Image</label>
//             <div className="flex flex-col items-center justify-center w-full h-48 rounded-lg bg-gray-700 bg-opacity-80 border-dashed border-2 border-gray-500 text-gray-400 cursor-pointer hover:bg-gray-600 transition-all">
//               <input
//                 type="file"
//                 id="event-image"
//                 name="event-image"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={showPreview}
//               />
//               <label htmlFor="event-image" className="flex flex-col items-center space-y-2 cursor-pointer">
//                 <svg className="w-12 h-12 text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                   <path d="M5 12h14v10h-14v-10zm16-4v4h-3v-4h-10v4h-3v-4h-3v-4h3v-3h14v3h3zm-10 5.003v2.003h2.002v-2.003h2.001v-2h-2.001v-2.002h-2.002v2.002h-2.001v2h2.001zm4.498 4.5h2.001v-2.002h-2.001v2.002zm-2-2.002v-2.002h-2.001v2.002h2.001zm-4.498 0h2.002v-2.002h-2.002v2.002zm4.498 2.502v2.002h2.001v-2.002h-2.001zm-2.498 0v2.002h-2.002v-2.002h2.002z" />
//                 </svg>
//                 <span className="text-base">Click to upload</span>
//               </label>
//             </div>
//             {imagePreview && <img id="image-preview" src={imagePreview} alt="Preview" className="w-full mt-4 rounded-lg" />}
//           </div>
//         </section>

//         {/* Date & Time and Location Section */}
//         <section className="grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">Date & Time</h2>

//             <div>
//               <label htmlFor="event-date" className="block text-lg font-medium text-gray-200">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 id="event-date"
//                 name="event-date"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="event-time" className="block text-lg font-medium text-gray-200">
//                 Time
//               </label>
//               <input
//                 type="time"
//                 id="event-time"
//                 name="event-time"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">Location</h2>

//             <div>
//               <label htmlFor="event-type" className="block text-lg font-medium text-gray-200">
//                 Event Type
//               </label>
//               <select
//                 id="event-type"
//                 name="event-type"
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 <option value="in-person">In Person</option>
//                 <option value="virtual">Virtual</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="event-location" className="block text-lg font-medium text-gray-200">
//                 Location/Link
//               </label>
//               <input
//                 type="text"
//                 id="event-location"
//                 name="event-location"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="event-pincode" className="block text-lg font-medium text-gray-200">
//                 Pincode
//               </label>
//               <input
//                 type="text"
//                 id="event-pincode"
//                 name="event-pincode"
//                 pattern="^[0-9]{6}$"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="Enter 6-digit Pincode"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Capacity & Registration Section */}
//         <section className="space-y-4">
//           <h2 className="text-2xl font-semibold">Capacity & Registration</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="event-capacity" className="block text-lg font-medium text-gray-200">
//                 Maximum Capacity
//               </label>
//               <input
//                 type="number"
//                 id="event-capacity"
//                 name="event-capacity"
//                 min="1"
//                 required
//                 className="mt-1 block w-full rounded-lg bg-gray-700 bg-opacity-80 border-transparent text-white text-base
