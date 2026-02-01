import { usersService, petsService } from "../services/index.js"
import PetDTO from "../dto/Pet.dto.js";
import { generateFakeUser, generateFakePet } from "../utils/faker.js";
import { createHash } from "../utils/index.js";

const createUser = async (list) => {
    list.forEach(async (user) => {
        const { first_name, last_name, email, password } = user;
        const hashedPassword = await createHash(password);
        await usersService.create({ first_name, last_name, email, password: hashedPassword, role: user.role ?? undefined, pets: user.pets ?? undefined });
    });
}

const mockingUsers = async (req, res) => {
    try {
        const users = await generateFakeUser(50);
        await createUser(users);
        res.send({ status: "success", payload: users });
    } catch (err) {
        res.status(500).send({ status: "error", error: "Error generating users" });
    }
}

const mockingPets = async (req, res) => {
    try {
        const pets = await generateFakePet(50);
        pets.forEach(async (pet) => { await petsService.create(PetDTO.getPetInputFrom(pet)); });
        res.send({ status: "success", payload: pets });
    } catch (err) {
        res.status(500).send({ status: "error", error: "Error generating pets" });
    }
}


const generateFakeData = async (req, res) => {
    try {
        const { users, pets } = req.body;

        if (!users || !pets) return res.status(400).send({ status: "error", error: "Incomplete values" });

        const userList = await generateFakeUser(users);
        await createUser(userList);

        const petList = await generateFakePet(pets);
        const petDTOs = petList.map(pet => PetDTO.getPetInputFrom(pet));
        petDTOs.forEach(async (pet) => { await petsService.create(pet); });

        res.send({ status: "success", message: "Fake data generated" });
    } catch (err) {
        res.status(500).send({ status: "error", error: "Error generating data" });
    }
}

const deleteMocks = async (req, res) => {
    try {
        const users = await usersService.getAll();
        const pets = await petsService.getAll();
        if (users.length > 0) await usersService.deleteAll();
        if (pets.length > 0) await petsService.deleteAll();

        res.send({ status: "success", message: "All mock data deleted" });
    } catch (err) {
        res.status(500).send({ status: "error", error: "Error deleting mock data" });
    }
}


export default {
    mockingUsers,
    mockingPets,
    generateFakeData,
    deleteMocks
}