import { Button } from '../ui/Button';

export const HeroSection = () => {
  const handleVolunteerClick = () => {
    const element = document.querySelector('#volunteer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Shows first on mobile */}
          <div className="rounded-lg overflow-hidden shadow-lg md:order-2">
            <img
              src={`${import.meta.env.BASE_URL}images/emma.png`}
              alt="Student learning"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content - Shows second on mobile */}
          <div className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md md:order-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 leading-tight">
              "Knowledge has no barriers — every child deserves the chance to learn. Together, we can break down barriers and create a brighter future for all."
            </h1>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleVolunteerClick}
              >
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
