export const maskBankCard = (card: string) => card.replace(/^[\d-\s]+(?=\d{4})/, '************');
