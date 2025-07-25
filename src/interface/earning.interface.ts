export type TEarningCharts = TEarningChart[]

export interface TEarningChart {
  month: string
  amount: number
}

// Define interface for table data
export interface EarningTableData {
  id: string;
  serial: string;
  user: string;
  amount: number;
  subscriptionType: string;
  purchaseDate: string;
  transaction_id: string;
}

// Define props interface
export interface EarningOverviewTableProps {
  pagination?: boolean;
  limit?: number;
}
