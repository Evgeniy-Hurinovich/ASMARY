import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import { toast } from 'react-hot-toast'

export function useCheckout() {
  const queryClient = useQueryClient()

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: (data) => {
      toast.success(`Бронирование #${data.id} оформлено`)
      queryClient.invalidateQueries({ active: true })
    },

    onError: () => toast.error('Произошла ошибка при оформлении заказа'),
  })

  return { checkout, isCheckingOut }
}
