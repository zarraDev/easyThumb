import { Check, Star, X } from "lucide-react";
import { useState } from "react";

type PricingPlan = {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: {
    isAvaible: boolean;
    text: string;
  }[];
  featured?: boolean;
};

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");

  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: {
        monthly: 0,
        annually: 0,
      },
      description: "Perfect to try out EasyThumb with basic features.",
      features: [
        { isAvaible: true, text: "Low resolution (720p)" },
        { isAvaible: false, text: "Save thumbnail history" },
        { isAvaible: false, text: "Remove watermark" },
        { isAvaible: false, text: "Priority support" },
        { isAvaible: false, text: "Commercial use" },
      ],
    },
    {
      name: "Pro",
      price: {
        monthly: 20,
        annually: 15,
      },
      description: "For creators who want more power and flexibility.",
      features: [
        { isAvaible: true, text: "High resolution (1080p)" },
        { isAvaible: true, text: "Save thumbnail history" },
        { isAvaible: true, text: "Remove watermark" },
        { isAvaible: true, text: "Priority support" },
        { isAvaible: false, text: "Commercial use" },
      ],
      featured: true,
    },
    {
      name: "Plus",
      price: {
        monthly: 50,
        annually: 40,
      },
      description: "Best for teams and professionals with advanced needs.",
      features: [
        { isAvaible: true, text: "Ultra HD (4K) thumbnails" },
        { isAvaible: true, text: "Unlimited thumbnail history" },
        { isAvaible: true, text: "Remove watermark" },
        { isAvaible: true, text: "Priority support" },
        { isAvaible: true, text: "Commercial use" },
      ],
    },
  ];

  return (
    <section>
      <div className="py-2 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Designed for business teams like yours
          </h1>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Choose the plan that fits your needs. Upgrade anytime as your creative journey grows!
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                billingCycle === "monthly"
                  ? "bg-sky-500 text-white border-sky-500"
                  : "bg-white text-black border-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annually")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                billingCycle === "annually"
                  ? "bg-sky-500 text-white border-sky-500"
                  : "bg-white text-black border-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white ${
                plan.featured ? "border-2 border-sky-500 dark:border-sky-500" : ""
              }`}
            >
              {plan.featured && (
                <div className="flex justify-center mb-2">
                  <span className="bg-sky-100 text-sky-500 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-500 flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Most popular
                  </span>
                </div>
              )}
              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <div className="my-4 space-y-2">
                <p className="text-4xl font-extrabold">
                    $
                  {billingCycle === "annually" ? plan.price.annually : plan.price.monthly}
                  <span className="ml-1 text-base font-normal text-gray-500 dark:text-gray-400">
                    /mo
                  </span>
                </p>
                {billingCycle === "annually" && (
                    <p className="text-xl font-extrabold">
                        $
                      {billingCycle === "annually" ? plan.price.annually*12 : plan.price.monthly*12}
                      <span className="ml-1 text-base font-normal text-gray-500 dark:text-gray-400">
                        /year
                      </span>
                    </p>
                )}
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>

              {billingCycle === "monthly" && (
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-4">
                <button
                  onClick={()=>setBillingCycle("annually")}
                  className="text-sky-600 dark:text-sky-500 hover:underline font-medium inline-flex items-center"
                >
                  Go to annually plan
                  <svg
                    className="w-4 h-4 ml-1 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </p>
              ) }

              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    {feature.isAvaible ? (
                      <Check className="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400 mt-1" />
                    ) : (
                      <X className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-600" />
                    )}
                    <span className={feature.isAvaible ? "" : "line-through text-gray-400 dark:text-gray-600"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`text-white focus:ring-4 focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900 ${
                  plan.featured ? "bg-sky-400 hover:bg-sky-500" : "bg-sky-600 hover:bg-sky-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}