"use client";   
import React from 'react';
import Layout from '@/components/Layout';
export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Contact Us</h1>
          <div className="max-w-2xl">
            <p className="text-lg text-green-700 mb-8">
              We&apos;d love to hear from you. Get in touch with us for any questions 
              about our products or services.
            </p>
            {/* Add your contact form or contact information here */}
          </div>
        </div>
      </div>
    </Layout>
  );
}