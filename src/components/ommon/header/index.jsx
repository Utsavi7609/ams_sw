import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <div>
              <a href="https://www.flaticon.com/authors/mayor-icons" title="Mayor Icons"></a>
              <a href="https://www.flaticon.com/" title="Flaticon"></a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcElEQVR4nO2ZT2zbVBzH3y7AhMSJv4IjZxgqXf+stE1YEntjk+pHxV/BkRMHLnCj0/OSai1tSbtStTTlsHRt06RtsjSx0/GvjGlDsLFqHWItSMsEVYo4bN0kvw320HOJ5aZ28uw6akD9Sh8psp+d38f+2e+lBWAn/9NAjJ6DWOyDWLwiKOiWCkaLEKPeFoyeBZWat0nbA4IihgRF/BtikRhB9wmK+CkdW9ZiWm+1PQ6xGICK+GP+KqqfMfIfWvM/tmk86doNFfGMWeEGIvNlk4BYfE0t2PzL117G6NUNxyhomLV4DUUcdLx4AaPXoYLulf5ydC8vQXu+WNsUa6cWJ58J2jb06looYI22k4DRcctXH/97DoyCjgmoPW+9iKMQo5+M9h1e6iHu4TGVQ8vdZgKLjgkICrpkuQj1ITe+a/SY5mBUxR0aM72LwDmBzYWUKoIes0WBG9stcINOWEbF0TtGj6EcXu4xE7hc1hYqVYSgoIt0hrX7EEOMepwTwMhvowCxFR/dY/c1CrH/GccE1FeihdcoVNDNlrW2R1V5BQ3ZEBgATodOTqwTmYDFVwrWQfMWiv+KI8H7HRfISxS9Ewq6qS9eL0GXBwyLuYGyFa9vJzpJCYp4If+qpJ9pz+fbxix0eUBnWPqGWV8Iqsdehlj82NGeN0rV6uiBqtXw9ef/CJNyoZ5/NcyDYiFk18H2zAd1CxN3q1dGSfXK6Bk2gZx6cmKLHDtVuRNZsxq4E6mHvH1S7ED7HNl77aQGk0D176PENr9ZAxikKZLc4xlJLvv6JEIFapfGNZgE9mZPEttcswYoSKM085ZrMn7b89ksyQvULU5oMAnU/DpGtsQv7MCCN1STPEPc0QTRC9RfnNRgEqi9Ok7MeOS9YVvU/jxuCGQQaDgX1WASqLsyQcywK6BvAz2QQeCF+ZgGm8BChBhRvxCxLVB/KWIIZBBoPD2twSRQf2GSmGFXYN8Pk4ZABoHm1IwGk8C+76LEDNsC56OGQAYB10xCg0mg4WyUGBOzLdDwbcwQyCDgjpzSYBLQPzTWmNrI16WBDAL7w0kNJoHGL6aII3yuZ9oQwDCReUIpDSaBpsw0cQS5NIBhKeEdSGswCeif+i0xWxrAsJjjgrIGm0A8fr05ESd6XHaJFyVbtBBCdvH+0+/zHfJdvjND+A75GyYB91SCd8USWddUgtjBrSdmjCuayL4Yi3NgO2L1hzuotMD/vIBi7Z8YoBLjCSVrPCMpohFKXd0/Mru0cVuyBlRqPEOpUe9QmuTxDKbf8Q6l3i3YFgaVGN9g+glvv4R9n0hEpT+da+2K7PZ0yg/6+tN/6rbfOThw6klQafEF00e4XoloBKUPtX29cifXK5M8vqB8BFRSWtsi9/m65RWuWyYUX5d8+6WPvnw4v58Lpp7iu6Q7fLdM1pFyXDBV3r/AWQnXIb/Jd9BZcR3uWOb4pjHH5ImNY6Q3QKWED2TO0/UJhQ/M/eUNSE8XjuECc9X5Meq49rnvt6fanewElMo/PlVWrrcmgG4AAAAASUVORK5CYII="></img> */}
            {/* <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/000000/movie-projector.png"
              
              alt="movie-projector"
            /> */}
            <span className="ml-3 text-xl font-bold tracking-wide bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">TIAMS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Schedule</a>
            <a className="mr-5 hover:text-white">Book Ticket</a>
            <a className="mr-5 hover:text-white">cancel ticket</a>
            <a className="mr-5 hover:text-white">More</a>
          </nav>
          <button style={{ color: ' #34deeb' }} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mr-2">
            REGISTER
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button style={{ color: '#34eba4' }}  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            LOGIN
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
