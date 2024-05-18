const supertest = require("supertest");
const { application } = require("express");

const app = require("../app");

const request = supertest(app);

let id = null;

describe("API Loja Virtual", () => {
//   test("Deve retornar 201 e um JSON no POST /clientes", async () => {
//     const response = await request
//       .post("/clientes")
//       .send({
//         nome: "julia",
//         telefone: 61999888777,
//         email: "julia@gmail.com",
//         endereco: "Condominio velavilaqua quadra 5 casa 22",
//       });
//     expect(response.status).toBe(201);
//     expect(response.type).toBe("application/json");
//     id = response.body._id;
//   });

  test("Deve retornar 422 e um JSON? no POST /clientes", async () => {
    const response = await request.post("/clientes").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test('Deve retornar 200 e um array no GET /clientes', async () => {
    const response = await request.get('/clientes');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    if(response.body.length > 0 ){
        id = response.body[0]._id.toString();
    };
  });

  test('Deve retornar 200 e um JSON no GET /clientes/id', async () => {
    const response = await request.get(`/clientes/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  test('Deve retornar 404 e um JSON no GET /clientes/id', async () => {
    const response = await request.get('/clientes/664901b4f1aa5565cb12f409');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });

  test('Deve retornar 200 e um JSON no PUT /clientes/id', async () => {
    const response = await request.put(`/clientes/${id}`).send({nome: "Ricardão",
            telefone: 61333444555,
            email: "Ricardaodaborracha@gmail.com",
            endereco: "qne 14 rua 3 casa 14 taguatinga",
    });
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });  

  test('Deve retornar 404 e um JSON no PUT /clientes/id', async () => {
    const response = await request.put('/clientes/664901b4f1aa5565cb12f4c8');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });

  test('Deve retornar 422 e um JSON no PUT /clientes/id', async () => {
    const response = await request.put(`/clientes/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe('application/json');
  });  

});
