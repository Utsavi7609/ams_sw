import React from 'react'
import Header from '../../components/ommon/header'
import Footer from '../../components/ommon/footer'

// const HomePage = () => {
//   return (
//     <div>
//         <Header />
//         <Footer />
//     </div>
//   )
// }

// export default HomePage
// import React from "react";

// Removed Header, Footer, Pricing imports

// Define inline background image URL
const backgroundImage = "https://www.air.irctc.co.in/assets/img/Air_Home_banner1.webp"; // Placeholder image URL

// Removed CSS import

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "600px",
  width: "1600px",
  contrast: "50",
};

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <header>
        <h1>Header</h1>
      </header> */}

      <section className="text-gray-600 body-font opacity-90" style={divStyle}>
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-6xl text-9xl mb-4 font-medium text-black decoration-solid">
              Welcome
            </h1>
            <p className="mb-8 leading-loose sm:text 3xl text-lg text-white">
              <h2>
                Embark on an adventure through a universe of captivating
                stories. Start exploring and find your perfect binge-worthy
                content now.
              </h2>
            </p>
            <div className="flex w-full justify-center items-end">

              <div className="SearchControls_container__MjY4N">
                <div className="SearchControls_grid__ZmQzN">
                  <div className="SearchControlButton_container__YmNmM SearchControlButton_origin__NzljM" tabindex="-1">
                    <button id="OriginButton" type="button" className="SearchControlButton_searchControlBtn__YTQxZ SearchControlButton_origin__NzljM" aria-label="Flying from: Kolkata (CCU)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width: 1rem; height: 1rem;"><path d="M12 17.25a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5zM12 21a9 9 0 100-18 9 9 0 000 18z"></path></svg><span className="BpkText_bpk-text__MjhhY BpkText_bpk-text--body-default__YzU1M SearchControlButton_value__NTAyZ"><span>Kolkata&nbsp;</span><span dir="auto">(CCU)</span></span>
                    </button>
                  </div>
                  <div className="SearchControls_destinationContainer__NTg1Z">
                    <div className="SearchControls_destinationInput__MGI3N">
                      <div className="SwapButton_container__ZmI4N">
                        <div className="BpkSwapButton_bpk-swap-button__OTA2O">
                          <button type="button" className="BpkSwapButton_bpk-swap-button__button__NGYxZ bpk-swap-button__button--surface-contrast" aria-label="Swap origin and destination" style="transform: rotate(0deg);">
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width: 1rem; height: 1rem;"><path d="M.44 8.56a1.5 1.5 0 010-2.12l4.5-4.5a1.5 1.5 0 012.12 0l4.5 4.5a1.5 1.5 0 01-2.12 2.12L7.5 6.622V19.5a1.5 1.5 0 01-3 0V6.621l-1.94 1.94a1.5 1.5 0 01-2.12 0zm12 6.88a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.12 0l4.5-4.5a1.5 1.5 0 00-2.12-2.12l-1.94 1.939V4.5a1.5 1.5 0 00-3 0v12.879l-1.94-1.94a1.5 1.5 0 00-2.12 0z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div aria-live="polite" className="bpk-aria-live BpkAriaLive_bpk-aria-live--invisible__NDdlZ">
                        </div>
                      </div>
                      <div className="SearchControlButton_container__YmNmM SearchControlButton_destinationButton__YmY2N SearchControlButton_destination__ZGE2N" tabindex="-1">
                        <button id="DestinationButton" type="button" className="SearchControlButton_searchControlBtn__YTQxZ SearchControlButton_destinationButton__YmY2N SearchControlButton_destination__ZGE2N" aria-label="Choose your destination"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width: 1rem; height: 1rem;"><path d="M12 0C6.201 0 1.5 4.367 1.5 9.754v.075a9.27 9.27 0 001.816 5.41 38.398 38.398 0 007.84 8.461 1.339 1.339 0 001.689 0 38.436 38.436 0 007.839-8.46A9.27 9.27 0 0022.5 9.83v-.076C22.5 4.367 17.799 0 12 0zm0 15a4.5 4.5 0 114.5-4.5A4.5 4.5 0 0112 15z"></path></svg><span className="BpkText_bpk-text__MjhhY BpkText_bpk-text--body-default__YzU1M SearchControlButton_placeholder__MzAwM">Choose destination </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="SearchControlButton_container__YmNmM SearchControlButton_datesSearchControlButton__MGVkY SearchControlButton_dates__ZWVkO" tabindex="-1">
                    <button type="button" className="SearchControlButton_searchControlBtn__YTQxZ SearchControlButton_datesSearchControlButton__MGVkY SearchControlButton_dates__ZWVkO" aria-label="Your travel dates: " data-testid="dates-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width: 1rem; height: 1rem;"><path d="M4.5 3a1.5 1.5 0 000 3h15a1.5 1.5 0 000-3zm0 4.5A1.5 1.5 0 003 9v9a3 3 0 003 3h12a3 3 0 003-3V9a1.5 1.5 0 00-1.5-1.5zM9 12c0 1.336-1.616 2.006-2.56 1.06-.946-.944-.276-2.56 1.06-2.56A1.5 1.5 0 019 12zm-3 4.5c0-1.336 1.616-2.006 2.56-1.06.946.944.276 2.56-1.06 2.56A1.5 1.5 0 016 16.5zm7.5-4.5c0 1.336-1.616 2.006-2.56 1.06-.946-.944-.276-2.56 1.06-2.56a1.5 1.5 0 011.5 1.5zm-3 4.5c0-1.336 1.616-2.006 2.56-1.06.946.944.276 2.56-1.06 2.56a1.5 1.5 0 01-1.5-1.5zM18 12c0 1.336-1.616 2.006-2.56 1.06-.946-.944-.276-2.56 1.06-2.56A1.5 1.5 0 0118 12z"></path></svg><span className="BpkText_bpk-text__MjhhY BpkText_bpk-text--body-default__YzU1M SearchControlButton_placeholder__MzAwM">Choose dates</span>
                    </button>
                  </div>
                  <div className="CabinClassTravellerSearchControlGroup_travellerContainer__NzJlM">
                    <div className="SearchControlButton_container__YmNmM SearchControlButton_traveller__ODE5Y" tabindex="-1">
                      <button type="button" className="SearchControlButton_searchControlBtn__YTQxZ SearchControlButton_traveller__ODE5Y" aria-label="Select number of travellers and cabin className" data-testid="traveller-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style="width: 1rem; height: 1rem;"><path d="M9.572 2.082A1.384 1.384 0 009 3.33v5.897A2.792 2.792 0 0012 12a2.791 2.791 0 003-2.774v-5.86a1.435 1.435 0 00-.608-1.285A4.966 4.966 0 0012 1.5a5.122 5.122 0 00-2.428.582zM4.145 16.865A17.3 17.3 0 0112 15a17.608 17.608 0 017.893 1.867A2 2 0 0121 18.75v.75a3.226 3.226 0 01-3 3H6a3.226 3.226 0 01-3-3v-.75a2.073 2.073 0 011.145-1.885z"></path></svg><span className="BpkText_bpk-text__MjhhY BpkText_bpk-text--body-default__YzU1M SearchControlButton_value__NTAyZ">1 Adult</span>
                      </button>
                    </div>
                  </div>
                  <div className="SearchControls_directFlights__ZmMwY">
                    <label className="BpkCheckbox_bpk-checkbox__Mzg1Y BpkCheckbox_bpk-checkbox--white__YTliZ">
                      <input type="checkbox" className="BpkCheckbox_bpk-checkbox__input__ZDJiM BpkCheckbox_bpk-checkbox__input-white__NTQyO" name="prefer-directs" aria-label="Direct flights" aria-invalid="false" data-indeterminate="false"></input>
                      <span className="BpkCheckbox_bpk-checkbox__label__MjJhZ" aria-hidden="true">Direct flights
                      </span>
                    </label>
                  </div>
                  <button type="button" className="BpkButton_bpk-button__OTE4Z BpkButton_bpk-button--large__NTAyN BpkButton_bpk-button--featured__NTk3N SearchControls_desktopCTA__MjcwM" data-testid="desktop-cta">Search
                  </button>
                </div>
                <button type="button" className="BpkButton_bpk-button__OTE4Z BpkButton_bpk-button--large__NTAyN BpkButton_bpk-button--featured__NTk3N SearchControls_mobileCTA__MTk4Y" data-testid="mobile-cta">Search
                </button>
              </div>
            

                    {/* <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                      <label
                        htmlFor="hero-field"
                        className="leading-7 text-sm text-black font-bold"
                      >
                        Search
                      </label>
                      <input
                        type="text"
                        id="hero-field"
                        name="hero-field"
                        placeholder="Type any movie, webseries or tv serial..."
                        className="w-full bg-gray-200 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div> */}
                 <button className="inline-flex text-white bg-gradient-to-r from-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                  Search
                 </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Happy watching ❤️.
            </p>
            <div className="flex">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Component */}
      {/* <section>
        <h2>Pricing Component</h2>
      </section> */}

      <Footer />
      {/* <footer>
        <h3>Footer</h3>
      </footer> */}
    </div>
  );
};

export default HomePage;
