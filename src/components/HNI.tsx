import Link from "next/link";

export default function HNI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-6 text-center">
              Risk Profiling Form For Rakesh Bansal Ventures
            </h1>

            <div className="space-y-6 text-sm sm:text-base text-gray-700">
              {[
                "The fee is annual and payment is 100% advance and under no circumstances Rakesh Bansal Ventures (hereinafter referred to as Advisor) shall be liable for any refund for amount paid by the client.",
                "In case of any cancellation/termination from Client, the amount paid by the client shall be forfeited and Advisor shall not be liable to provide any more services to the client. In case of any cancellation/termination from Advisor, the commercials shall be mutually discussed and agreed for the pending duration of the agreement.",
                "The Client represents that the research advisory shall solely be used for own use and not shared with anyone under any circumstances, whatsoever.",
                "The services will not include portfolio management or any related services relating to sale/purchase of Equities/other financial instruments, the services shall remain pure research advisory based. Specific requests may be entertained and mutually managed among the parties within the scope of the services.",
                "There is no commitment of any profits under the scope of this service. Client has to understand the speculative and dynamic nature of stock market and shall invest/trade based on their own free will, the Advisor shall have no liability of any kind under any circumstances.",
                "Specific requests may be made by client to have one-on-one consultation with Dr. Rakesh Bansal with respect to research advisory. Such requests may be entertained at sole discretion of the Advisor on best effort basis; however, it shall not make the basis of the services rendered within this HNI SUBSCRIPTION MODULE.",
              ].map((text, index) => (
                <p key={index} className="leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-md shadow-inner">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-4">
                Disclaimer!
              </h2>
              <ul className="list-none space-y-3 text-yellow-700 text-sm sm:text-base">
                {[
                  "Investment in securities market is subject to market risks. Read all the related documents carefully before investing.",
                  "We don't guarantee any kind of Profit.",
                  "Stock market involves risk and trade only if are comfortable with risk.",
                  "Please don't trade/invest looking at our performance sheet as Past performance is not the guarantee for future performance.",
                  "Our performance sheet is for our own satisfaction & transparency. You may or may not be able to buy/sell at my recommended price as recommendations are shared in live/ running market and we cannot freeze stock price to help you buying/selling at our recommended price. Our humble request is for you to please trade/invest as per your individual risk appetite.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 bg-gray-50 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                By proceeding, you agree to our terms and conditions.
              </p>
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFESN8PuKA4f8wCUJQZMhFrie1MGh14TK1XbfTIAaxSBt6IQ/viewform"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium 
                rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none outline-none border-none focus:ring-offset-2
                 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105"
              >
                Fill Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
