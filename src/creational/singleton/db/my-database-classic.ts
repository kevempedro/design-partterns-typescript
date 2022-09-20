import { IUser } from "../interfaces/user";


export class MyDatabaseClassic {
    // private static instance: MyDatabaseClassic | null = null;
    private static _instance: MyDatabaseClassic | null = null;

    private users: IUser[] = [];

    private constructor() {}

    // public static getInstance(): MyDatabaseClassic {
    //     if (MyDatabaseClassic.instance === null) {
    //         MyDatabaseClassic.instance = new MyDatabaseClassic();
    //     }

    //     return MyDatabaseClassic.instance;
    // }

    public static get instance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic._instance;
    }

    public add(user: IUser): void {
        this.users.push(user);
    }

    public remove(index: number): void {
        this.users.splice(index, 1);
    }

    public show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
