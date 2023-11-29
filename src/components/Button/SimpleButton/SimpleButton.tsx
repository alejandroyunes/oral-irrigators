import { Link } from "react-router-dom"
import { SimpleButton as Button, Container } from "./simple.styled"

type SimpleButtonProps = {
  text: string
  url: string
  blank?: boolean
  color?: boolean
}

export default function ({ text, url, color, blank }: SimpleButtonProps) {
  return (
    <Container>
      <Button>
        <Link to={url} target={blank ? '_blank' : '_self'} >

          <span className={color ? 'color' : ''}>
            {text}
          </span>
        </Link>

      </Button>
    </Container>
  )
}