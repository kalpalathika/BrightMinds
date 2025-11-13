import React from 'react';
import type { Testimonial } from '../../types';

export const TestimonialCard: React.FC<Testimonial> = ({ name, quote, illustration }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 w-64 h-64 relative">
        <img
          src={illustration}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
      <p className="text-gray-600 leading-relaxed max-w-md">{quote}</p>
    </div>
  );
};
