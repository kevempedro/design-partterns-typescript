import { IUser } from "../interfaces/user";


const users: IUser[] = [];

export const MyDatabaseModule = {
    add(user: IUser): void {
        users.push(user);
    },

    remove(index: number): void {
        users.splice(index, 1);
    },

    show(): void {
        for (const user of users) {
            console.log(user);
        }
    }
}
