import React from 'react';
import { Card } from '../ui/Card';
import type { ServiceCard as ServiceCardType } from '../../types';

export const ServiceCard: React.FC<ServiceCardType> = ({ title, description, image }) => {
  return (
    <Card hover className="h-full">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
