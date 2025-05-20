// components/StepNavigation.tsx
import React from 'react';

interface StepNavigationProps {
  steps: { id: number; label: string }[];
  currentStep: number;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ steps, currentStep }) => (
  <div className="grid grid-cols-6 gap-4 mb-6">
    {steps.map(({ id, label }) => (
      <div key={id} className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            id <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          {id + 1}
        </div>
        <span className="mt-2 text-xs text-center">{label}</span>
      </div>
    ))}
  </div>
);

export default StepNavigation;
