import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface ListTransactions {
  transactions: Transaction[];
  balance: Balance;
}

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  /**
   * execute
   */
  public execute(): ListTransactions {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();

    const list: ListTransactions = {
      transactions,
      balance,
    };

    return list;
  }
}

export default ListTransactionsService;
