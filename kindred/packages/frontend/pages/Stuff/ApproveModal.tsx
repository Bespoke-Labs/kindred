import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image

} from '@chakra-ui/react';

import * as React from 'react';

import usdc from './node_modules/cryptocurrency-icons/svg/color/kmd.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Grid, GridItem } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function SimpleCard() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Approve Your Coins!</Heading>
                    {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text> */}
                </Stack>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        {/* <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl> */}

                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            // paddingLeft: "20px",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <input style={{ margin: "10px" }} type="checkbox" />

                                <img style={{ margin: "5px" }} width="30px" src="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" />
                                <p style={{ paddingLeft: "1px" }} >150,000 USDC</p>
                                <p style={{ paddingLeft: "80px" }} >$150,000</p>
                            </div>

                        </div>

                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            // paddingLeft: "20px",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <input style={{ margin: "10px" }} type="checkbox" />

                                <img style={{ margin: "5px" }} width="30px" src="https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png" />
                                <p style={{ paddingLeft: "1px" }} >16,452 Ape Coin</p>
                                <p style={{ paddingLeft: "80px" }} >$67,946.76</p>
                            </div>

                        </div>

                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            // paddingLeft: "20px",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <input style={{ margin: "10px" }} type="checkbox" />

                                <img style={{ margin: "5px" }} width="30px" src="https://s2.coinmarketcap.com/static/img/coins/200x200/7278.png" />
                                <p style={{ paddingLeft: "1px" }} >588 Aave</p>
                                <p style={{ paddingLeft: "150px", paddingRight: "10px" }} >$37,490.12</p>
                            </div>

                        </div>

                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            // paddingLeft: "20px",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <input style={{ margin: "10px" }} type="checkbox" />

                                <img style={{ margin: "5px" }} width="30px" src="https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076" />
                                <p style={{ paddingLeft: "1px" }} >1,140 ENS Token  </p>
                                <p style={{ paddingLeft: "80px" }} >$15,710.66</p>
                            </div>

                        </div>
                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            // paddingLeft: "20px",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <input style={{ margin: "10px" }} type="checkbox" />

                                <img style={{ margin: "5px" }} width="30px" src="https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png" />
                                <p style={{ paddingLeft: "1px" }} >605,089,334 SHIB</p>
                                <p style={{ paddingLeft: "15 0px", paddingRight: "10px" }} >$5,588.05</p>
                            </div>

                        </div>

                    </Stack>
                </Box>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        {/* <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl> */}


                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            // paddingLeft: "20px",
                        }}>
                            <label color='#F0F3FF'>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    color='#F0F3FF'
                                // value={name}
                                // onChange={e => setName(e.target.value)}

                                />
                            </label>

                        </div>

                    </Stack>
                </Box>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={18}>
                    <Stack spacing={5}>

                        {/* <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl> */}

                        {/* {/* <Box bg={'#F0F3FF'} borderRadius='16'>
                            <Grid paddingTop={'5px'} templateColumns='repeat(5, 1fr)' gap={10}>
                                <GridItem paddingLeft={'10px'} w='500%' h='20' >
                                    <p className={`${inter.className} ${'leftText'}`}>Approval of payment to kin:</p>
                                </GridItem>
                                <GridItem paddingLeft={'150px'} w='300%' h='20' >
                                    <p className={`${inter.className} ${'rightText'}`}>~225,523 USDC</p>
                                </GridItem>

                            </Grid>

                            <Grid paddingTop={'-40'} templateColumns='repeat(5, 1fr)' gap={10}>
                                <GridItem paddingLeft={'10px'} w='500%' h='20' >
                                    <p className={`${inter.className} ${'leftText'}`}>Approval of payment to kin:</p>
                                </GridItem>
                                <GridItem paddingLeft={'150px'} w='300%' h='20' >
                                    <p className={`${inter.className} ${'rightText'}`}>~225,523 USDC</p>
                                </GridItem>

                            </Grid>
                        </Box> */}


                        <div style={{
                            backgroundColor: "#F0F3FF",
                            borderRadius: "16px",
                            padding: "10px",
                            margin: "0 0px",
                            paddingRight: '30px'
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <p className={inter.className + " leftText"}>Approval of payment to kin:</p>
                                <p className={inter.className + " rightText"} style={{ marginLeft: "auto" }}>~225,523 USDC</p>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <p className={inter.className + " leftText"}>Kindred fee once dead:</p>
                                <p className={inter.className + " rightText"} style={{ marginLeft: "auto" }}>2255.23 USDC</p>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <p className={inter.className + " leftText"}>Gas Fee:     </p>
                                <p className={inter.className + " rightText"} style={{ marginLeft: "auto" }}>0.0012 ETH</p>
                            </div>
                        </div>


                        <Stack spacing={10}>

                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Approve Spending (selected 1)*
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}