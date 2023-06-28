import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuButton,
    IconButton,
    useColorModeValue,
    MenuList
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inActiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inActiveColor}
            >{children}
            </Link>
        </NextLink>
    )
}

const Navbar = (props) => {
    const { path } = props
    return (
        <Box
            position={'fixed'}
            display={'flex'}
            direction={'row'}
            as={'nav'}
            w={'100%'}
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display={'flex'}
                p={2}
                maxWidth={'container.md'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Flex align={'center'} mr={5}>
                    <Heading as='h1' size='lg' display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Logo />
                    </Heading>
                </Flex>
            
            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'auto', md: 'full' }}
                alignItems={'center'}
                mt={{ base: 4, md: 0 }}
            >
                <LinkItem href={'#'} path={path}>Works</LinkItem>
                <LinkItem href={'#'} path={path}>Works</LinkItem>
                <LinkItem href={'#'} path={path}>Works</LinkItem>
            </Stack>
            </Container>

            <Box flex={1} align='right'>
                <ThemeToggleButton/>
                <Box m={2} display={{base: 'inline-block', md: 'none'}}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant={'outline'} aria-label={'Options'}/>
                        <MenuList>
                            <NextLink href='#'>
                                <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                            <NextLink href='#'>
                                <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                            <NextLink href='#'>
                                <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar