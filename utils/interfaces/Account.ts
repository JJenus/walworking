export type Account = {
	id?: number;
	userId: string;
	currencyId: string;
	amount: number | null;
	status: AccountStatus;
	accountLevel: number;
	accountNumber: number;
};

export enum AccountStatus {
	ACTIVE = "active",
	CLOSED = "closed",
	FROZEN = "frozen",
}
