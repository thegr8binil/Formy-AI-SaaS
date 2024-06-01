"use client";
import { useUser } from "@clerk/nextjs";
import { CheckIcon } from "lucide-react";
import React from "react";

function Upgrade() {
  const item = [
    {
      link: "https://buy.stripe.com/5kAdTn64Fd1W1So144",
      price: 249.0,
      priceId: "price_1PMpQ6SDS823yij5JMMLyWMy",
      duration: "Monthly",
    },
  ];
  const includedFeatures = [
    "Unlimited form creation",
    "Unlimited responses",
    "50% faster form loading",
    "Full customization",
  ];
  const { user } = useUser();

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enjoy all the benefits with a straightforward monthly subscription.
            No hidden fees, no long-term commitments. Get full access for just
            one low monthly price.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Monthly Membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Unlock exclusive benefits with a monthly payment of 249₹. Here’s
              what you get every month:
            </p>
            <div className="flex items-center mt-10 gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="flex-auto h-px bg-gray-100" />
            </div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="flex-none w-5 h-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="max-w-xs px-8 mx-auto">
                <p className="text-base font-semibold text-gray-600">
                  Pay monthly, cancel anytime
                </p>
                <p className="flex items-baseline justify-center mt-6 gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    249₹
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    INR
                  </span>
                </p>
                <a
                  href={
                    "https://buy.stripe.com/5kAdTn64Fd1W1So144" +
                    "?prefilled_email=" +
                    user?.primaryEmailAddress.emailAddress
                  }
                  className="block w-full px-3 py-2 mt-10 text-sm font-semibold text-center rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
