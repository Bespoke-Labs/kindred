import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

import logo from '../../public/kin_logo.png';
import LaunchDapp from '../Stuff/LaunchDapp';

import Image from 'next/image';

const Links = ['Ecosystem', 'Community', 'Governance', 'Developers', 'Blog', 'FAQ', 'Jobs'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><Image style={{ height: '50px', width: '50px' }} src={logo} alt={'logo'}
                        /></Box>

                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}

                            {/* <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Ecosystem</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Community</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Governance</Link> */}



                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Developers</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Blog</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>FAQ</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Jobs</Link>

                            <LaunchDapp />

                        </HStack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}