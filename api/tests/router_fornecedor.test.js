const supertest = require('supertest');

const app = require ('../app');

const request = supertest(app);

let id = null;

describe('API', () => {
    test('Deve retornar 201 e um JSON no POST /fornecedor', async () => {
            const response = (await request.post("/fornecedor")).send({nome: "Fribraz",telefone:61996553145, email: "fribraz12@gmail.com", endereco:"avenida 25 de março Lt 27 SP"});
            expect(response.status).toBe(201);
            expect(response.type).toBe("application/json");
            id = response.body._id
    });
})