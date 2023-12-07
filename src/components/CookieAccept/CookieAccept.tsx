import { useLocalStorage } from "usehooks-ts"
import { Container, ContainerCookie, Wrapper } from "./cookieaccept.styled"
import { useEffect } from "react"

export default function () {

  useEffect(() => {
    if (!cookies) {
      setCookies(false)
    }
  }, [])

  const handleAccept = () => {
    setCookies(true)
  }
  const [cookies, setCookies] = useLocalStorage('cookies', false)

  return (
    <ContainerCookie>

      <Container className={cookies ? 'cookie' : ''}>
        <Wrapper>
          <div>
            <p>
              This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to the use of cookies in accordance with our Privacy Policy.
            </p>
          </div>
          <div>
            <button onClick={handleAccept}>
              <span>
                Accept
              </span>
            </ button >
          </div>
        </Wrapper>
      </Container>
    </ContainerCookie>

  )
}