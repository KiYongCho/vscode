class Stock {
    stno: number;
    stname: string;
    stamt: number;
    stindate: Date;
    strgdate: Date;
    shno: number;
    constructor(stno: number, stname: string, stamt: number,
         stindate: Date, strgdate: Date, shno: number) {
        this.stno = stno;
        this.stname = stname;
        this.stamt = stamt;
        this.stindate = stindate;
        this.strgdate = strgdate;
        this.shno = shno;
    }
}