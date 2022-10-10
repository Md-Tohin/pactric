const users = [
    { id: 101, name: 'Tohin', phone: '125421', address: 'Bangladesh' },
    { id: 102, name: 'Kamal', phone: '5845415', address: 'India' },
    { id: 103, name: 'Jamal', phone: '788954', address: 'Napel' },
]

// console.log(users);
// console.log(users[1]);
// console.log(users[1].name);

const data = {
    count: 5000,
    data: [
        { id: 101, name: 'Tohin', phone: '125421', address: 'Bangladesh' },
        { id: 102, name: 'Kamal', phone: '5845415', address: 'India' },
        { id: 103, name: 'Jamal', phone: '788954', address: 'Napel' },
    ]
}

// console.log(data);
// console.log(data.data[0].address);

const firends = {
    count: 5000,
    data: {
        first: [101, 'Tohin', '125421', 'Bangladesh'],
        second: [102, 'Kamal', '5845415', 'India'],
        third: [103, 'Jamal', '788954', 'Napel'],
    }
}

// console.log(firends);
// console.log(firends.data);
// console.log(firends.data.first);
// console.log(firends.data.first[3]);


const students = {
    count: 5000,
    student_1: {
        id: 101,
        name: {
            firstName : 'Mohammed',
            lastName : 'Tohin',
        },
        phone: '125421',
        address: 'Bangladesh'
    },
    student_2: {
        id: 101,
        name: 'Tohin',
        phone: '125421',
        address: 'Bangladesh'
    },
}

// console.log(students?.student_1?.name?.firstName);
// console.log(students?.student_2?.name?.firstName);
