"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const openLogin = () => {
    router.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== reEnterPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userData = {
      email,
      password,
      name,
      age,
      bloodGroup,
      weight,
    };

    const signUpAPI=""

    try {
      const response = await fetch(signUpAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        response
          .json()
          .then((data) => {
            // Redirect or handle successful signup
            //router.push("/login");
          })
          .catch((error) => {
            console.error("Error parsing JSON response:", error);
          });
      } else {
        response
          .json()
          .then((data) => {
            const errorMessage = data.message;
            setError(errorMessage);
          })
          .catch((error) => {
            console.error("Error parsing JSON response:", error);
          });
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center h-[100vh] items-center gap-5 bg-[#2B3137] rounded p-1 lg:p-4 ">
        <h1 className="block text-white text-3xl lg:text-4xl mb-2 font-bold">
          Sign Up
        </h1>
        <div>
          {error && (
            <div className="flex justify-center items-center h-10">
              <p className="font-bold text-red-500 ml-5">{error}</p>
            </div>
          )}

          <p className="text-white text-lg">Email</p>
          <input
            type="email"
            className="w-[300px] h-10 text-lg p-1 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="text-white text-lg">Password</p>
          <input
            type="password"
            className="rounded w-[300px] text-lg h-10 p-1 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="text-white text-lg">Re-enter Password</p>
          <input
            type="password"
            className="rounded w-[300px] text-lg h-10 p-1 text-black"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="text-white text-lg">Name</p>
          <input
            type="text"
            className="rounded w-[300px] text-lg h-10 p-1 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-white text-lg">Age</p>
          <input
            type="text"
            className="rounded w-[300px] text-lg h-10 p-1 text-black"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
  
        <div>
          <p className="text-white text-lg">Blood Group</p>
          <input
            type="text"
            className="rounded w-[300px] text-lg h-10 p-1 text-black"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div>
          <p className="text-white text-lg">Weight</p>
          <input
            type="text"
            className="rounded w-[300px] text-lg h-10 p-1 text-black"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#d66e6e] h-10 text-lg mt-10 px-[70px] py-1 lg:px-16 rounded text-white"
        >
          Sign up
        </button>

      
      </div>
    </>
  );
}
