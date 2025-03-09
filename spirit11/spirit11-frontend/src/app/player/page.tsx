"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../components/ui/footer";// Adjust the path as necessary
import { User } from 'lucide-react';
import NavBar from "../components/ui/navbar";

const categories = [
  'Player',
  'Selection',
  'Team',
  'Leaderboard',
  'Budget'
];
export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <NavBar/>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-600">Player’s Profile</h1>
          </div>

          {/* Profile Card */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-60 flex items-center justify-center relative bg-blue-200">
              <div className="absolute -bottom-12">
                <Image src="/images.jpeg" alt="Profile" width={80} height={80} className="h-40 w-40 rounded-full object-cover" />
              </div>
            </div>
            <div className="flex p-10 pt-20">
              <div className="w-1/2 text-left">
                <h2 className="text-2xl font-semibold pb-4">Chamika Chandimal</h2>
                <p className="text-lg text-gray-600 leading-relaxed"><strong>University:</strong><br /> University of the Visual & Performing Arts</p>
                <p className="text-lg text-gray-600 leading-relaxed"><strong>Category:</strong><br /> Batsman</p>
                <p className="text-lg text-gray-600 leading-relaxed"><strong>Total runs:</strong><br /> 530 </p>
              </div>
              <div className="w-px bg-white mx-10 pr-20"></div>
              <div className="w-1/2 text-right pr-20 flex flex-col justify-end">
                <p className="text-left text-lg text-gray-600"><strong>Balls Faced:</strong><br /> 588</p>
                <p className="text-left text-lg text-gray-600"><strong>Innings Played:</strong> <br />10</p>
                <p className="text-left text-lg text-gray-600"><strong>Wickets:</strong><br /> 0</p>
                <p className="text-left text-lg text-gray-600"><strong>Overs Bowled:</strong><br /> 3</p>
              </div>
            </div>
            
            <div className="p-8 flex justify-end">
              <button className="px-10 py-4 bg-gray-300 text-gray-700 rounded-lg">BACK</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
