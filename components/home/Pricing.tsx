import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "19",
    description: "Perfect for beginners and individuals",
    features: [
      "10,000 words per month",
      "10 AI image generations",
      "5 code snippets per day",
      "Basic templates",
      "Email support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "49",
    description: "Ideal for professionals and small teams",
    features: [
      "50,000 words per month",
      "100 AI image generations",
      "Unlimited code snippets",
      "Advanced templates",
      "Priority support",
      "API access",
      "Team collaboration (up to 3 members)"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For businesses with advanced needs",
    features: [
      "Unlimited words",
      "Unlimited AI image generations",
      "Unlimited code snippets",
      "Custom templates",
      "24/7 priority support",
      "Advanced API access",
      "Team collaboration (unlimited)",
      "Custom branding",
      "Advanced analytics"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Pricing.
            </h2>
            <p className="text-lg text-muted-foreground">
              Safe Payment: Use Stripe or Credit Card.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl overflow-hidden border ${
                plan.popular ? "border-blue-500 shadow-xl" : "border-border shadow-sm"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <a
                  href="https://oneaikit.com/login"
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" 
                      : "bg-blue-500 hover:bg-blue-600"
                  } inline-block text-center py-3 px-6 rounded-lg text-white font-semibold transition duration-300`}
                >
                  {plan.cta}
                </a>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;