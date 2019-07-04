import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
      const categories = [
        { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc'  },
        { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'  },
        { id: 3, name: 'Salário', description: 'Recebimebto de Salário'  },
        { id: 4, name: 'Freelas', description: 'Trabalhos como freelancer'  },
        { id: 5, name: 'Moradia', description: 'Financiamento do apartamento'  }
      ];

      return { categories }
    }
}
