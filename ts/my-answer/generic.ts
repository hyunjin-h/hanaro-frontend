type Item = { item: string; price: number };
type ItemPrice<T, U> = T & { item: keyof U };

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
	{ item: "X", price: 1000 },
	{ item: "Y", price: 2000 },
	{ item: "Z", price: 3000 },
	// { item: "A", price: 3000 }, 오류나는 게 정상
];

const total = itemPrices.reduce(
	(curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
	0
);
export {};
