// CODE here for your Lambda Classes

class Person {
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(info){
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${this.subject}`;
    }

    grade(student, subject){
        return `${this.name} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person {
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
    }

    listsSubjects(){
        console.log(this.favoriteSubjects);
    }

    PRassignment(subject){
        return `${this.name} has submitted a PR for ${this.subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${this.channel}, @channel standy times!`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${this.name}'s code on ${this.subject}`
    }
}

const dan = new Person({
    name: 'Dan',
    location: 'Tacoma',
    age: 30
})

const susan = new Person({
    name: 'Susan',
    location: 'Seattle',
    age: 47
})

console.log(dan.speak())
console.log(susan.age)

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const greg = new Instructor({
    name: 'Greg',
    location: 'Tukwila',
    age: 57,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `What's up Doc?`
});

console.log(fred.catchPhrase);
console.log(greg.favLanguage)