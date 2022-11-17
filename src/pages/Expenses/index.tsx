import * as Dialog from '@radix-ui/react-dialog'
import { ListPlus, MagnifyingGlass } from 'phosphor-react'
import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { NewExpenseModal } from '../../components/NewExpenseModal'
import { ExpensesContent, ExpensesTable } from './styles'

export function Expenses() {
  return (
    <div>
      <Header />
      <ExpensesContent>
        <h1>Expenses</h1>
        <Form variant="horizontal">
          <input type="text" placeholder="Search for expenses" />
          <button type="submit">
            <MagnifyingGlass size={16} weight="bold" />
            <span>Search</span>
          </button>
        </Form>
        <div>
          <div></div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <ListPlus size={22} weight="bold" />
              </button>
            </Dialog.Trigger>
            <NewExpenseModal />
          </Dialog.Root>
        </div>
        <ExpensesTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Value</th>
              <th>Type</th>
              <th>Spent at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="50%">Nubank</td>
              <td>$ 900.00</td>
              <td>Credit Card</td>
              <td>2022/11/16</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>$ 10.00</td>
              <td>Food</td>
              <td>2022/11/16</td>
            </tr>
          </tbody>
        </ExpensesTable>
      </ExpensesContent>
    </div>
  )
}
