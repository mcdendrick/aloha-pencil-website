"use client";
import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

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
            <h2 className="text-3xl font-bold text-green-800 mb-8">{t.about.craftsmen}</h2>
            <p className="text-green-700 mb-12">
              {t.about.teamDescription}
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
                <h3 className="text-2xl font-bold text-green-800 mb-4">{t.about.masterCraftsman}</h3>
                <p className="text-green-700">
                  {t.about.craftsmanDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 