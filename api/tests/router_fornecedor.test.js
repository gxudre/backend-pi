const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

let id = null;

describe("API", () => {
  test("Deve retornar 201 e um JSON no POST /fornecedores", async () => {
    const response = await request.post("/fornecedores").send({
      nome: "Fribraz",
      telefone: 61996553145,
      email: "fribraz12@gmail.com",
      endereco: "avenida 25 de março Lt 27 SP",
    });
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    id = response.body._id;
  });

  test("Deve retornar 422 e um JSON? no POST /fornecedores", async () => {
    const response = await request.post("/fornecedores").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um array no GET /fornecedores", async () => {
    const response = await request.get("/fornecedores");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });

  test("Deve retornar 200 e um JSON no GET /fornecedores/id", async () => {
    const response = await request.get(`/fornecedores/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no GET /fornecedores/id", async () => {
    const response = await request.get(
      "/fornecedores/664901b4f1aa5565cb12f409"
    );
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });
  test("Deve retornar 200 e um JSON no PUT /fornecedores/id", async () => {
    const response = await request.put(`/fornecedores/${id}`).send({
      nome: "maturatta",
      telefone: 61333444555,
      email: "vanessadacarne@gmail.com",
      endereco: "Ceilondres",
    });
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no PUT /fornecedores/id", async () => {
    const response = await request.put(
      "/fornecedores/664901b4f1aa5565cb12f4c8"
    );
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON no PUT /fornecedores/id", async () => {
    const response = await request.put(`/fornecedores/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 204 no DELETE /fornecedores/id", async () => {
    const response = await request.delete(`/fornecedores/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
  });

  test("Deve retornar um 404 e um JSON no DELETE /fornecedores/id", async () => {
    const response = await request.delete(`/fornecedores/${id}`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });
});
