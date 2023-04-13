import * as S from './style'

type Props = {
    children: React.ReactNode
}

export default function Modal({
    children
}: Props){
    return <S.Container>
        <S.Wrapper>
            {children}
        </S.Wrapper>
    </S.Container>
}