
import React, { useState } from 'react';
import { MapIcon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { currencies, Currency } from '@/utils/currencyUtils';
import CountrySelector from './CountrySelector';
import { Country } from '@/utils/countriesData';

interface HeaderProps {
  selectedCurrency?: Currency;
  onCurrencyChange?: (currency: Currency) => void;
  selectedCountry?: Country;
  onCountrySelect?: (country: Country) => void;
}

const Header = ({ 
  selectedCurrency, 
  onCurrencyChange, 
  selectedCountry, 
  onCountrySelect 
}: HeaderProps) => {
  const currentCurrency = selectedCurrency || currencies[0]; // Now defaults to INR
  const [currencySearch, setCurrencySearch] = useState('');

  const handleCurrencyChange = (currency: Currency) => {
    if (onCurrencyChange) {
      onCurrencyChange(currency);
    }
  };

  const handleCountrySelect = (country: Country) => {
    if (onCountrySelect) {
      onCountrySelect(country);
    }
  };

  const filteredCurrencies = currencies.filter(
    currency => 
      currency.name.toLowerCase().includes(currencySearch.toLowerCase()) ||
      currency.code.toLowerCase().includes(currencySearch.toLowerCase())
  );

  return (
    <header className="bg-budget-secondary text-white py-6 px-6 md:px-8">
      <div className="container max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <MapIcon className="h-6 w-6" />
          <span className="text-2xl font-bold">TravelBudget</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mx-auto">
          {onCountrySelect && (
            <div className="w-full sm:w-1/2">
              <CountrySelector 
                onSelect={handleCountrySelect} 
                selectedCountry={selectedCountry}
              />
            </div>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 w-full sm:w-auto">
                {currentCurrency.code} - {currentCurrency.symbol}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-64 max-h-80 overflow-y-auto">
              <div className="p-2">
                <div className="flex items-center border rounded-md px-3 py-1 mb-2">
                  <Search className="h-4 w-4 mr-2 opacity-70" />
                  <Input 
                    placeholder="Search currency..." 
                    className="border-0 h-8 p-0 focus-visible:ring-0"
                    value={currencySearch}
                    onChange={(e) => setCurrencySearch(e.target.value)}
                  />
                </div>
              </div>
              <DropdownMenuGroup>
                {filteredCurrencies.map(currency => (
                  <DropdownMenuItem 
                    key={currency.code} 
                    onClick={() => handleCurrencyChange(currency)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2 w-6 inline-block text-center">{currency.symbol}</span>
                    <span className="mr-2 font-medium">{currency.code}</span>
                    <span className="text-gray-500 text-sm">{currency.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
