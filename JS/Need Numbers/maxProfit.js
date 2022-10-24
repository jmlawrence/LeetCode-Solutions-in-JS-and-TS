/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let bestProfit = 0;
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            bestProfit = Math.max(profit, bestProfit);
        } else {
            left = right;
        }
        
        right++;
    }
    
    return bestProfit;
};