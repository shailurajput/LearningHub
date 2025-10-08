export const formatPrice = (price: number): string => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '₹0';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatCurrency = formatPrice;

export const formatPriceWithoutSymbol = (price: number): string => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0';
  }
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}