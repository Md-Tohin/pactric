const student = {
    id: 101,
    name: 'Salam',
    study: 'Math',
    fee: 2500,
    subject: ['Bangla', 'English', 'Math', 'Physics'],
    job: function(){
        return this.name + ' is a Student';
    },
    improve: function(subject){
        this.job();
        return `${this.name} is failed the final exam in ${subject} subject`;
    },
    totalPayFee: function(amount){
        this.fee = this.fee + amount;
        return this.fee;
    }
}

const output = student.job();
const message = student.improve('english');
const fee = student.totalPayFee(500);
const fee2 = student.totalPayFee(300);
console.log(fee2);