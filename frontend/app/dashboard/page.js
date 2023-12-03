"use client"
import React, { useEffect, useState } from 'react';
import AddBloodBank from '../Components/AddBloodBank';
import DonateBlood from '../Components/DonateBlood';
import { useRouter } from "next/navigation";

const Page = () => {
  //const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const [isBloodBankModalVisible, setIsBloodBankModalVisible] = useState(false);
  const [isBloodTypeModalVisible, setIsBloodTypeModalVisible] = useState(false);

  const showBloodBankModal = () => {
    setIsBloodBankModalVisible(true);
  };

  const showBloodTypeModal = () => {
    setIsBloodTypeModalVisible(true);
  };

  const handleCancel = () => {
    setIsBloodBankModalVisible(false);
    setIsBloodTypeModalVisible(false);
  };

  const handleLogout=()=>{
    router.push("/")
  }


  const userData = {
    email: "john.doe@example.com",
    password: "********", // You may not want to display the password
    name: "John Doe",
    age: 30,
    bloodGroup: "A+",
    weight: 70,
  };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('your-backend-api-endpoint');

//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data);
//         } else {
//           const errorData = await response.json();
//           setError(errorData.message);
//         }
//       } catch (error) {
//         setError('An error occurred while fetching user data.');
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

  return (
    <>
      <div className="container mx-auto mt-14">
        <div className="max-w-screen-xl mx-auto p-6 bg-gray-700 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray active:bg-gray-800"
            >
              Logout
            </button>
          </div>

          <div className="bg-gray-500 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">User Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-white font-bold text-lg">Email:</p>
                <p className="text-gray-800 text-lg font-semibold">{userData.email}</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Password:</p>
                <p className="text-gray-800 text-lg font-semibold">********</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Name:</p>
                <p className="text-gray-800 text-lg  font-semibold">{userData.name}</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Age:</p>
                <p className="text-gray-800 text-lg font-semibold">{userData.age}</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Blood Group:</p>
                <p className="text-gray-800 text-lg font-semibold">{userData.bloodGroup}</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Weight:</p>
                <p className="text-gray-800 text-lg font-semibold">{userData.weight} kg</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex justify-evenly mt-24">
            <button
            onClick={showBloodBankModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              + Add Blood Bank
            </button>
            <button
              onClick={showBloodTypeModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800"
            >
              Donate Blood
            </button>
          </div>

          <AddBloodBank
        visible={isBloodBankModalVisible}
        onClose={handleCancel}
      />
      <DonateBlood visible={isBloodTypeModalVisible}
      onClose={handleCancel}/>
      </div>
    </>
  );
};

export default Page;
