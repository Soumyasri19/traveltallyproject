
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Currency, formatCurrency } from '@/utils/currencyUtils';

interface BudgetFormData {
  travelers: number;
  days: number;
  foodCostPerDay: number;
  travelCostPerPerson: number;
  accommodationCostPerNight: number;
  miscCostTotal: number;
}

interface DailyBreakdownChartProps {
  budgetData: BudgetFormData | null;
  selectedCurrency: Currency;
}

const DailyBreakdownChart: React.FC<DailyBreakdownChartProps> = ({ 
  budgetData, 
  selectedCurrency 
}) => {
  const generateDailyData = () => {
    if (!budgetData) return [];
    
    const dailyFoodCost = budgetData.foodCostPerDay * budgetData.travelers;
    const dailyAccommodationCost = budgetData.accommodationCostPerNight;
    const dailyMiscCost = budgetData.miscCostTotal / budgetData.days;
    const dailyTravelCost = (budgetData.travelCostPerPerson * budgetData.travelers) / budgetData.days;
    
    return Array.from({ length: budgetData.days }, (_, i) => ({
      day: `Day ${i + 1}`,
      Food: dailyFoodCost,
      Travel: dailyTravelCost,
      Accommodation: dailyAccommodationCost,
      Misc: dailyMiscCost
    }));
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Daily Expense Breakdown</CardTitle>
        <CardDescription>See how your expenses are distributed each day</CardDescription>
      </CardHeader>
      <CardContent className="min-h-[400px]">
        {budgetData && (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={generateDailyData()}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [
                  formatCurrency(Number(value), selectedCurrency),
                  'Amount'
                ]} 
              />
              <Bar dataKey="Food" stackId="a" fill="#68D391" />
              <Bar dataKey="Travel" stackId="a" fill="#FC8181" />
              <Bar dataKey="Accommodation" stackId="a" fill="#4FD1C5" />
              <Bar dataKey="Misc" stackId="a" fill="#F6AD55" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyBreakdownChart;
