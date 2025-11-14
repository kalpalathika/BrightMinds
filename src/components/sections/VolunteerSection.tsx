import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { Checkbox } from '../ui/Checkbox';
import { Button } from '../ui/Button';
import { volunteerSchema, type VolunteerFormData } from '../../utils/validation';

export const VolunteerSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="volunteer" className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Volunteer With Us
        </h2>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700">
            Thank you for volunteering! We'll be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              {...register('firstName')}
              placeholder="First Name"
              error={errors.firstName?.message}
            />
            <Input
              {...register('lastName')}
              placeholder="Last Name"
              error={errors.lastName?.message}
            />
          </div>

          {/* Contact Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              {...register('email')}
              type="email"
              placeholder="Email Address"
              error={errors.email?.message}
            />
            <Input
              {...register('phone')}
              type="tel"
              placeholder="Phone Number"
              error={errors.phone?.message}
            />
          </div>

          {/* Skills and Interests */}
          <TextArea
            {...register('skills')}
            placeholder="Skills and Interests"
            rows={5}
            error={errors.skills?.message}
          />

          {/* Consent Checkbox */}
          <Checkbox
            {...register('consent')}
            label={
              <span>
                I agree to <span className="text-red-600">volunteer</span> and understand that my{' '}
                <span className="underline">information will be used responsibly</span>.
              </span>
            }
            error={errors.consent?.message}
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? 'Submitting...' : 'Sign up to Volunteer'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
