'use client';

import { TooltipProvider } from '@/components/ui/tooltip';

export default function TooltipProviders({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}