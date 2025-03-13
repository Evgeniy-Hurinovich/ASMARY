import SortBy from '../../ui/SortBy'
import Filter from '../../ui/Filter'
import TableOperations from '../../ui/TableOperations'

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: 'all', label: 'Все' },
          { value: 'checked-out', label: 'Выписан' },
          { value: 'checked-in', label: 'Записан' },
          { value: 'unconfirmed', label: 'Не подтверждено' },
        ]}
      />

      <SortBy
        options={[
          { value: 'startDate-desc', label: 'Сортировка по дате (с ранних)' },
          { value: 'startDate-asc', label: 'Сортировка по дате (с поздних)' },
          {
            value: 'totalPrice-desc',
            label: 'Сортировка по сумме (с больших)',
          },
          { value: 'totalPrice-asc', label: 'Сортировка по сумме (с малых)' },
        ]}
      />
    </TableOperations>
  )
}

export default BookingTableOperations
