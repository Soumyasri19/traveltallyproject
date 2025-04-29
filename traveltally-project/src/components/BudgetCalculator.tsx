
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { UserIcon, UtensilsIcon, PlaneIcon } from 'lucide-react';
import { Currency, formatCurrency } from '@/utils/currencyUtils';

interface BudgetFormData {
  travelers: number;
  days: number;
  foodCostPerDay: number;
  travelCostPerPerson: number;
  accommodationCostPerNight: number;
  miscCostTotal: number;
}

interface BudgetCalculatorProps {
  onCalculate: (totalBudget: number, budgetData: BudgetFormData) => void;
  selectedCurrency: Currency;
}

const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ onCalculate, selectedCurrency }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BudgetFormData>({
    travelers: 1,
    days: 3,
    foodCostPerDay: 50,
    travelCostPerPerson: 300,
    accommodationCostPerNight: 100,
    miscCostTotal: 100
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.travelers <= 0 || formData.days <= 0) {
      toast({
        title: "Invalid input",
        description: "Number of travelers and days must be greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    // Calculate total budget (now in the selected currency)
    const totalFoodCost = formData.foodCostPerDay * formData.travelers * formData.days;
    const totalTravelCost = formData.travelCostPerPerson * formData.travelers;
    const totalAccommodationCost = formData.accommodationCostPerNight * formData.days;
    const totalBudget = totalFoodCost + totalTravelCost + totalAccommodationCost + formData.miscCostTotal;
    
    // Send data to parent component
    onCalculate(totalBudget, formData);
    
    toast({
      title: "Budget Calculated",
      description: `Your estimated total budget is ${formatCurrency(totalBudget, selectedCurrency)}.`
    });
  };

  return (
    <Card className="shadow-sm mb-6">
      <CardHeader>
        <CardTitle>Calculate Your Travel Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="travelers" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                Number of Travelers
              </Label>
              <Input
                id="travelers"
                name="travelers"
                type="number"
                min="1"
                value={formData.travelers}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="days" className="flex items-center gap-2">
                <PlaneIcon className="h-4 w-4" />
                Number of Days
              </Label>
              <Input
                id="days"
                name="days"
                type="number"
                min="1"
                value={formData.days}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="foodCostPerDay" className="flex items-center gap-2">
                <UtensilsIcon className="h-4 w-4" />
                Food Cost per Person per Day ({selectedCurrency.symbol})
              </Label>
              <Input
                id="foodCostPerDay"
                name="foodCostPerDay"
                type="number"
                min="0"
                step="0.01"
                value={formData.foodCostPerDay}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="travelCostPerPerson">Travel Cost per Person ({selectedCurrency.symbol})</Label>
              <Input
                id="travelCostPerPerson"
                name="travelCostPerPerson"
                type="number"
                min="0"
                step="0.01"
                value={formData.travelCostPerPerson}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="accommodationCostPerNight">Accommodation Cost per Night ({selectedCurrency.symbol})</Label>
              <Input
                id="accommodationCostPerNight"
                name="accommodationCostPerNight"
                type="number"
                min="0"
                step="0.01"
                value={formData.accommodationCostPerNight}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="miscCostTotal">Miscellaneous Costs Total ({selectedCurrency.symbol})</Label>
              <Input
                id="miscCostTotal"
                name="miscCostTotal"
                type="number"
                min="0"
                step="0.01"
                value={formData.miscCostTotal}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-budget-primary hover:bg-budget-primary/90">
            Calculate Budget
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BudgetCalculator;
