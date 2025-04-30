function discountedPrices(prices, discount)
{
    const discounted = [];
    const length = prices.length;

    for (var i = 0; i < length; i++)
    {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

     console.log(i);
     console.log(length);

    return discounted;
}

console.log(discountedPrices([100, 200, 300], 0.5));