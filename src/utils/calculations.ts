import { Expense, Person, Balance, Settlement } from '../types';

export const calculateBalances = (expenses: Expense[], people: Person[]): Balance[] => {
  const balances: { [personId: string]: number } = {};
  
  // Initialize balances
  people.forEach(person => {
    balances[person.id] = 0;
  });

  // Calculate balances from expenses
  expenses.forEach(expense => {
    const splitAmount = expense.amount / expense.splitBetween.length;
    
    // Person who paid gets credited
    balances[expense.paidBy] += expense.amount;
    
    // Everyone in the split gets debited
    expense.splitBetween.forEach(personId => {
      balances[personId] -= splitAmount;
    });
  });

  return people.map(person => ({
    personId: person.id,
    personName: person.name,
    balance: Math.round((balances[person.id] || 0) * 100) / 100,
  }));
};

export const calculateSettlements = (balances: Balance[]): Settlement[] => {
  const settlements: Settlement[] = [];
  const creditors = balances.filter(b => b.balance > 0.01).sort((a, b) => b.balance - a.balance);
  const debtors = balances.filter(b => b.balance < -0.01).sort((a, b) => a.balance - b.balance);

  let i = 0, j = 0;
  
  while (i < creditors.length && j < debtors.length) {
    const creditor = creditors[i];
    const debtor = debtors[j];
    
    const amount = Math.min(creditor.balance, Math.abs(debtor.balance));
    
    if (amount > 0.01) {
      settlements.push({
        from: debtor.personId,
        to: creditor.personId,
        amount: Math.round(amount * 100) / 100
      });
    }
    
    creditor.balance -= amount;
    debtor.balance += amount;
    
    if (creditor.balance < 0.01) i++;
    if (debtor.balance > -0.01) j++;
  }
  
  return settlements;
};

export const getExpensesByCategory = (expenses: Expense[]) => {
  const categoryTotals: { [category: string]: number } = {};
  
  expenses.forEach(expense => {
    categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
  });
  
  const total = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);
  
  return Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
    percentage: total > 0 ? (amount / total) * 100 : 0
  }));
};

export const getMonthlyExpenses = (expenses: Expense[]) => {
  const monthlyTotals: { [month: string]: number } = {};
  
  expenses.forEach(expense => {
    const monthKey = expense.date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short' });
    monthlyTotals[monthKey] = (monthlyTotals[monthKey] || 0) + expense.amount;
  });
  
  return Object.entries(monthlyTotals).map(([month, amount]) => ({
    month,
    amount
  })).sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());
};