module.exports = class Account {
    constructor(name){
        this.name = name;
    }
    credit(balance){
        this.credit = balance;
    }
    describe(){
        return `owner: ${this.name}, balance: ${this.credit}`;
    }
}
