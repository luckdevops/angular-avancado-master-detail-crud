import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
      const categories = [
        { id: 1, nome: 'Lazer', description: 'Cinema, parques, praia, etc'  }
        { id: 2, nome: 'Saúde', description: 'Plano de Saúde e Remédios'  }
        { id: 3, nome: 'Salário', description: 'Recebimebto de Salário'  }
        { id: 4, nome: 'Freelas', description: 'Trabalhos como freelancer'  }
      ];

      return { categories }
    }
}
