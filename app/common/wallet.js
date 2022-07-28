export const formatAddress = (address,length = 8) => {
    if (address && address.length > length * 2) {
        return `${address.slice(0, length)}....${address.slice(-length)}`
    } else {
        return address
    }
}
export const handleSymbol = (symbol) => {
    if (symbol && symbol.length) return symbol.slice(0, 1);
    return "";
};

export const createQRString = ({address,amount,chain = '',contract,symbol}) => {
    const params = {}
    if (amount) params.amount = amount
    if (contract) params.contract = contract
    if (symbol) params.symbol = symbol
    const queryString = Object.keys(params).map(k => [k, params[k]].join('=')).join('&')
    if (!!queryString) {
        return `${chain.toLowerCase()}:${address}?${queryString}`
    }
    return `${chain.toLowerCase()}:${address}`
}
