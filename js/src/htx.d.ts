import Exchange from './abstract/htx.js';
import type { TransferEntry, Int, OrderSide, OrderType, Order, OHLCV, Trade, FundingRateHistory, Balances, Str, Dict, Transaction, Ticker, OrderBook, Tickers, OrderRequest, Strings, Market, Currency, Num, Account, TradingFeeInterface, Currencies, IsolatedBorrowRates, IsolatedBorrowRate, LeverageTiers, LeverageTier, int, LedgerEntry, FundingRate, FundingRates, DepositAddress, BorrowInterest } from './base/types.js';
/**
 * @class huobi
 * @augments Exchange
 */
export default class htx extends Exchange {
    describe(): any;
    fetchStatus(params?: {}): Promise<{
        status: any;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchTime(params?: {}): Promise<number>;
    parseTradingFee(fee: Dict, market?: Market): TradingFeeInterface;
    fetchTradingFee(symbol: string, params?: {}): Promise<TradingFeeInterface>;
    fetchTradingLimits(symbols?: Strings, params?: {}): Promise<Dict>;
    fetchTradingLimitsById(id: string, params?: {}): Promise<{
        info: any;
        limits: {
            amount: {
                min: number;
                max: number;
            };
        };
    }>;
    parseTradingLimits(limits: any, symbol?: Str, params?: {}): {
        info: any;
        limits: {
            amount: {
                min: number;
                max: number;
            };
        };
    };
    costToPrecision(symbol: any, cost: any): string;
    fetchMarkets(params?: {}): Promise<Market[]>;
    fetchMarketsByTypeAndSubType(type: Str, subType: Str, params?: {}): Promise<any[]>;
    tryGetSymbolFromFutureMarkets(symbolOrMarketId: string): any;
    parseTicker(ticker: Dict, market?: Market): Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchLastPrices(symbols?: Strings, params?: {}): Promise<import("./base/types.js").LastPrices>;
    parseLastPrice(entry: any, market?: Market): {
        symbol: string;
        timestamp: any;
        datetime: any;
        price: number;
        side: string;
        info: any;
    };
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseTrade(trade: Dict, market?: Market): Trade;
    fetchOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchSpotOrderTrades(id: string, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    fetchAccounts(params?: {}): Promise<Account[]>;
    parseAccount(account: any): {
        info: any;
        id: string;
        type: any;
        code: any;
    };
    fetchAccountIdByType(type: string, marginMode?: Str, symbol?: Str, params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    networkIdToCode(networkId?: Str, currencyCode?: Str): string;
    networkCodeToId(networkCode: string, currencyCode?: Str): any;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    parseMarginBalanceHelper(balance: any, code: any, result: any): any;
    fetchSpotOrdersByStates(states: any, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchSpotOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedSpotOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchContractOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedContractOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrderStatus(status: Str): string;
    parseOrder(order: Dict, market?: Market): Order;
    createMarketBuyOrderWithCost(symbol: string, cost: number, params?: {}): Promise<Order>;
    createTrailingPercentOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, trailingPercent?: any, trailingTriggerPrice?: any, params?: {}): Promise<Order>;
    createSpotOrderRequest(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<any>;
    createContractOrderRequest(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): any;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: Str, params?: {}): Promise<any[]>;
    parseCancelOrders(orders: any): any[];
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any[]>;
    cancelAllOrdersAfter(timeout: Int, params?: {}): Promise<any>;
    parseDepositAddress(depositAddress: any, currency?: Currency): {
        currency: string;
        address: string;
        tag: string;
        network: string;
        note: string;
        info: any;
    };
    fetchDepositAddressesByNetwork(code: string, params?: {}): Promise<DepositAddress[]>;
    fetchDepositAddress(code: string, params?: {}): Promise<DepositAddress>;
    fetchWithdrawAddresses(code: string, note?: any, networkCode?: any, params?: {}): Promise<any[]>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransaction(transaction: Dict, currency?: Currency): Transaction;
    parseTransactionStatus(status: Str): string;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    parseTransfer(transfer: Dict, currency?: Currency): TransferEntry;
    transfer(code: string, amount: number, fromAccount: string, toAccount: string, params?: {}): Promise<TransferEntry>;
    fetchIsolatedBorrowRates(params?: {}): Promise<IsolatedBorrowRates>;
    parseIsolatedBorrowRate(info: Dict, market?: Market): IsolatedBorrowRate;
    fetchFundingRateHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingRateHistory[]>;
    parseFundingRate(contract: any, market?: Market): FundingRate;
    parseFundingInterval(interval: any): string;
    fetchFundingRate(symbol: string, params?: {}): Promise<FundingRate>;
    fetchFundingRates(symbols?: Strings, params?: {}): Promise<FundingRates>;
    fetchBorrowInterest(code?: Str, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<BorrowInterest[]>;
    parseBorrowInterest(info: Dict, market?: Market): BorrowInterest;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: int, reason: string, url: string, method: string, headers: Dict, body: string, response: any, requestHeaders: any, requestBody: any): any;
    fetchFundingHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").FundingHistory[]>;
    setLeverage(leverage: Int, symbol?: Str, params?: {}): Promise<any>;
    parseIncome(income: any, market?: Market): {
        info: any;
        symbol: string;
        code: string;
        timestamp: number;
        datetime: string;
        id: string;
        amount: number;
    };
    parsePosition(position: Dict, market?: Market): import("./base/types.js").Position;
    fetchPositions(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Position[]>;
    fetchPosition(symbol: string, params?: {}): Promise<import("./base/types.js").Position>;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: Dict, currency?: Currency): LedgerEntry;
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<LedgerEntry[]>;
    fetchLeverageTiers(symbols?: Strings, params?: {}): Promise<LeverageTiers>;
    parseMarketLeverageTiers(info: any, market?: Market): LeverageTier[];
    fetchOpenInterestHistory(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").OpenInterest[]>;
    fetchOpenInterest(symbol: string, params?: {}): Promise<import("./base/types.js").OpenInterest>;
    parseOpenInterest(interest: any, market?: Market): import("./base/types.js").OpenInterest;
    borrowIsolatedMargin(symbol: string, code: string, amount: number, params?: {}): Promise<any>;
    borrowCrossMargin(code: string, amount: number, params?: {}): Promise<any>;
    repayIsolatedMargin(symbol: string, code: string, amount: any, params?: {}): Promise<any>;
    repayCrossMargin(code: string, amount: any, params?: {}): Promise<any>;
    parseMarginLoan(info: any, currency?: Currency): {
        id: string;
        currency: string;
        amount: any;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    fetchSettlementHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any[]>;
    fetchDepositWithdrawFees(codes?: Strings, params?: {}): Promise<any>;
    parseDepositWithdrawFee(fee: any, currency?: Currency): any;
    parseSettlements(settlements: any, market: any): any[];
    parseSettlement(settlement: any, market: any): {
        info: any;
        symbol: string;
        price: number;
        timestamp: number;
        datetime: string;
    };
    fetchLiquidations(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Liquidation[]>;
    parseLiquidation(liquidation: any, market?: Market): import("./base/types.js").Liquidation;
    closePosition(symbol: string, side?: OrderSide, params?: {}): Promise<Order>;
    setPositionMode(hedged: boolean, symbol?: Str, params?: {}): Promise<any>;
}
