import { VagaContainer, VagaTitulo, VagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<Props> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>

    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>

    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
