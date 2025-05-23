import Image from "next/image";
import { Button } from '@/components/ui/button';

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface Props {
  steps: StepItem[];
  title?: string;
}

const DynamicHowItWorks = ({ steps, title = "So, how does it work?" }: Props) => {
  return (
    <section id="how-it-works" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border relative"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicHowItWorks;
