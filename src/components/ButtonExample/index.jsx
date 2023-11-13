import { Container, LoadIndicator, Title } from "./styles";

export function ButtonExample({ title, isLoading = false, ...rest }) {
    return (
        <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
            {isLoading ? <LoadIndicator /> : <Title>{title}</Title>}
        </Container>
    );
}
