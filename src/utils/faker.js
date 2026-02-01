import { fakerES as faker } from "@faker-js/faker";

const generateFakeUser = async (amount = 1) => {
    const users = [];

    for (let i = 0; i < amount; i++) {
        const newUser = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: 'coder123',
            role: Math.random() < 0.1 ? 'admin' : 'user',
            pets: new Array()
        };
        users.push(newUser);
    }

    return users;
};

const generateFakePet = async (amount = 1) => {
    const pets = []
    const speciesOptions = ['Perro', 'Gato', 'Pajaro', 'Conejo', 'Hamster'];
    for (let i = 0; i < amount; i++) {
        const newPet = {
            name: faker.person.firstName(),
            specie: speciesOptions[faker.number.int({ min: 0, max: speciesOptions.length - 1 })],
            birthDate: faker.date.past({ years: 3 }),
            adopted: false,
            image: ''
        };
        pets.push(newPet);
    }
    return pets;
}

export { generateFakeUser, generateFakePet };