interface IFallback {
    notFound: string;
    amount: string;
    nSlashA: string;
    quantity: string;
  }
  export const fallback: IFallback = {
    notFound: "Not found",
    amount: "0.00",
    nSlashA: "N/A",
    quantity: "0",
  };
  