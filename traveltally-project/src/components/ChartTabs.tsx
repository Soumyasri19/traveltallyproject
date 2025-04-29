
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DailyBreakdownChart from '@/components/DailyBreakdownChart';
import PerPersonCost from '@/components/PerPersonCost';
import { Currency } from '@/utils/currencyUtils';

interface BudgetFormData {
  travelers: number;
  days: number;
  foodCostPerDay: number;
  travelCostPerPerson: number;
  accommodationCostPerNight: number;
  miscCostTotal: number;
}

interface ChartTabsProps {
  totalBudget: number;
  budgetData: BudgetFormData | null;
  selectedCurrency: Currency;
}

const ChartTabs: React.FC<ChartTabsProps> = ({ 
  totalBudget, 
  budgetData, 
  selectedCurrency 
}) => {
  return (
    <Tabs defaultValue="daily" className="mb-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="daily">Daily Breakdown</TabsTrigger>
        <TabsTrigger value="perPerson">Per Person Cost</TabsTrigger>
      </TabsList>
      
      <TabsContent value="daily" className="mt-4">
        <DailyBreakdownChart 
          budgetData={budgetData} 
          selectedCurrency={selectedCurrency} 
        />
      </TabsContent>
      
      <TabsContent value="perPerson" className="mt-4">
        <PerPersonCost 
          totalBudget={totalBudget} 
          budgetData={budgetData} 
          selectedCurrency={selectedCurrency} 
        />
      </TabsContent>
    </Tabs>
  );
};

export default ChartTabs;
