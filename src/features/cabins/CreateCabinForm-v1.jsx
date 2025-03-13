import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'

import { useForm } from 'react-hook-form'
import { createCabin } from '../../services/apiCabins'

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState

  const queryClient = useQueryClient()

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Новый апартмент создан')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },
    onError: (err) => toast.error(err.message),
  })

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] })
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Имя домика" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register('name', {
            required: 'Это поле обязательно для заполнения',
          })}
        />
      </FormRow>

      <FormRow label="Вместимость" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register('maxCapacity', {
            required: 'Это поле обязательно для заполнения',
            min: {
              value: 1,
              message: 'Вместимость должна быть не менее 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Обычная цена" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register('regularPrice', {
            required: 'Это поле обязательно для заполнения',
            min: {
              value: 1,
              message: 'Вместимость должна быть не менее 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Скидка" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register('discount', {
            required: 'Это поле обязательно для заполнения',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Скидка должна быть меньше обычной цены',
          })}
        />
      </FormRow>

      <FormRow
        label="Описание для сайта"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register('description', {
            required: 'Это поле обязательно для заполнения',
          })}
        />
      </FormRow>

      <FormRow label="Фото домика">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: 'Это поле обязательно для заполнения',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Назад
        </Button>
        <Button disabled={isCreating}>Добавить домик</Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
