
import React from 'react';
import BudgetCalculator from '@/components/BudgetCalculator';
import BudgetSummary from '@/components/BudgetSummary';
import ChartTabs from '@/components/ChartTabs';
import TopPlaces from '@/components/TopPlaces';
import { Currency } from '@/utils/currencyUtils';
import { Country } from '@/utils/countriesData';
import { getTopPlacesForCountry } from '@/utils/placesData';

interface BudgetFormData {
  travelers: number;
  days: number;
  foodCostPerDay: number;
  travelCostPerPerson: number;
  accommodationCostPerNight: number;
  miscCostTotal: number;
}

interface MainContentProps {
  selectedCurrency: Currency;
  selectedCountry: Country | undefined;
  handleCalculate: (total: number, data: BudgetFormData) => void;
  totalBudget: number;
  budgetData: BudgetFormData | null;
  budgetBreakdown: {
    food: number;
    travel: number;
    accommodation: number;
    misc: number;
  };
  hasCalculated: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  selectedCurrency,
  selectedCountry,
  handleCalculate,
  totalBudget,
  budgetData,
  budgetBreakdown,
  hasCalculated,
}) => {
  // Only get top places if we have a selected country with a code
  const topPlaces = selectedCountry ? getTopPlacesForCountry(selectedCountry.code) : [];
  const countryName = selectedCountry?.name || '';

  return (
    <div className="container max-w-6xl py-4 px-3 md:px-6 mx-auto overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Travel Budget Calculator</h1>
        <p className="text-muted-foreground text-sm md:text-base">Calculate and plan your travel budget based on your expenses.</p>
      </div>
      
      <BudgetCalculator 
        onCalculate={handleCalculate} 
        selectedCurrency={selectedCurrency}
      />
      
      {hasCalculated && (
        <>
          <BudgetSummary 
            totalBudget={totalBudget} 
            budgetBreakdown={budgetBreakdown}
            selectedCurrency={selectedCurrency}
          />
          
          <ChartTabs 
            totalBudget={totalBudget} 
            budgetData={budgetData} 
            selectedCurrency={selectedCurrency} 
          />
        </>
      )}

      {selectedCountry && topPlaces.length > 0 && (
        <TopPlaces places={topPlaces} countryName={countryName} />
      )}
    </div>
  );
};

export default MainContent;
