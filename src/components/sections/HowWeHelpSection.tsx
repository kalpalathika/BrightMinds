import { ServiceCard } from '../shared/ServiceCard';
import type { ServiceCard as ServiceCardType } from '../../types';

const services: ServiceCardType[] = [
  {
    id: '1',
    title: 'Educational Materials',
    description: 'We provide comprehensive educational materials including books, digital resources, and learning tools to students who lack access to quality education resources.',
    image: `${import.meta.env.BASE_URL}images/service-1.jpg`,
  },
  {
    id: '2',
    title: 'Scholarships and Mentorship',
    description: 'Our scholarship programs and mentorship initiatives help talented students achieve their academic goals and reach their full potential through guidance and financial support.',
    image: `${import.meta.env.BASE_URL}images/service-2.jpg`,
  },
  {
    id: '3',
    title: 'Community Learning Hubs',
    description: 'We establish community learning centers equipped with technology, books, and trained educators to create safe spaces for collaborative learning and growth.',
    image: `${import.meta.env.BASE_URL}images/service-3.jpg`,
  },
  {
    id: '4',
    title: 'Skill Development Workshops',
    description: 'Through hands-on workshops and training programs, we equip students with practical skills and knowledge to prepare them for future careers and opportunities.',
    image: `${import.meta.env.BASE_URL}images/service-4.jpg`,
  },
];

export const HowWeHelpSection = () => {
  return (
    <section id="how-we-help" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How Do We Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
