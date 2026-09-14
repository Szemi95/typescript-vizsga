import { IGuest } from "../interfaces/IGuest.js";

export class Guest implements IGuest {
    public name: string;
    public age: number;
    public phoneNumber:string;
    public emailAddress: string;

    constructor(name:string, age:number, phoneNumber: string, emailAddress: string){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
}