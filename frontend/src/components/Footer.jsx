function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-white text-lg font-bold">Company Name</h2>
            <p className="mt-2 text-gray-400 text-sm">
              Making job hunting and hiring easier, faster, and smarter.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-white text-lg font-bold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/signup=" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-white text-lg font-bold">Contact Us</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400 text-sm">Email: info@company.com</li>
              <li className="text-gray-400 text-sm">Phone: +123 456 7890</li>
              <li className="text-gray-400 text-sm">
                Address: 123 Business Street, City, Country
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.92 0 .385.044.76.128 1.122-4.087-.205-7.713-2.164-10.141-5.144-.424.728-.666 1.574-.666 2.476 0 1.708.87 3.216 2.188 4.099-.809-.026-1.57-.248-2.233-.616v.062c0 2.385 1.697 4.374 3.946 4.828-.414.112-.849.171-1.296.171-.317 0-.626-.03-.927-.086.626 1.956 2.444 3.379 4.6 3.421-1.68 1.318-3.808 2.105-6.115 2.105-.397 0-.79-.023-1.177-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.001-7.504 14.001-14.001 0-.213-.005-.425-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c-5.456 0-9.837 4.391-9.837 9.837 0 4.354 2.693 8.065 6.439 9.301.471.087.642-.205.642-.455 0-.224-.008-.815-.013-1.599-2.62.57-3.168-1.261-3.168-1.261-.428-1.085-1.045-1.374-1.045-1.374-.854-.584.065-.573.065-.573.945.067 1.441.97 1.441.97.839 1.438 2.203 1.023 2.739.782.085-.608.329-1.024.598-1.26-2.09-.239-4.288-1.045-4.288-4.648 0-1.027.369-1.866.975-2.525-.097-.239-.423-1.204.092-2.51 0 0 .8-.256 2.623.965.76-.211 1.574-.317 2.382-.321.807.004 1.621.11 2.382.321 1.822-1.222 2.621-.965 2.621-.965.517 1.306.191 2.271.095 2.51.609.659.975 1.498.975 2.525 0 3.614-2.202 4.405-4.296 4.637.339.292.641.868.641 1.749 0 1.262-.011 2.281-.011 2.593 0 .253.17.545.648.453 3.748-1.24 6.44-4.952 6.44-9.306 0-5.446-4.39-9.837-9.837-9.837z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.54 6.462a7.84 7.84 0 01-2.266.619 3.954 3.954 0 001.735-2.188 7.867 7.867 0 01-2.504.956A3.934 3.934 0 0016.33 5c-2.18 0-3.946 1.765-3.946 3.942 0 .309.036.608.104.897-3.278-.164-6.183-1.735-8.124-4.122-.34.58-.534 1.256-.534 1.977 0 1.365.696 2.571 1.754 3.277a3.914 3.914 0 01-1.789-.495v.05c0 1.906 1.357 3.498 3.159 3.858-.33.091-.678.14-1.037.14-.254 0-.5-.025-.742-.071.501 1.562 1.953 2.699 3.676 2.732a7.887 7.887 0 01-4.878 1.682c-.317 0-.63-.017-.94-.054a11.11 11.11 0 006.032 1.768c7.236 0 11.194-5.993 11.194-11.195 0-.17-.002-.34-.01-.508a7.96 7.96 0 001.957-2.032z" />
            </svg>
          </a>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
