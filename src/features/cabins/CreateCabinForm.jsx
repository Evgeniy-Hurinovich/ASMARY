import { useForm } from 'react-hook-form'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'

import { useCreateCabin } from './useCreateCabin'
import { useEditCabin } from './useEditCabin'

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin()
  const { isEditing, editCabin } = useEditCabin()
  const isWorking = isCreating || isEditing

  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const { errors } = formState

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal?.()
          },
        }
      )
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal?.()
          },
        }
      )
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label="Имя домика" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'Это поле обязательно для заполнения',
          })}
        />
      </FormRow>

      <FormRow label="Вместимость" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'Это поле обязательно для заполнения',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Скидка должна быть меньше обычной цены',
          })}
        />
      </FormRow>

      <FormRow label="Описание для сайта" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
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
            required: isEditSession
              ? false
              : 'Это поле обязательно для заполнения',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Назад
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Редактировать' : 'Создать новое предложение'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
