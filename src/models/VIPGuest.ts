import { Guest } from "./Guest";

export class VIPGuest extends Guest{
    public vipLevel: number;

    constructor(name:string, age:number, phoneNumber: string, emailAddress:string, vipLevel: number){
        super(name, age, phoneNumber, emailAddress);
        this.vipLevel = vipLevel;
    }

}