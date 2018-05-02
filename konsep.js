{
	transactionsReducer: {
 		transactions: [
			{id: 1, tax: 10, discount: 10, total: 4000, waiterId: 1, tableId: 1},
			{id: 2, tax: 10, discount: 10, total: 4000, waitedId: 1, tableId: 1}
		]		
	},
	categoriesReducer: {
		categories: []
	},
	productsReducer: {
		products: []
	},
	ordersReducer: {
		orders: [
			{id: 1, productId: “buah”, qty: 2, price: 1000, subtotal: 2000, transactionId: 1},
			{id: 2, productId: “apalah”, qty: 2, price: 1000, subtotal: 2000, transactionId: 1},
		],
	}
}