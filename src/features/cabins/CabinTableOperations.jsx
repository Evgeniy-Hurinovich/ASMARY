import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'Всё' },
          { value: 'no-discount', label: 'Без скидки' },
          { value: 'with-discount', label: 'со скидкой' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Сортриовка по имени (А-Я)' },
          { value: 'name-desc', label: 'Сортриовка по имени (Я-А)' },
          { value: 'regularPrice-asc', label: 'Сортриовка по цене (с низкой)' },
          {
            value: 'regularPrice-desc',
            label: 'Сортриовка по цене (с высокой)',
          },
          {
            value: 'maxCapacity-asc',
            label: 'Сортриовка по вместительности (с низкой)',
          },
          {
            value: 'maxCapacity-desc',
            label: 'Сортриовка по вместительности (с высокой)',
          },
        ]}
      />
    </TableOperations>
  )
}

export default CabinTableOperations
