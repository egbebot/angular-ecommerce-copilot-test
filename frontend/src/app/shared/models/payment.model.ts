export interface Payment {
  id: string;
  userId: string; // Foreign key to the User model
  amount: number;
  paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}