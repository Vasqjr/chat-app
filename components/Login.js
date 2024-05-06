import Head from "next/head";
import { ChatIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Stack } from "@chakra-ui/react";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Center
                h="100vh"
            >
                <Stack>
                    <Box
                        bgColor="rgb(127,0,255)"
                        w="fit-content"
                        padding={5}
                        rounded="3xl"
                        boxShadow="md"
                    >
                    <ChatIcon w="100px" h="100px" color="rgb(255,255,255)" />
                    </Box>

                    <Button boxshadow="md">Sign In with Google</Button>
                </Stack>
                
            
            
            
            </Center>
            
        </>
        )
}