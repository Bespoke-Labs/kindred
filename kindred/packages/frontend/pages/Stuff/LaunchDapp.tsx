import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link'

export default function LaunchDapp(props: ButtonProps) {
    return (
        /**
         * Ideally, only the button component should be used (without Flex).
         * Props compatible with <Button /> are supported.
         */
        <Flex h="100vh" justifyContent="center" alignItems="center"  >
            <Button colorScheme='teal' size='md' >
                <Link href="/dapp">Launch App</Link>

            </Button>
        </Flex>


    );
}