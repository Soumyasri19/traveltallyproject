
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface TransactionFormProps {
  onAddTransaction: (transaction: {
    type: 'income';
    amount: number;
    category: string;
    description: string;
    date: string;
  }) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const incomeCategories = ['Salary', 'Freelance', 'Investment', 'Gift', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    if (!category) {
      toast({
        title: "Missing category",
        description: "Please select a category.",
        variant: "destructive"
      });
      return;
    }

    // Create transaction object
    const transaction = {
      type: 'income' as const,
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
    };

    // Send transaction to parent component
    onAddTransaction(transaction);

    // Reset form
    setAmount('');
    setCategory('');
    setDescription('');

    toast({
      title: "Transaction added",
      description: `Income of ${amount} has been added.`,
    });
  };

  return (
    <Card className="shadow-sm mb-6 animate-fade-in">
      <CardHeader>
        <CardTitle>Add New Income</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Button
                type="button"
                className="flex-1 bg-budget-income hover:bg-budget-income/90 w-full"
                disabled
              >
                <PlusIcon className="mr-1 h-4 w-4" /> Income
              </Button>
            </div>
            <div>
              <Input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full"
                step="0.01"
                min="0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {incomeCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                placeholder="Description (Optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-budget-primary hover:bg-budget-primary/90">
            Add Income
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TransactionForm;
