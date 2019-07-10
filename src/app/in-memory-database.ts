import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
      const categories: Category[] = [
        { id: 1, name: 'Moradia', description: 'Financiamento do apartamento'  },
        { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'  },
        { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc'  },
        { id: 4, name: 'Salário', description: 'Recebimebto de Salário'  },
        { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'  }
      ];

      const entries: Entry[] = [
        { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true,
          date: '14/10/2018', amount: '70,80', type: 'expense', description: 'Pago para a empresa Bahia Gás' } as Entry,
        { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false,
          date: '14/10/2018', amount: '15,00', type: 'expense' } as Entry,
        { id: 3, name: 'Salário na Empresa X', categoryId: categories[3].id, category: categories[3], paid: true,
          date: '15/10/2018', amount: '7851,80', type: 'revenue' } as Entry,
        { id: 4, name: 'Aluguel de Filme', categoryId: categories[2].id, category: categories[2], paid: true,
          date: '16/10/2018', amount: '18,24', type: 'expense' } as Entry,
        { id: 5, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false,
          date: '17/10/2018', amount: '30,00', type: 'expense' } as Entry,
        { id: 6, name: 'Uber', categoryId: categories[1].id, category: categories[1], paid: true,
          date: '17/10/2018', amount: '30,15', type: 'expense' } as Entry,
        { id: 7, name: 'Pagamento pelo Projeto XYZ', categoryId: categories[4].id, category: categories[4], paid: true,
          date: '25/10/2018', amount: '2441,00', type: 'revenue' } as Entry,
        { id: 8, name: 'Cinema', categoryId: categories[1].id, category: categories[1], paid: false,
          date: '28/11/2018', amount: '45,00', type: 'expense' } as Entry,
        { id: 9, name: 'Aluguel', categoryId: categories[2].id, category: categories[2], paid: false,
          date: '23/10/2018', amount: '1350,00', type: 'expense' } as Entry
      ];

      return { categories, entries }
    }
}
