
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { currencies, Currency, convertAmount, formatCurrency } from '@/utils/currencyUtils';

export interface Transaction {
  id: string;
  type: 'income';
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
  selectedCurrency?: Currency;
}

const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions, 
  onDeleteTransaction,
  selectedCurrency = currencies[0] // Now defaults to INR
}) => {
  // Sort transactions by date (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Format date from YYYY-MM-DD to MMM DD, YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <Card className="shadow-sm mb-6 animate-fade-in">
      <CardHeader>
        <CardTitle>Recent Income</CardTitle>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No income transactions yet. Add your first income above.
          </div>
        ) : (
          <ScrollArea className="h-[300px] md:h-[400px]">
            <div className="space-y-4">
              {sortedTransactions.map((transaction) => {
                const convertedAmount = convertAmount(transaction.amount, selectedCurrency, selectedCurrency);
                
                return (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-budget-income/20 text-budget-income">
                        <PlusIcon size={18} />
                      </div>
                      <div>
                        <div className="font-medium">{transaction.category}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.description || 'No description'} • {formatDate(transaction.date)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-budget-income">
                        +{formatCurrency(convertedAmount, selectedCurrency)}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        onClick={() => onDeleteTransaction(transaction.id)}
                      >
                        <TrashIcon size={16} />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
