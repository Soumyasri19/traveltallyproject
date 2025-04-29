
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Currency, formatCurrency } from '@/utils/currencyUtils';

interface BudgetFormData {
  travelers: number;
  days: number;
  foodCostPerDay: number;
  travelCostPerPerson: number;
  accommodationCostPerNight: number;
  miscCostTotal: number;
}

interface PerPersonCostProps {
  totalBudget: number;
  budgetData: BudgetFormData | null;
  selectedCurrency: Currency;
}

const PerPersonCost: React.FC<PerPersonCostProps> = ({ 
  totalBudget, 
  budgetData, 
  selectedCurrency 
}) => {
  if (!budgetData) return null;

  const totalPerPerson = totalBudget / budgetData.travelers;
  const foodCostPerPerson = budgetData.foodCostPerDay * budgetData.days;
  const travelCostPerPerson = budgetData.travelCostPerPerson;
  const accommodationCostPerPerson = budgetData.accommodationCostPerNight * budgetData.days / budgetData.travelers;
  const miscCostPerPerson = budgetData.miscCostTotal / budgetData.travelers;

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Cost Per Person</CardTitle>
        <CardDescription>Breakdown of costs per traveler</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Cost Per Person</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-budget-primary">
                {formatCurrency(totalPerPerson, selectedCurrency)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Food Cost (entire trip)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl">
                {formatCurrency(foodCostPerPerson, selectedCurrency)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Travel Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl">
                {formatCurrency(travelCostPerPerson, selectedCurrency)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Accommodation (per person)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl">
                {formatCurrency(accommodationCostPerPerson, selectedCurrency)}
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerPersonCost;
