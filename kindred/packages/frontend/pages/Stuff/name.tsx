import { ReactNode } from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    Image
} from '@chakra-ui/react';
import logo from './hug.png';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function StatsGridWithImage() {
    return (
        <Box bgGradient={'linear(to-r, #FFFFFF 60%, transparent)'}
            position={'relative'}>
            < Flex
                flex={1}
                zIndex={0}
                display={{ base: 'none', lg: 'flex' }
                }
                backgroundImage="url('/templates/stats-grid-with-image.png')"
                backgroundSize={'cover'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={'absolute'}
                width={'50%'}
                insetY={0}
                right={0} >
                {/* <Flex
                    bgGradient={'linear(to-r, gray.800 10%, transparent)'}
                    w={'full'}
                    h={'full'}
                /> */}
            </Flex >
            <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack
                        flex={1}
                        color={'gray.400'}
                        justify={{ lg: 'center' }}
                        py={{ base: 4, md: 20, xl: 60 }}>
                        <Box mb={{ base: 8, md: 20 }}>
                            {/* <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                color={'gray.500'}>
                                Technology
                            </Text> */}
                            <Heading
                                color={'gray.800'}
                                mb={5}
                                fontSize={{ base: '3xl', md: '5xl' }}>
                                Kindred
                            </Heading>
                            <div className='grid-container'>
                                <Text fontSize={'xl'} color={'gray.400'}>
                                    Kindred is a social recovery multisig dapp used to distribute funds from their wallets to family members, loved ones and friends for when they pass away.
                                </Text>

                                <Image
                                    boxSize='500px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/2374/2374691.png'
                                    alt='Hug'
                                />

                            </div>

                            <Row>
                                <Text fontSize={'xl'} color={'gray.400'}>
                                    Kindred is a social recovery multisig dapp used to distribute funds from their wallets to family members, loved ones and friends for when they pass away.
                                </Text>

                                <Image
                                    boxSize='500px'
                                    objectFit='cover'
                                    src='https://cdn-icons-png.flaticon.com/512/2374/2374691.png'
                                    alt='Hug'
                                />
                            </Row>

                        </Box>

                        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {stats.map((stat) => (
                                <Box key={stat.title}>
                                    <Text
                                        fontFamily={'heading'}
                                        fontSize={'3xl'}
                                        color={'white'}
                                        mb={3}>
                                        {stat.title}
                                    </Text>
                                    <Text fontSize={'xl'} color={'gray.400'}>
                                        {stat.content}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid> */}
                    </Stack>
                    <Flex flex={1} />
                </Stack>
            </Container>
        </Box >
    );
}

// const StatsText = ({ children }: { children: ReactNode }) => (
//     <Text as={'span'} fontWeight={700} color={'white'}>
//         {children}
//     </Text>
// );

// const stats = [
//     {
//         title: '10+',
//         content: (
//             <>
//                 <StatsText>Software modules</StatsText> for detailed monitoring and
//                 real-time analytics
//             </>
//         ),
//     },
//     {
//         title: '24/7',
//         content: (
//             <>
//                 <StatsText>Analytics</StatsText> enabled right in your dashboard without
//                 history limitations
//             </>
//         ),
//     },
//     {
//         title: '13%',
//         content: (
//             <>
//                 <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
//                 their management solution
//             </>
//         ),
//     },
//     {
//         title: '250M+',
//         content: (
//             <>
//                 <StatsText>Plants</StatsText> currently connected and monitored by the
//                 NewLife™ software
//             </>
//         ),
//     },
// ];