import { Router } from 'express';

import { listCategories } from './useCases/categories/listCategories';
import { createCategories } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';

export const router = Router();

// List Categories
router.get('/categories', listCategories);

// Create Categories
router.post('/categories', createCategories);

// List Products
router.get('/products', listProducts);

// Create product
router.post('/products', (req,res) => {
    res.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (req,res) => {
    res.send('OK');
});

// List Orders
router.get('/orders', (req,res) => {
    res.send('OK');
});

// Create Order
router.post('/orders', (req,res) => {
    res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req,res) => {
    res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req,res) => {
    res.send('OK');
});
