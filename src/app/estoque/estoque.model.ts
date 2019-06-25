export class Estoque {

    constructor(key: string = null, tipo: string = null, quantidade: number = null) {
        this.key = key;
        this.tipo = tipo;
        this.quantidade = quantidade;
    }

    key: string ;
    tipo: string;
    quantidade:number;

}