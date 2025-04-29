
import React, { useState } from 'react';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import { currencies, Currency } from '@/utils/currencyUtils';
import { Country } from '@/utils/countriesData';

interface BudgetFormData {
  travelers: number;
  days: number;
  foodCostPerDay: number;
  travelCostPerPerson: number;
  accommodationCostPerNight: number;
  miscCostTotal: number;
}

const Index = () => {
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [budgetData, setBudgetData] = useState<BudgetFormData | null>(null);
  const [budgetBreakdown, setBudgetBreakdown] = useState({
    food: 0,
    travel: 0,
    accommodation: 0,
    misc: 0
  });
  const [hasCalculated, setHasCalculated] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]); // Now defaults to INR
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleCalculate = (total: number, data: BudgetFormData) => {
    // Calculate the breakdown
    const foodTotal = data.foodCostPerDay * data.travelers * data.days;
    const travelTotal = data.travelCostPerPerson * data.travelers;
    const accommodationTotal = data.accommodationCostPerNight * data.days;
    const miscTotal = data.miscCostTotal;
    
    // Set the total budget
    const totalBudget = foodTotal + travelTotal + accommodationTotal + miscTotal;
    
    setTotalBudget(totalBudget);
    setBudgetData(data);
    setHasCalculated(true);
    
    setBudgetBreakdown({
      food: foodTotal,
      travel: travelTotal,
      accommodation: accommodationTotal,
      misc: miscTotal
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        selectedCurrency={selectedCurrency} 
        onCurrencyChange={handleCurrencyChange}
        selectedCountry={selectedCountry}
        onCountrySelect={handleCountrySelect}
      />
      <MainContent
        selectedCurrency={selectedCurrency}
        selectedCountry={selectedCountry}
        handleCalculate={handleCalculate}
        totalBudget={totalBudget}
        budgetData={budgetData}
        budgetBreakdown={budgetBreakdown}
        hasCalculated={hasCalculated}
      />
    </div>
  );
};

export default Index;
