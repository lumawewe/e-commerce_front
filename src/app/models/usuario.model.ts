import { Conta } from "./conta.model";

export class Usuario {
    public codUsuario!: number;
    public nome!: string;
    public email!:string;
    public password!: string;
    public conta!:Conta;
    public dtCricao!: Date;
}
