'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { user } from '@nextui-org/react';
const ScheduleSection = () => {
  const router = useRouter();
  const center = {
    lat: 32.774678231491606, // Your latitude
    lng: -96.82203693078834, // Your longitude
  };

  const mapStyles = {
    height: '400px',
    width: '100%',
    borderRadius: '0.5rem',
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      '_blank'
    );
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-neutral-light/5">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-neutral-dark">
          <h1 className="mb-8 text-5xl font-bold text-primary">Run Schedule</h1>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            >
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="space-y-4 mt-4">
            <div className="p-4 border-l-4 border-secondary bg-white shadow-md">
              <h3 className="font-bold text-lg">Tuesday Evening Run</h3>
              <p className="text-neutral">7:00 AM - All levels welcome</p>
            </div>

            <button
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-200 w-full"
              onClick={handleGetDirections}
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
