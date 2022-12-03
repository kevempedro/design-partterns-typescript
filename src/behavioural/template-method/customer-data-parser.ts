import { CustomerData } from "./customer-data";

export abstract class CustomerDataParser {
    public customerData: CustomerData[] = [];

    constructor(protected filePath: string) {}

    readonly fixCustomerData = async (): Promise<void> => {
        this.customerData = await this.parseData();
        this.hook();
        this.customerData = this.fixCPF();
    }

    private fixCPF(): CustomerData[] {
        return this.customerData.map((customer) => ({
            ...customer,
            cpf: customer.cpf.replace(/\D/g, '')
        }));
    }

    protected hook(): void {};

    protected abstract parseData(): Promise<CustomerData[]>;
}
