export interface Return {
  id: string;
  userId: string; // Foreign key to the User model
  productId: string; // Foreign key to the Product model
  reason: string;
  status: 'requested' | 'approved' | 'rejected';
  createdAt: Date;
}