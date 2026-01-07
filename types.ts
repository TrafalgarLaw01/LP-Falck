
// Fix: Added missing React import to provide access to the React namespace for types like ReactNode.
import React from 'react';

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
