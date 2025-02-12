import Exchange from './abstract/vertex.js';
import type { Market, Ticker, Tickers, TradingFees, Balances, Int, OrderBook, OHLCV, Str, Order, OrderType, OrderSide, Trade, Strings, Dict, Num, Currencies, FundingRate, FundingRates, Currency, Transaction } from './base/types.js';
/**
 * @class vertex
 * @augments Exchange
 */
export default class vertex extends Exchange {
    describe(): any;
    setSandboxMode(enabled: any): void;
    convertToX18(num: any): string;
    convertFromX18(num: any): string;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    parseMarket(market: any): Market;
    fetchMarkets(params?: {}): Promise<Market[]>;
    fetchTime(params?: {}): Promise<number>;
    fetchStatus(params?: {}): Promise<{
        status: string;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    parseTrade(trade: any, market?: Market): Trade;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchTradingFees(params?: {}): Promise<TradingFees>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseFundingRate(ticker: any, market?: Market): FundingRate;
    fetchFundingRate(symbol: string, params?: {}): Promise<FundingRate>;
    fetchFundingRates(symbols?: Strings, params?: {}): Promise<FundingRates>;
    parseOpenInterest(interest: any, market?: Market): import("./base/types.js").OpenInterest;
    fetchOpenInterest(symbol: string, params?: {}): Promise<import("./base/types.js").OpenInterest>;
    parseTicker(ticker: Dict, market?: Market): Ticker;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    queryContracts(params?: {}): Promise<Currencies>;
    nonce(): number;
    hashMessage(message: any): string;
    signHash(hash: any, privateKey: any): string;
    signMessage(message: any, privateKey: any): string;
    buildSig(chainId: any, messageTypes: any, message: any, verifyingContractAddress?: string): string;
    buildCreateOrderSig(message: any, chainId: any, verifyingContractAddress: any): string;
    buildListTriggerTxSig(message: any, chainId: any, verifyingContractAddress: any): string;
    buildCancelAllOrdersSig(message: any, chainId: any, verifyingContractAddress: any): string;
    buildCancelOrdersSig(message: any, chainId: any, verifyingContractAddress: any): string;
    buildWithdrawSig(message: any, chainId: any, verifyingContractAddress: any): string;
    convertAddressToSender(address: string): string;
    getNonce(now: any, expiration: any): string;
    getExpiration(now: any, timeInForce: any, postOnly: any, reduceOnly: any): string;
    getAmount(amount: any, side: any): string;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    editOrder(id: string, symbol: string, type: OrderType, side: OrderSide, amount?: Num, price?: Num, params?: {}): Promise<Order>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: Market): Order;
    parseTimeInForce(timeInForce: any): string;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelOrders(ids: string[], symbol?: Str, params?: {}): Promise<any>;
    fetchBalance(params?: {}): Promise<Balances>;
    parsePosition(position: any, market?: Market): import("./base/types.js").Position;
    fetchPositions(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Position[]>;
    queryNonces(): Promise<import("./base/types.js").Dictionary<any>>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    parseTransaction(transaction: Dict, currency?: Currency): Transaction;
    parseTransactionStatus(status: Str): string;
    handlePublicAddress(methodName: string, params: Dict): any[];
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
}
