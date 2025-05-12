const Footer = () => (
    <footer className="bg-gray-800 text-white text-center p-2">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-2 md:space-y-0">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
      <p className="text-sm mt-4">© {new Date().getFullYear()} Boost Media | Privacy Policy | Terms & Conditions</p>
      <p className="text-xs mt-2">Created by Gulshan Kumia</p>
    </footer>
  );
  
  export default Footer;
  