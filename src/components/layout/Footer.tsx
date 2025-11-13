export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-auto">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} BrightMinds • help@brightminds.org
          </p>
        </div>
      </div>
    </footer>
  );
};
