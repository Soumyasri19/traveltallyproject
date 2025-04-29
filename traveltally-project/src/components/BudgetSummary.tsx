
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, Euro, PoundSterling, JapaneseYen } from 'lucide-react';
import { Currency, formatCurrency, currencies } from '@/utils/currencyUtils';

interface BudgetSummaryProps {
  totalBudget: number;
  budgetBreakdown: {
    food: number;
    travel: number;
    accommodation: number;
    misc: number;
  };
  selectedCurrency?: Currency;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ 
  totalBudget, 
  budgetBreakdown,
  selectedCurrency = currencies[0]
}) => {
  const COLORS = ['#68D391', '#FC8181', '#4FD1C5', '#F6AD55'];
  
  // Create data for the chart (now directly in the selected currency)
  const data = [
    { name: 'Food', value: budgetBreakdown.food },
    { name: 'Travel', value: budgetBreakdown.travel },
    { name: 'Accommodation', value: budgetBreakdown.accommodation },
    { name: 'Miscellaneous', value: budgetBreakdown.misc }
  ];
  
  const getCurrencyIcon = (currencyCode: string) => {
    switch (currencyCode) {
      case 'USD': return <DollarSign className="h-4 w-4" />;
      case 'EUR': return <Euro className="h-4 w-4" />;
      case 'GBP': return <PoundSterling className="h-4 w-4" />;
      case 'JPY': return <JapaneseYen className="h-4 w-4" />;
      default: return <DollarSign className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card className="shadow-sm md:col-span-2">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Total Estimated Budget</CardTitle>
            <div className="flex items-center gap-2">
              {getCurrencyIcon(selectedCurrency.code)}
              <span>{selectedCurrency.name} ({selectedCurrency.code})</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-budget-primary mb-4 flex items-center">
            {formatCurrency(totalBudget, selectedCurrency)}
          </div>
        </CardContent>
      </Card>
      
      {Object.entries(budgetBreakdown).map(([category, amount], index) => {
        // Calculate percentage based on the original amounts
        const percentage = (amount / totalBudget) * 100;
        
        return (
          <Card key={category} className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground capitalize">
                {category} Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" style={{ color: COLORS[index] }}>
                {formatCurrency(amount, selectedCurrency)}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {percentage.toFixed(1)}% of total budget
              </div>
              <Progress 
                value={percentage} 
                className="h-2 mt-2"
                style={{ backgroundColor: `${COLORS[index]}30`, color: COLORS[index] }}
              />
            </CardContent>
          </Card>
        );
      })}
      
      <Card className="shadow-sm md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle>Budget Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [
                  formatCurrency(value, selectedCurrency),
                  'Amount'
                ]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetSummary;
