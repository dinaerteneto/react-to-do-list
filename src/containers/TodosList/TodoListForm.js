import React from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'
import { withFormik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  term: Yup.string()
    .required('Informe a tarefa que deseja adicionar.')
    .min(5, 'A tarefa deve conter mais de 5 letras!')
    .max(100, 'A tarefa deve conter menos de 100 letras!')
})

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ term: ''}),
  handleSubmit: (values, formikBag) => {
    console.log(values)
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'MyForm',
  validationSchema: schema
});

const MyForm = ({term, changeHandle, submitHandle}) => {
  return (
    <Form onSubmit={submitHandle}>
      <Form.Field>
        <Label>Digite o nome da tarefa que quer adicionar</Label>
        <Input placeholder='Adicionar item na lista' onChange={changeHandle} value={term} />
        <ErrorMessage name="name" />
        <Button type='submit'>Submit</Button>
      </Form.Field> 
    </Form>     
  )
}

export default enhanceWithFormik(MyForm)