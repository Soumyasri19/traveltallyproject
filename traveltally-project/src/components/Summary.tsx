
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { currencies, Currency, convertAmount, formatCurrency } from '@/utils/currencyUtils';

interface SummaryProps {
  totalIncome: number;
  savingsGoal: number;
  selectedCurrency?: Currency;
}

const Summary: React.FC<SummaryProps> = ({ 
  totalIncome, 
  savingsGoal,
  selectedCurrency = currencies[0] // Now defaults to INR
}) => {
  const balance = totalIncome;
  const savingsProgress = Math.min(Math.round((balance / savingsGoal) * 100), 100);
  
  // Convert amounts to selected currency
  const convertedIncome = convertAmount(totalIncome, selectedCurrency, selectedCurrency);
  const convertedBalance = convertedIncome;
  const convertedSavingsGoal = convertAmount(savingsGoal, selectedCurrency, selectedCurrency);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 animate-fade-in">
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-budget-income">
            {formatCurrency(convertedIncome, selectedCurrency)}
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-budget-primary">
            {formatCurrency(convertedBalance, selectedCurrency)}
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Savings Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span>{formatCurrency(convertedBalance, selectedCurrency)}</span>
            <span className="text-muted-foreground">{formatCurrency(convertedSavingsGoal, selectedCurrency)}</span>
          </div>
          <Progress value={savingsProgress} className="h-2" />
          <div className="mt-2 text-xs text-muted-foreground text-right">{savingsProgress}% of goal</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;
