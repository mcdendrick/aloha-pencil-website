"use client";
import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <Image
              src="/aloha-pencil-logo.png"
              alt="Aloha Pencil Company"
              width={400}
              height={400}
              className="w-full max-w-md shadow-xl mb-8"
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-8">Our Craftsmen</h2>
            <p className="text-green-700 mb-12">
              Our team consists of skilled artisans who carefully select and craft Hawaiian woods into fine writing instruments.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="/ocean-view.jpg"
                alt="Hawaiian Landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Zac Moffat</h3>
                <p className="text-green-700">
                  Owner and craftsman Zach grew up in Laie, Hawaii and lives on the island of Oahu, 
                  and has decades of experience working with native Hawaiian woods such as 
                  Koa, Mango and Kamani.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 