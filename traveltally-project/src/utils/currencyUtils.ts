
export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Rate relative to USD
}

export const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.42 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.78 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 149.85 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.36 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.53 },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', rate: 0.88 },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', rate: 7.25 },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', rate: 5.04 },
  { code: 'RUB', symbol: '₽', name: 'Russian Ruble', rate: 91.49 },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won', rate: 1355.42 },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 1.34 },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', rate: 1.66 },
  { code: 'MXN', symbol: 'Mex$', name: 'Mexican Peso', rate: 16.68 },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', rate: 7.82 },
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira', rate: 32.19 },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand', rate: 18.49 },
  { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', rate: 10.54 },
  { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', rate: 10.84 },
  { code: 'DKK', symbol: 'kr', name: 'Danish Krone', rate: 6.87 },
  { code: 'PLN', symbol: 'zł', name: 'Polish Złoty', rate: 3.94 },
  { code: 'THB', symbol: '฿', name: 'Thai Baht', rate: 36.08 },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', rate: 15712.50 },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 3.67 },
  { code: 'ARS', symbol: '$', name: 'Argentine Peso', rate: 880.50 },
  { code: 'COP', symbol: '$', name: 'Colombian Peso', rate: 3915.80 },
  { code: 'CLP', symbol: '$', name: 'Chilean Peso', rate: 951.75 },
  { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound', rate: 48.25 },
  { code: 'ILS', symbol: '₪', name: 'Israeli New Shekel', rate: 3.66 },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', rate: 4.72 },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso', rate: 57.51 },
  { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar', rate: 32.42 },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', rate: 3.75 },
  { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', rate: 278.28 },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', rate: 25352.50 }
];

export const convertAmount = (amount: number, fromCurrency: Currency, toCurrency: Currency): number => {
  // First convert amount from the source currency to USD (if not already USD)
  const amountInUSD = fromCurrency.code === 'USD' ? amount : amount / fromCurrency.rate;
  
  // Then convert from USD to the target currency
  return amountInUSD * toCurrency.rate;
};

export const formatCurrency = (amount: number, currency: Currency): string => {
  return `${currency.symbol}${amount.toFixed(2)}`;
};
