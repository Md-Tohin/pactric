const student1 = {
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

const student2 = {
    name: 'Jannat',
    fee: 9000,
}

// const result = student1.job.call(student2);
// const result = student1.totalPayFee.call(student2, 1500);
// const result = student1.totalPayFee.apply(student2, [1000]);
const result = student1.totalPayFee.bind(student2);
const total = result(200);
console.log(total);

