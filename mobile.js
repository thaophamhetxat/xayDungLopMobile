class Mobile{
    constructor() {
        this.name = name;
        this.id = id;
        this.battery =100;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(msg){
        this.msg = msg;
    }
    receiveMsg(msg,mobile){
        this.inbox.push(msg);
    }
    sendMsg(mobile){
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg,this);
        this.decreaseBattery();
    }
    getAllInbox(){
        return this.inbox;
    }
    decreaseBattery(){
        this.battery-=10;
    }
}
/*
* Mobile
* - name: string
* - status: boolean
* - battery:int(2)
* - message: string - 1
* - inbox: Array - 1
* - outbox: Array - 1
* + checkStatus():boolean
* + turnOnOff(): void
* + charge(): void
* + writeMsg(str): void - 1
* + receiveMsg(msg, Mobile): void -1
* + sendMsg(Mobile): void - 1
* + getAllMsg(): Array - 1
* + decreaseBattery(): void
* */
