import React from 'react';
import { TestimonialCard } from '../shared/TestimonialCard';
import type { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: '2',
    name: 'Emma',
    quote: 'It was a life-changer! With their help, I got into a coding bootcamp I had only dreamed of before. The mentorship and scholarship opened so many doors for me. I\'m forever grateful for this opportunity!',
    illustration: '/images/elian.png',
  },
  {
    id: '1',
    name: 'Elian',
    quote: 'Thanks to this program, I now have access to books and resources I never thought I could afford. Learning has become so much easier, and I feel more confident about my future!',
    illustration: '/images/hero-2.jpg',
  },
];

export const VoicesOfChangeSection: React.FC = () => {
  return (
    <section id="voices" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Voices of Change
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
