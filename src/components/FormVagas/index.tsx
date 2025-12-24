import { FormEvent, useState, ChangeEvent } from 'react'
import { Form, Campo, BotaoPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  const aoAlterarCampo = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        type="search"
        placeholder="Front-end, fullstack, node, design"
        onChange={aoAlterarCampo}
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Form>
  )
}

export default FormVagas
