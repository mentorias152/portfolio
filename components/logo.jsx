import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
justify-content: center;
height: 30px;
line-height: 20px;
padding: 10px;
}
`
const Logo = () => {
    return (
                <LogoBox >
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily={'M PLUS Rounded 1c'}
                        ml={3}
                        fontSize={'xl'}
                    >Mentorias
                    </Text>
                </LogoBox>
    )
}

export default Logo